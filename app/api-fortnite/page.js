
'use client';

import { FaList, FaTh } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NewsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isGridView, setIsGridView] = useState(false); // ✅ nuevo estado

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('https://api.fortnite.com/ecosystem/v1/islands');
                const data = await res.json();
                setPosts(data.data.reverse()); // mostrar más recientes primero
                setLoading(false);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return (
        <main className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 m-4 transition hover:shadow-2xl">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Latest Islands more popular on Fortnite (12/07/2025)</h1>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Stay updated with the latest islands more popular on Fortnite.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                    Usage Notes / Limitations: Historical data is limited to 7 days. Only data for public and discoverable Fortnite islands are available. Islands need at least 5 unique players for the specified time interval for data to appear—otherwise, you&apos;ll get a null value. Favorites and recommendations are not supported for some Epic-made games, so these fields will return 0.
                    <ul className="text-blue-500 hover:underline">
                        <li>
                            <Link href="https://api.fortnite.com/ecosystem/v1/docs/#/Islands/get_islands__code__metrics__interval__plays" target="_blank" rel="noopener noreferrer">
                                <FaLink className="inline mr-1" />API Documentation
                            </Link>
                        </li>
                    </ul>
                    <p className="text-gray-500 text-sm mb-6">
                        Note: The data is fetched from the Fortnite API and may not be up-to-date.
                    </p>
                </p>

                {/* ✅ Botón para cambiar la vista */}
                {/* Botón de cambio de vista (solo en pantallas medianas hacia arriba) */}
                <div className="hidden sm:flex justify-end mb-6">
                    <button
                        onClick={() => setIsGridView(false)}
                        className={`p-2 rounded-l border border-gray-300 ${!isGridView ? 'bg-gray-300' : 'bg-white'
                            } hover:bg-gray-200 transition hover:cursor-pointer`}
                        aria-label="List view"
                    >
                        <FaList className="text-gray-700" />
                    </button>
                    <button
                        onClick={() => setIsGridView(true)}
                        className={`p-2 rounded-r border border-gray-300 border-l-0 ${isGridView ? 'bg-gray-300' : 'bg-white'
                            } hover:bg-gray-200 transition hover:cursor-pointer`}
                        aria-label="Grid view"
                    >
                        <FaTh className="text-gray-700" />
                    </button>
                </div>

                {/* ✅ Posts */}
                {loading ? (
                    <div className="flex items-center justify-center h-80">
                        <p className="text-center text-gray-500">Loading islands...</p>
                    </div>
                ) : posts.length === 0 ? (
                    <div className="flex items-center justify-center h-80">
                        <p className="text-center text-gray-500">No islands available.</p>
                    </div>
                ) : (
                    <div className={isGridView ? 'grid md:grid-cols-3 gap-6' : 'grid md:grid-cols-1 space-y-6'}>
                        {posts.map((island, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition">
                                <h2 className="text-lg font-bold text-gray-800 mb-1">{island.title.toUpperCase()}</h2>
                                <p className="text-sm text-gray-500 mb-2">Code: <span className="font-mono">{island.code}</span></p>
                                <p className="text-sm text-gray-500">By: <span className="text-shadow-fuchsia-600">{island.creatorCode}</span></p>
                                <p className="text-xs text-gray-400 mb-2">Created in: {island.createdIn}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {island.tags.map((tag, i) => (
                                        <span key={i} className="bg-purple-400 text-xs text-gray-700 px-2 py-1 rounded-full">{tag.toUpperCase()}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}