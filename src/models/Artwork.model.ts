import mongoose, { Schema, models } from 'mongoose';

const ArtworkSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Artwork = models.Artwork || mongoose.model('Artwork', ArtworkSchema);

export default Artwork;
export {};
