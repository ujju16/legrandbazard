import Section from "../components/Section";
import Image from "next/image";

async function getArtworks() {
  const res = await fetch("/api/artworks", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

interface Artwork {
  _id: string;
  title: string;
  description?: string;
  image?: string;
}

export default async function Home() {
  const artworks: Artwork[] = await getArtworks();
  return (
    <>
      <Section id="portfolio" title="Portfolio">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artworks.length === 0 && <div>Aucune œuvre trouvée.</div>}
          {artworks.map((art: Artwork) => (
            <div key={art._id} className="bg-gray-50 rounded shadow p-4 flex flex-col items-center">
              <Image src={art.image || "/file.svg"} alt={art.title} width={80} height={80} />
              <div className="mt-4 font-semibold">{art.title}</div>
              <div className="text-sm text-gray-500">{art.description}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="shop" title="Boutique">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemples de produits */}
          <div className="bg-white border rounded p-4 flex flex-col items-center">
            <Image src="/next.svg" alt="Produit 1" width={80} height={38} />
            <div className="mt-4 font-semibold">Produit 1</div>
            <div className="text-sm text-gray-500 mb-2">Description produit</div>
            <button className="bg-black text-white px-4 py-2 rounded">Acheter</button>
          </div>
          {/* Ajoute d'autres produits ici */}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Nom" className="border rounded px-3 py-2" required />
          <input type="email" placeholder="Email" className="border rounded px-3 py-2" required />
          <textarea placeholder="Message" className="border rounded px-3 py-2" rows={4} required />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded self-end">Envoyer</button>
        </form>
      </Section>
    </>
  );
}
