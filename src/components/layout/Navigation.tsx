import Link from "next/link";
import { navigationItems } from "./header-data";

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigationItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}