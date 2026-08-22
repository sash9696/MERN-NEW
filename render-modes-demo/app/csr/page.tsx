"use client";

import { useEffect, useState } from "react";
import { ModeShell } from "../components/ModeShell";

export default function CsrPage() {
  const [renderedAt, setRenderedAt] = useState<string>("loading…");

  useEffect(() => {
    // Runs only in the browser after JS hydrates — classic CSR.
    setRenderedAt(new Date().toISOString());
  }, []);

  return (
    <ModeShell
      title="CSR — Client-Side Rendering"
      subtitle="HTML ships nearly empty. The timestamp is filled in by React in the browser."
    >
      <p className="text-sm font-medium text-zinc-500">Rendered at</p>
      <p
        id="rendered-at"
        className="mt-1 font-mono text-lg text-emerald-700"
        data-mode="csr"
      >
        {renderedAt}
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li>
          View Page Source — you should see <code>loading…</code>, not a real
          timestamp.
        </li>
        <li>Hard refresh — timestamp updates only after JS runs.</li>
        <li>Good for highly interactive UIs; weaker for SEO / first paint.</li>
      </ul>
    </ModeShell>
  );
}
