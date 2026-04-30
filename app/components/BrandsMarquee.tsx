export default function BrandsMarquee() {
  const items = ['Microblading', 'Lip Blush', 'PMU Eyeliner', 'Lash Extension', 'Nail Art', 'Skin Care'];
  const doubled = [...items, ...items];
  return (
    <section className="relative py-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(253,245,230,0.42) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative flex gap-15 items-center whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-15 shrink-0">
            <span className="font-fraunces italic text-2xl text-brand opacity-80">{item}</span>
            <span className="text-rose-deep text-xl mx-15">✿</span>
          </span>
        ))}
      </div>
    </section>
  );
}
