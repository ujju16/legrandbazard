import { NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/mongodb';
import Product from '../../../models/Product.model';

export async function GET() {
  await dbConnect();
  const products = await Product.find({});
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await dbConnect();
    const product = await Product.create(data);
    return NextResponse.json(product, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la création.' }, { status: 500 });
  }
}
