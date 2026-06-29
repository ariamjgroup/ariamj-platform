import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md">
        A
      </div>

      <div className="leading-tight">
        <h1 className="text-lg font-bold tracking-wide text-slate-900">
          ARIAMJ GROUP
        </h1>

        <p className="text-xs text-slate-500">
          Engineering • Trading • Investment
        </p>
      </div>
    </Link>
  );
}