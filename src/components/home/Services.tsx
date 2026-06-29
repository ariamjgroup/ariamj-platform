const services = [
  {
    title: "Engineering",
    description:
      "Advanced engineering solutions for industrial and infrastructure projects.",
  },
  {
    title: "Investment",
    description:
      "Strategic investment opportunities across multiple sectors.",
  },
  {
    title: "International Trade",
    description:
      "Connecting global markets through reliable business partnerships.",
  },
  {
    title: "Consulting",
    description:
      "Business strategy, project management and technical consulting.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase text-blue-600">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            What We Do
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Professional solutions for industry, investment and global business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl text-white">
                ★
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}