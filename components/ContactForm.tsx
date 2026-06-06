"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", message: "" };

const inputClass =
  "w-full bg-[#111111] border border-white/8 text-white placeholder-[#a3a3a3]/50 text-sm px-4 py-3.5 focus:outline-none focus:border-white/25 transition-colors duration-300 rounded-sm";

const labelClass =
  "block text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase mb-2";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-[#111111] border border-white/8 rounded-sm p-10 text-center">
        <div className="w-12 h-12 border border-white/20 flex items-center justify-center mx-auto mb-6">
          <Check size={18} className="text-white" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">Message sent.</h3>
        <p className="text-[#a3a3a3] text-sm">
          I&apos;ll get back to you within 48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#a3a3a3] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClass}>Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell me about your project..."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-xs">
          送信に失敗しました。直接{" "}
          <a href="mailto:ryuw.beats@gmail.com" className="underline">
            ryuw.beats@gmail.com
          </a>{" "}
          にご連絡ください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={13} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
