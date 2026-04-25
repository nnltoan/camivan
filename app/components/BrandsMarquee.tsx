export default function BrandsMarquee() {
  const items = ['Microblading', 'Lip Blush', 'PMU Eyeliner', 'Lash Extension', 'Nail Art', 'Skin Care'];
  const doubled = [...items, ...items];
  return (
    <section className="py-10 bg-nude overflow-hidden" aria-hidden="true">
      <div className="flex gap-15 items-center whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-15 shrink-0">
            <span className="font-fraunces italic text-2xl text-brand opacity-70">{item}</span>
            <span className="text-rose-deep text-xl mx-15">✿</span>
          </span>
        ))}
      </div>
    </section>
  );
}
