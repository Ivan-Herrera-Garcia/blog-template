'use client'
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

export default function CommentSection({ postId }) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const cookie = Cookie.get('username');
        if (cookie) {
            try {
                const parsed = JSON.parse(decodeURIComponent(cookie));
                console.log(parsed);
                setUser(parsed);
            } catch (e) {
                console.error("Failed to parse cookie");
            }
        }

        fetch(`/api/getComments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(console.error);
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user || !comment.trim()) return;

        const res = await fetch('/api/postAddComment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idUser: user._id, name: user.name, comment, postId }),
        });

        const data = await res.json();
        if (res.ok) {
            setComments([{ idUser: user._id, name: user.name, comment, createdAt: new Date() }, ...comments]);
            setComment('');
        } else {
            alert(data.error || 'Error submitting comment');
        }
    };

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-black">Comments</h2>

            {user ? (
                <form onSubmit={handleSubmit} className="mb-6">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="3"
                        className="w-full border p-2 rounded mb-2 text-black"
                        placeholder="Write a comment..."
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer">
                        Submit
                    </button>
                </form>
            ) : (
                <p className="text-gray-500 mb-4">You must join with your username to comment.</p>
            )}

            {comments.length > 0 ? (
                <div className="space-y-4">
                    {comments.map((c, i) => (
                        <div key={i} className="border p-3 rounded shadow-sm bg-gray-50">
                            <p className="font-semibold text-gray-800">
                                {c.idUser ? c.name || 'Anonymous' : 'Anonymous'}
                            </p>
                            <p className="text-sm text-gray-800">{c.comment}</p>
                            <p className="text-xs text-gray-500 mt-1">Posted on {new Date(c.createdAt).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No comments yet.</p>
            )}
        </div>
    );
}
