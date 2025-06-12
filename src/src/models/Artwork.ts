import mongoose, { Schema } from 'mongoose';

const ArtworkSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  price: Number,
});

export default mongoose.models.Artwork || mongoose.model('Artwork', ArtworkSchema);
