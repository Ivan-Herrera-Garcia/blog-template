/* eslint-disable @next/next/no-img-element */
'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Card3D from '@/components/Card3D';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaList, FaTh } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(false); // ✅ nuevo estado

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/getAllPosts');
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
    <main className="min-h-screen bg-gray-100 ">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 m-4 transition hover:shadow-2xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to My Blog</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          This blog is a personal space where I share the things I&apos;m most passionate about — from coding with <strong>React</strong>, <strong>Next.js</strong>, and <strong>C#</strong>,
          to exploring anime, manga, and trading card games like <strong>Yu-Gi-Oh!</strong> and <strong>Pokémon</strong>.
          Whether you&apos;re into tech or just looking for a chill read about fandoms and creative hobbies, you&apos;re welcome here.
        </p>

        <h4 className="text-2xl font-semibold mb-4 text-gray-800">What You&apos;ll Find Here</h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <h5 className="text-lg font-semibold mb-2 text-gray-800 col-span-2 md:col-span-4">Technologies I Use</h5>
          <div className="w-full h-32 perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-x-180">

              {/* FRONT */}
              <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/html.png" alt="HTML Logo" className="h-12 w-12" />
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full backface-hidden rotate-x-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <span className="text-sm font-semibold">HTML5</span>
              </div>
            </div>
          </div>
          <div className="w-full h-32 perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-x-180">

              {/* FRONT */}
              <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/python.png" alt="Python Logo" className="h-12 w-12" />
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full backface-hidden rotate-x-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <span className="text-sm font-semibold">Python</span>
              </div>
            </div>
          </div>
          <div className="w-full h-32 perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-x-180">

              {/* FRONT */}
              <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/l_c.png" alt="C# Logo" className="h-12 w-12" />
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full backface-hidden rotate-x-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <span className="text-sm font-semibold">C#</span>
              </div>
            </div>
          </div>
          <div className="w-full h-32 perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-x-180">

              {/* FRONT */}
              <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/github.png" alt="GitHub Logo" className="h-12 w-12" />
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full backface-hidden rotate-x-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <span className="text-sm font-semibold">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seccion de tecnologias en el proyecto a forma de lista con los siguientes enlaces:
        https://code-hunters.netlify.app/tesseract */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <h5 className="text-lg font-semibold mb-2 text-gray-800 col-span-2 md:col-span-4">
            Implemented Technologies
            <FaLink className="inline ml-1" />
          </h5>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2 '>
            <div className="w-full h-32 perspective group relative">
              <Link
                href="https://code-hunters.netlify.app/tesseract"
                target="_blank"
                className="block w-full h-full"
              >
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  Visitar sitio
                </div>

                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-x-180">
                  {/* FRONT */}
                  <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-50 rounded-lg md:shadow">
                    <img src="/tesseract.jpg" alt="Tesseract Logo" className="h-full rounded-2xl" />
                  </div>

                  {/* BACK */}
                  <div className="absolute w-full h-full backface-hidden rotate-x-180 flex items-center justify-center bg-gray-800 text-white rounded-lg md:shadow">
                    <span className="text-sm font-semibold">OCR Tesseract</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full h-32 perspective group relative">
              <Link
                href="https://code-hunters.netlify.app/api-fortnite"
                target="_blank"
                className="block w-full h-full"
              >
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  Visitar sitio
                </div>

                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-x-180">
                  {/* FRONT */}
                  <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-50 rounded-lg md:shadow">
                    <img src="/fortnite.jpg" alt="Fortnite Logo" className="h-full rounded-2xl" />
                  </div>

                  {/* BACK */}
                  <div className="absolute w-full h-full backface-hidden rotate-x-180 flex items-center justify-center bg-gray-800 text-white rounded-lg md:shadow">
                    <span className="text-sm font-semibold">API REST - Fortnite API</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <h5 className="text-lg font-semibold mb-2 text-gray-800 col-span-1 md:col-span-3">Trading Card Games</h5>
          <div className="hidden md:flex justify-center items-center w-full h-auto md:h-96 perspective">
            <div className=" relative w-72 h-[26rem] md:w-full md:h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/yugioh_reverse.png" alt="Yu-Gi-Oh! Back" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <img src="/yugioh_1.jpg" alt="Yu-Gi-Oh! Front" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center w-full h-auto md:h-96 perspective">
            <div className="relative w-72 h-[26rem] md:w-full md:h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/yugioh_reverse.png" alt="Yu-Gi-Oh! Back" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <img src="/yugioh_2.jpg" alt="Yu-Gi-Oh! Front" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center w-full h-auto md:h-96 perspective">
            <div className="relative w-72 h-[26rem] md:w-full md:h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/yugioh_reverse.png" alt="Yu-Gi-Oh! Back" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <img src="/yugioh_3.jpg" alt="Yu-Gi-Oh! Front" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Card3D front="/yugioh_reverse.png" back="/yugioh_1.jpg" alt="Yu-Gi-Oh! Card 1" />
          </div>
          <div className="flex justify-center items-center">
            <Card3D front="/yugioh_reverse.png" back="/yugioh_2.jpg" alt="Yu-Gi-Oh! Card 2" />
          </div>
          <div className="flex justify-center items-center">
            <Card3D front="/yugioh_reverse.png" back="/yugioh_3.jpg" alt="Yu-Gi-Oh! Card 3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <h5 className="text-lg font-semibold mb-2 text-gray-800 col-span-1 md:col-span-3">Anime & Manga (My top tier)</h5>
          <div className="hidden md:flex justify-center items-center w-full h-auto md:h-96 perspective">
            <div className="relative w-72 h-[26rem] md:w-full md:h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/anime.jpg" alt="Anime Back" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <span className="text-sm font-semibold">
                  Tsuki ga Michibiku Isekai Douchuu</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center w-full h-auto md:h-96 perspective">
            <div className="relative w-72 h-[26rem] md:w-full md:h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/anime_2.jpg" alt="Code Geass Anime" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <span className="text-sm font-semibold">
                  Code Geass</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center w-full h-auto md:h-96 perspective">
            <div className="relative w-72 h-[26rem] md:w-full md:h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
                <img src="/anime_3.png" alt="Dio Anime" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
                <span className="text-sm font-semibold">JoJo&apos;s Bizarre Adventure <br /> (Not is a png image)</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Card3D front="/anime.jpg" back="Tsuki ga Michibiku Isekai Douchuu" alt="Tsuki ga Michibiku Isekai Douchuu" />
          </div>
          <div className="flex justify-center items-center">
            <Card3D front="/anime_2.jpg" back="Code Geass" alt="Code Geass" />
          </div>
          <div className="flex justify-center items-center">
            <Card3D front="/anime_3.png" back="Jojo's Bizarre Adventure (Yes, it's a PNG image)" alt="Jojo's Bizarre Adventure" />
          </div>
        </div>


        <div className="mt-6">
          <Link href="/news">
            <div className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition">
              Explore Blog
              <FaArrowRight className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
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

                {/* Ajustar las cols segun el numero de imgs */}
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
