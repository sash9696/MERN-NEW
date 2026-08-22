import Link from "next/link";
import { Nav } from "./components/Nav";

const modes = [
  {
    href: "/csr",
    name: "CSR",
    full: "Client-Side Rendering",
    when: "Browser builds the UI after JS loads",
    tip: "Source shows loading… until hydration",
  },
  {
    href: "/ssr",
    name: "SSR",
    full: "Server-Side Rendering",
    when: "Server builds HTML on every request",
    tip: "Source has data; timestamp changes on refresh",
  },
  {
    href: "/ssg",
    name: "SSG",
    full: "Static Site Generation",
    when: "HTML is built once at build time",
    tip: "Source has data; timestamp freezes until rebuild",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-900">
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          React render modes demo
        </h1>
        <p className="mt-3 text-zinc-600">
          Compare CSR, SSR, and SSG with the same tiny page. Open each route,
          then use <strong>View Page Source</strong> and hard refresh to see
          the difference.
        </p>

        <div className="mt-8 space-y-4">
          {modes.map((mode) => (
            <Link
              key={mode.href}
              href={mode.href}
              className="block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-400"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-lg font-semibold">
                  {mode.name}
                </span>
                <span className="text-sm text-zinc-500">{mode.full}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-700">{mode.when}</p>
              <p className="mt-1 text-sm text-zinc-500">{mode.tip}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
