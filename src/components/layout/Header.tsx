export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <h1 className="text-2xl font-bold tracking-wide text-slate-900">
          ARIAMJ GROUP
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Services
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}