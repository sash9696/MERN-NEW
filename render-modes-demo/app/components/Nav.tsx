import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/csr", label: "CSR" },
  { href: "/ssr", label: "SSR" },
  { href: "/ssg", label: "SSG" },
];

export function Nav() {
  return (
    <nav className="flex flex-wrap gap-3 border-b border-zinc-200 px-6 py-4 text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-md px-3 py-1.5 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
