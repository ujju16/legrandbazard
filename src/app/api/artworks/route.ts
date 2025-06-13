import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Artwork from '@/models/Artwork';

export async function GET() {
  await dbConnect();
  const artworks = await Artwork.find({});
  return NextResponse.json(artworks);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await dbConnect();
    const artwork = await Artwork.create(data);
    return NextResponse.json(artwork, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Erreur lors de la création.' }, { status: 500 });
  }
}
