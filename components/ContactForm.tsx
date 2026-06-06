"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

const inputClass =
  "w-full bg-[#111111] border border-white/8 text-white placeholder-[#a3a3a3]/50 text-sm px-4 py-3.5 focus:outline-none focus:border-white/25 transition-colors duration-300 rounded-sm";

const labelClass =
  "block text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase mb-2";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:ryuw.beats@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
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

      {/* Email */}
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

      {/* Message */}
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

      {/* Submit */}
      <button
        type="submit"
        className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300 font-medium"
      >
        Send Message
        <ArrowRight
          size={13}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>

      <p className="text-[#a3a3a3]/50 text-xs">
        メールアプリが開きます。そのまま送信してください。
      </p>
    </form>
  );
}
