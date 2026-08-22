import { ModeShell } from "../components/ModeShell";

// Force a fresh server render on every request.
// server component
export const dynamic = "force-dynamic";

export default function SsrPage() {
  const renderedAt = new Date().toISOString();

  return (
    <ModeShell
      title="SSR — Server-Side Rendering"
      subtitle="HTML is generated on the server for each request, then sent to the browser."
    >
      <p className="text-sm font-medium text-zinc-500">Rendered at</p>
      <p
        id="rendered-at"
        className="mt-1 font-mono text-lg text-sky-700"
        data-mode="ssr"
      >
        {renderedAt}
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li>
          View Page Source — the real timestamp is already in the HTML.
        </li>
        <li>Hard refresh a few times — the timestamp changes each request.</li>
        <li>Good for personalized / frequently changing data + SEO.</li>
      </ul>
    </ModeShell>
  );
}
