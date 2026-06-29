import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <a
  href="/"
  className="text-2xl font-bold tracking-wide text-slate-900 hover:text-blue-600 transition-colors"
>
  ARIAMJ GROUP
</a>

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

          <Button>Contact Us</Button>
        </nav>

      </div>
    </header>
  );
}