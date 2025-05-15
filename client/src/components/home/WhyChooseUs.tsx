const WhyChooseUs = () => {
  const points = [
    {
      icon: "🚴‍♂️",
      title: "Quality Bikes",
      desc: "Top brands and tested durability.",
    },
    {
      icon: "⚡",
      title: "Fast Shipping",
      desc: "Quick delivery right to your door.",
    },
    {
      icon: "💬",
      title: "Expert Support",
      desc: "Friendly customer service anytime.",
    },
    {
      icon: "🌿",
      title: "Eco Friendly",
      desc: "Sustainable and green manufacturing.",
    },
  ];

  return (
    <section className="py-16  w-[80%] mx-auto text-center rounded-lg">
      <h2 className="text-3xl font-bold text-secondary mb-12">
        Why Choose GearUp?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {points.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
