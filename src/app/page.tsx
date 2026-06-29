export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <p className="text-yellow-500 uppercase tracking-[0.3em]">
            ARIAMJ GROUP
          </p>

          <h1 className="mt-6 text-6xl font-bold leading-tight">
            Connecting Markets
            <br />
            Creating Opportunities
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-gray-300">
            Global Trading, International Brokerage and Industrial Solutions
            for businesses around the world.
          </p>

          <div className="mt-12 flex gap-5">
            <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400">
              Explore Services
            </button>

            <button className="rounded-xl border border-white px-8 py-4 hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold">
          About ARIAMJ Group
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          ARIAMJ Group is an international company focused on global
          trading, brokerage, industrial machinery, mining,
          investment and business development.
        </p>

      </section>

      {/* Services */}
      <section className="bg-gray-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              "Global Trading",
              "International Brokerage",
              "Export & Import",
              "Industrial Machinery",
              "Mining Solutions",
              "Business Development",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-gray-600">
                  Professional international services with reliable global partnerships.
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              40+
            </h3>
            <p className="mt-4">Countries</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              250+
            </h3>
            <p className="mt-4">Partners</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              1000+
            </h3>
            <p className="mt-4">Projects</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              24/7
            </h3>
            <p className="mt-4">Support</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">

        <div className="max-w-7xl mx-auto px-6 flex justify-between">

          <div>

            <h3 className="text-2xl font-bold">
              ARIAMJ GROUP
            </h3>

            <p className="mt-3 text-gray-400">
              Global Trading • Brokerage • Industrial Solutions
            </p>

          </div>

          <div className="text-gray-400">
            © 2026 ARIAMJ Group
          </div>

        </div>

      </footer>

    </main>
  );
}