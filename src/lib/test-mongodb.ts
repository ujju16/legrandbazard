import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI as string;

const clientOptions = {
  serverApi: { version: "1" as const, strict: true, deprecationErrors: true }
};

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    await mongoose.disconnect();
  }
}

run().catch(console.dir);
