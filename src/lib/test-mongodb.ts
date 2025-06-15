import { dbConnect } from './mongodb';

async function testConnection() {
  try {
    await dbConnect();
    console.log('Connexion MongoDB réussie !');
    process.exit(0);
  } catch (err) {
    console.error('Erreur de connexion MongoDB :', err);
    process.exit(1);
  }
}

testConnection();
