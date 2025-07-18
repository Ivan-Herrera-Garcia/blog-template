import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/CommentSection";

async function getPost(id) {
  const res = await fetch(`https://code-hunters.netlify.app/api/getPost?id=${id}`, {
    method: "GET",
    cache: 'no-store',
  });
  if (!res.ok) throw new Error("Error al obtener el post");
  return res.json();
}

export default async function Detalle({ params }) {
  const data = await getPost(params.post);
  const postData = await data;

  if (!postData) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
          <p className="text-gray-600">The post you are looking for does not exist.</p>
        </div>
      </main>
    );
  }

  // Asegura que videoUrl sea un arreglo
  const videos = Array.isArray(postData.videoUrl)
    ? postData.videoUrl
    : postData.videoUrl
    ? [postData.videoUrl]
    : [];

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 m-4 transition hover:shadow-2xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{postData.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          By {postData.author} • {new Date(postData.createdAt).toLocaleDateString()}
        </p>

        {postData.topics?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {postData.topics.map((topic, i) => (
              <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6">
          {postData.content}
        </div>

        {postData.images?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {postData.images.map((img, i) => (
              <div key={i} className="w-full">
                <Image
                  src={img}
                  alt={`Post image ${i + 1}`}
                  className="w-full object-contain rounded shadow"
                  width={800}
                  height={500}
                />
              </div>
            ))}
          </div>
        )}

        {videos.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Videos</h2>
            <div className={`grid gap-4 ${videos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
              {videos.map((url, i) => (
                <div key={i} className="w-full">
                  <iframe
                    src={url}
                    title={`Post Video ${i + 1}`}
                    className="w-full aspect-video rounded shadow"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        <CommentSection postId={postData._id} />

        <div className="mt-6">
          <Link href="/news" className="text-blue-600 hover:underline">
            ← Back to News
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
