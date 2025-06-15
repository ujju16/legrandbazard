import mongoose from 'mongoose';
const { Schema, models, Model } = mongoose;

export interface IProduct extends mongoose.Document {
  name: string;
  description?: string;
  price: number;
  image?: string;
  createdAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Product: mongoose.Model<IProduct> = models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
