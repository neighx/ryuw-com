"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CopyButton from "./CopyButton";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  deadline: string;
  reference: string;
  description: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  deadline: "",
  reference: "",
  description: "",
};

const projectTypes = [
  "Beat Production",
  "Full Song Production",
  "Vocal Mix",
  "Sound Design",
  "Film / Brand Music",
  "Studio Session",
  "Release Creative Direction",
  "Other",
];

const budgets = [
  "Under ¥50,000",
  "¥50,000 - ¥100,000",
  "¥100,000 - ¥300,000",
  "¥300,000 - ¥500,000",
  "¥500,000+",
];

function buildEmailBody(form: FormData): string {
  return `Subject: Production Inquiry from ${form.name}

Name: ${form.name}
Email: ${form.email}
Artist / Company: ${form.company}
Project Type: ${form.projectType}
Budget: ${form.budget}
Deadline: ${form.deadline}
Reference Artists / Links: ${form.reference}

Project Description:
${form.description}`;
}

const inputClass =
  "w-full bg-[#111111] border border-white/8 text-white placeholder-[#a3a3a3]/50 text-sm px-4 py-3.5 focus:outline-none focus:border-white/25 transition-colors duration-300 rounded-sm";

const labelClass = "block text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase mb-2";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    const emailBody = buildEmailBody(form);
    return (
      <div className="bg-[#111111] border border-white/8 rounded-sm p-10 lg:p-14 text-center">
        <div className="w-12 h-12 border border-white/20 flex items-center justify-center mx-auto mb-6">
          <ArrowRight size={18} className="text-white" />
        </div>
        <h3 className="text-white font-semibold text-xl mb-3">
          Thank you. Your inquiry has been prepared.
        </h3>
        <p className="text-[#a3a3a3] text-sm mb-8 leading-relaxed">
          Please send the details to:{" "}
          <a
            href="mailto:ryuw.beats@gmail.com"
            className="text-white hover:text-white/70 transition-colors"
          >
            ryuw.beats@gmail.com
          </a>
        </p>

        {/* Preview */}
        <pre className="bg-[#0b0b0b] border border-white/5 rounded-sm p-6 text-left text-[#d6d6d6] text-xs leading-relaxed whitespace-pre-wrap mb-6 font-mono">
          {emailBody}
        </pre>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CopyButton text={emailBody} />
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="text-[#a3a3a3] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      {/* Artist / Company */}
      <div>
        <label className={labelClass}>Artist / Company</label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Artist name or company"
          className={inputClass}
        />
      </div>

      {/* Project Type & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Project Type *</label>
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget</label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Deadline */}
      <div>
        <label className={labelClass}>Deadline</label>
        <input
          name="deadline"
          type="date"
          value={form.deadline}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Reference */}
      <div>
        <label className={labelClass}>Reference Artists / Links</label>
        <textarea
          name="reference"
          value={form.reference}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. Frank Ocean, Sza, YouTube links..."
          className={inputClass}
        />
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Project Description *</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project, vision, and goals..."
          className={inputClass}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300 font-medium"
      >
        Send Inquiry
        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
