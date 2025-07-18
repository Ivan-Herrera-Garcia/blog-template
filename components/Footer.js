'use client';
import { useState } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
} from 'react-icons/fa';

export default function Footer({ me = false }) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        const res = await fetch('/api/postSuscripcion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setMessage(data.message || data.error);
        setEmail('');
    };

    return (
        <footer className="bg-gray-800 text-white py-10 px-6 sm:px-10 lg:px-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
                    <p className="text-sm mb-4">
                        Sign up to receive updates on projects, launches, and more.
                    </p>
                    <form className="flex" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="flex-1 px-3 py-2 text-black bg-white border rounded-l focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 font-semibold hover:cursor-pointer transition-colors duration-200 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Subscribe
                        </button>
                    </form>
                    {message && (
                        <p className="text-sm mt-2 text-gray-300">{message}</p>
                    )}
                </div>

                {me && (
                    <div>
                        <h3 className="font-semibold mb-2">Follow Me</h3>
                        <div className="flex space-x-4 text-xl">
                            <a
                                href="https://github.com/ivan-herrera-garcia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bellkhen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.instagram.com/_ivan.dev_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="mailto:ivan.herrera.garc@gmail.com"
                                className="hover:text-yellow-300"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <div className="max-w-screen-xl mx-auto mt-10 border-t border-gray-700 pt-6 text-center text-sm">
                © 2025 CodeHunters. All rights reserved.
            </div>
        </footer>
    );
}
