const stats = [
  {
    value: "20+",
    label: "Years Experience",
  },
  {
    value: "150+",
    label: "Projects Completed",
  },
  {
    value: "30+",
    label: "Business Partners",
  },
  {
    value: "12",
    label: "Countries Served",
  },
];

export default function Statistics() {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 p-10 text-center backdrop-blur"
            >
              <h3 className="text-5xl font-bold">{item.value}</h3>

              <p className="mt-4 text-lg text-blue-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}