import mongoose from 'mongoose';
const { Schema, models, Model } = mongoose;
const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
});
const Product = models.Product || mongoose.model('Product', ProductSchema);
export default Product;
