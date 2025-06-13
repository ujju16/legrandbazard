export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold">Le Grand Bazar</div>
      <ul className="flex gap-6">
        <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
        <li><a href="#shop" className="hover:underline">Boutique</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
