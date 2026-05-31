"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2.5 px-5 py-3 border border-white/15 text-[#d6d6d6] hover:text-white hover:border-white/35 text-xs tracking-[0.2em] uppercase transition-all duration-300"
    >
      {copied ? (
        <>
          <Check size={12} className="text-green-400" />
          Copied
        </>
      ) : (
        <>
          <Copy size={12} />
          Copy Inquiry
        </>
      )}
    </button>
  );
}
