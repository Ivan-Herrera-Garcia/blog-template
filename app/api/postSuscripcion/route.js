// app/api/suscribirse/route.js o route.ts
import clientPromise from '@/database/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    const email = body.email?.trim();

    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('Suscriptores');

    // Verifica si el correo ya está registrado
    const existente = await collection.findOne({ email });
    if (existente) {
      return new Response(JSON.stringify({ message: 'This email is already registered.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await collection.insertOne({ email, createdAt: new Date() });

    return new Response(JSON.stringify({ message: 'Email registered successfully.' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error saving email', details: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}