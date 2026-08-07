export function SocialProofBar() {
  const stats = [
    { value: "50+", label: "Clients" },
    { value: "2017", label: "Since" },
    { value: "Ontario", label: "Based in" },
  ];

  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 text-center md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-heading text-3xl font-bold text-primary">
                {stat.value}
              </span>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
