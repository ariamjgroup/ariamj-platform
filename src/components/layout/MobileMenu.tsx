"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700"
      >
        ☰
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 border-t bg-white shadow-lg">
          <nav className="flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b px-6 py-4 text-slate-700 hover:bg-slate-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}