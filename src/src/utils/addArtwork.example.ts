// Script d'exemple pour ajouter une œuvre à la base MongoDB via l'API Next.js

async function addArtwork() {
  const res = await fetch('/api/artworks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Exemple d’œuvre',
      description: 'Une belle œuvre d’art moderne.',
      image: '/file.svg',
      price: 200,
    }),
  });
  const data = await res.json();
  console.log('Artwork ajouté:', data);
}

// Appelle cette fonction dans un useEffect côté client ou via un bouton admin
