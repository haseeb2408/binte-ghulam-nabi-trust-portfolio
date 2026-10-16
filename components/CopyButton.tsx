"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (e.g. insecure context); users can still select the text.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="shrink-0 rounded-full border border-forest/30 px-3 py-1 text-xs font-semibold text-forest transition hover:bg-forest/10"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
