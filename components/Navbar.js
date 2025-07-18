'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const cookieValue = Cookie.get('username');
        if (cookieValue) {
            try {
                const value = JSON.parse(decodeURIComponent(cookieValue));
                setUser(value.name ? { name: value.name } : null);
            } catch (err) {
                console.error('Error parsing user cookie:', err);
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        const res = await fetch('/api/postAddUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: username }),
        });

        const data = await res.json();
        if (data?.user) {
            Cookie.set('username', JSON.stringify(data.user), { expires: 60, path: '/' }); // ✅ 60 días
            setUser(data.user);
            setShowModal(false);
            setUsername('');
        } else {
            alert(data.error || 'Failed to create user');
        }
    };

    return (
        <>
            <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
                    </Link>
                    <div className="text-lg font-bold">CodeHunters</div>
                </div>
                <ul className="flex items-center space-x-4">
                    <li>
                        <Link href="/news" className="hover:underline">News</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:underline">Projects</Link>
                    </li>
                    {user ? (
                        <li className="text-sm text-green-400 font-semibold">Hi, {user.name}</li>
                    ) : (
                        <li>
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1 rounded hover:cursor-pointer"
                            >
                                Join
                            </button>
                        </li>
                    )}
                </ul>
            </nav>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                        <h2 className="text-xl font-semibold mb-4 text-black">Enter your username</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="e.g., Bellkhen"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 text-black"
                                required
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-sm border rounded text-white bg-gray-400 hover:bg-gray-500 hover:cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 hover:cursor-pointer"
                                >
                                    Join
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
