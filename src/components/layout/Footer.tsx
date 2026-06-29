export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold">
              ARIAMJ GROUP
            </h3>

            <p className="mt-4 text-slate-400">
              Engineering, Investment and International Trade with a global vision.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>

            <ul className="space-y-2 text-slate-400">
              <li>About</li>
              <li>Projects</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>

            <ul className="space-y-2 text-slate-400">
              <li>Engineering</li>
              <li>Investment</li>
              <li>Consulting</li>
              <li>International Trade</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <ul className="space-y-2 text-slate-400">
              <li>info@ariamj.com</li>
              <li>www.ariamj.com</li>
              <li>Iran</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-slate-500">
          © 2026 ARIAMJ GROUP. All rights reserved.
        </div>

      </div>
    </footer>
  );
}