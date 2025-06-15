import mongoose from 'mongoose';
import Product from '../models/Product.model.js';
import 'dotenv/config';

const uri = process.env.MONGODB_URI as string;

const products = [
	{
		name: 'T-shirt Le Grand Bazar',
		description: 'Un t-shirt confortable et stylé pour tous les jours.',
		price: 25,
		image: '/public/tshirt.jpg',
	},
	{
		name: 'Tote Bag Le Grand Bazar',
		description: 'Le sac parfait pour vos courses ou la plage.',
		price: 15,
		image: '/public/totebag.jpg',
	},
	{
		name: 'Casquette Le Grand Bazar',
		description: 'Protégez-vous du soleil avec style.',
		price: 20,
		image: '/public/casquette.jpg',
	},
];

async function populate() {
	await mongoose.connect(uri);
	await Product.deleteMany({});
	await Product.insertMany(products);
	console.log('Base produits peuplée !');
	await mongoose.disconnect();
}

populate().catch(console.error);
