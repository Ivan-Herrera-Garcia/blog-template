'use client';

import { FaList, FaTh } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(false); // ✅ nuevo estado

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/getPosts');
        const data = await res.json();
        setPosts(data.reverse()); // mostrar más recientes primero
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
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Latest News</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Stay updated with the latest posts and articles on programming, anime, games, and more.
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
            <p className="text-center text-gray-500">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex items-center justify-center h-80">
            <p className="text-center text-gray-500">No posts available.</p>
          </div>
        ) : (
          <div className={isGridView ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
            {posts.map((post, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded shadow hover:shadow-md transition bg-white"
              >
                <Link href={`/news/${post._id}`} className="block mb-2 hover:cursor-pointer">
                  <h2 className="text-2xl font-bold text-gray-800">{post.title}
                    <FaLink className="inline-block ml-2 mb-1 text-[20px] text-gray-500 hover:text-blue-500" />
                  </h2>
                </Link>
                <p className="text-sm text-gray-500 mb-2">
                  By {post.author} • {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-2">
                  {post.content.slice(0, 150)}...
                </p>

                {post.topics && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {post.images && post.images.length > 0 && (
                  <div className={`mt-4 grid ${post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
                    {post.images.slice(0, 2).map((img, i) => (
                      <div key={i} className="w-full h-32 bg-white flex items-center justify-center rounded shadow">
                        <Image
                          src={img}
                          alt={`Post Image ${i + 1}`}
                          className="w-full h-full object-contain rounded"
                          width={500}
                          height={128}
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
