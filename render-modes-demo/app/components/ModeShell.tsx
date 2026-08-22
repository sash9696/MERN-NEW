import type { ReactNode } from "react";
import { Nav } from "./Nav";

type ModeShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function ModeShell({ title, subtitle, children }: ModeShellProps) {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-900">
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-zinc-600">{subtitle}</p>
        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
}
