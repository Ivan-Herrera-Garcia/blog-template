import clientPromise from '@/database/mongodb';
import { cookies } from 'next/headers';
import { ObjectId } from 'mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('Users');

    const existingUser = await collection.findOne({ name });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists.' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await collection.insertOne({ name });
    const createdUser = await collection.findOne({ _id: result.insertedId });

    return new Response(JSON.stringify({ message: 'User added successfully.', user: createdUser }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error adding user', details: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
