import clientPromise from '@/database/mongodb';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get('postId');

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('Comments');

    const comments = await collection.find({ postId }).sort({ createdAt: -1 }).toArray();

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error fetching comments', details: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
