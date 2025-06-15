import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Typage strict pour éviter 'any'
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const cached: MongooseCache = (globalThis as unknown as { mongoose?: MongooseCache }).mongoose ?? { conn: null, promise: null };

if (!('mongoose' in globalThis)) {
  (globalThis as unknown as { mongoose: MongooseCache }).mongoose = cached;
}

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
