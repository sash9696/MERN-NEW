import { ModeShell } from "../components/ModeShell";

// Bake this page into static HTML at build time.
export const dynamic = "force-static";

export default function SsgPage() {
  const renderedAt = new Date().toISOString();

  return (
    <ModeShell
      title="SSG — Static Site Generation"
      subtitle="HTML is generated once at build time and reused until you rebuild."
    >
      <p className="text-sm font-medium text-zinc-500">Rendered at (build time)</p>
      <p
        id="rendered-at"
        className="mt-1 font-mono text-lg text-violet-700"
        data-mode="ssg"
      >
        {renderedAt}
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li>
          View Page Source — the timestamp is in the HTML (like SSR).
        </li>
        <li>
          In production (<code>next build && next start</code>), hard refresh
          keeps the same timestamp until you rebuild.
        </li>
        <li>
          In <code>next dev</code>, Next may re-render on demand — use a
          production build to see true SSG.
        </li>
        <li>Good for docs, marketing, blogs — fast + cacheable.</li>
      </ul>
    </ModeShell>
  );
}
