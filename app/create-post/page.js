'use client';

import { useState } from 'react';
import allTopics from '@/utils/topics';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Bellkhen');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [message, setMessage] = useState('');
  const [topics, setTopics] = useState([]);
  const [isProject, setIsProject] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleTopicChange = (e) => {
    const options = Array.from(e.target.options);
    const selected = options.filter((opt) => opt.selected).map((opt) => opt.value);
    setTopics(selected);
  };

  const handleMediaUpload = async (e) => {
    const files = e.target.files;
    if (!files.length) return;

    setUploading(true);

    const newImages = [];
    const newVideos = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'code_hunters');

      const resourceType = file.type.startsWith('video/') ? 'video' : 'image';

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/do3afaqmr/${resourceType}/upload`, {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();

        if (data.secure_url) {
          if (resourceType === 'image') newImages.push(data.secure_url);
          else newVideos.push(data.secure_url);
        }
      } catch (err) {
        console.error('Upload error:', err);
      }
    }

    setImages((prev) => [...prev, ...newImages]);
    setVideos((prev) => [...prev, ...newVideos]);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !content.trim()) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const res = await fetch('/api/postAddPost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        author,
        content,
        images,
        topics,
        isProject,
        videoUrl: videos
      }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);

    if (res.status === 201) {
      setTitle('');
      setAuthor('Bellkhen');
      setContent('');
      setImages([]);
      setVideos([]);
      setTopics([]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 m-4 text-black">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Create New Post</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Share your thoughts and ideas with the world.
        </p>

        {message && (
          <div className="mb-4 text-sm text-center text-blue-600">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded px-4 py-2" required />

          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full border border-gray-300 rounded px-4 py-2" required />

          <textarea placeholder="Write your content here..." value={content} onChange={(e) => setContent(e.target.value)} rows={6} className="w-full border border-gray-300 rounded px-4 py-2" required />

          <div>
            <label className="block text-sm font-medium mb-1">Select Topics</label>
            <select multiple value={topics} onChange={handleTopicChange} className="w-full border border-gray-300 rounded px-4 py-2 h-40">
              {allTopics.map((topic, index) => (
                <option key={index} value={topic}>{topic}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Hold Ctrl (or Cmd on Mac) to select multiple topics.</p>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" checked={isProject} onChange={(e) => setIsProject(e.target.checked)} className="mr-2" />
            <label className="text-sm">Mark as project post</label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload Images or Videos</label>
            <input type="file" accept="image/*,video/*" multiple onChange={handleMediaUpload} />
            {uploading && <p className="text-sm text-gray-500">Uploading media...</p>}

            <div className="flex flex-wrap gap-2 mt-4">
              {images.map((img, i) => (
                <img key={i} src={img} alt={`Image ${i}`} className="w-24 h-24 object-cover rounded" />
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {videos.map((video, i) => (
                <video key={i} controls className="w-48 h-32 rounded shadow">
                  <source src={video} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              ))}
            </div>
          </div>

          <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
            Publish Post
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
