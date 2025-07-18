// app/api/suscribirse/route.js o route.ts
import clientPromise from '@/database/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    const idUser = body.idUser?.trim();
    const name = body.name?.trim();
    const comment = body.comment?.trim();
    const postId = body.postId?.trim();

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('Comments');

    await collection.insertOne({ idUser, name, comment, postId, createdAt: new Date() });

    return new Response(JSON.stringify({ message: 'Comment added successfully.' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error saving comment', details: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}