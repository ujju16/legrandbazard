export default function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      {children}
    </section>
  );
}
