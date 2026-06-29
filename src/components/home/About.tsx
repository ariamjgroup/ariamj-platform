export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">

        <div>
          <span className="text-blue-600 font-semibold uppercase">
            About ARIAMJ
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            A Modern Holding Company
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            ARIAMJ Group operates across engineering, industrial
            development, investment, international trade and strategic
            consulting with a long-term vision for sustainable growth.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our mission is to connect innovation, capital and industry to
            create lasting value for partners and clients worldwide.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-100 p-12 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-6xl font-bold text-blue-600">20+</h3>
            <p className="mt-4 text-xl text-slate-700">
              Years of Experience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}