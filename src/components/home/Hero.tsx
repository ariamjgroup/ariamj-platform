export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            Welcome to ARIAMJ GROUP
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
            Building the Future of
            <span className="text-yellow-400"> Engineering</span>,
            <span className="text-yellow-400"> Investment</span>
            <br />
            and
            <span className="text-yellow-400"> International Trade</span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-gray-200">
            ARIAMJ Group delivers engineering solutions, industrial
            development, investment opportunities and international
            partnerships with a long-term global vision.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-400">
              Our Services
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}