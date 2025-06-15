import mongoose, { Schema, models, Model, Document } from 'mongoose';

export interface IArtwork extends Document {
  title: string;
  description?: string;
  image?: string;
  createdAt: Date;
}

const ArtworkSchema = new Schema<IArtwork>({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Artwork: Model<IArtwork> = models.Artwork || mongoose.model<IArtwork>('Artwork', ArtworkSchema);

export default Artwork;
