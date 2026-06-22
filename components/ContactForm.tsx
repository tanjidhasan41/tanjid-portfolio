"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="spin-card bg-slate-800 rounded-xl hover:scale-[1.02] transition-all duration-300 h-full">
      <div className="p-6 rounded-xl bg-slate-800 h-full">
        <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Send a message</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition" />
          <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition" />
          <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} required rows={4}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition resize-none" />
          <button type="submit" disabled={status === "sending"}
            className="w-full bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg text-sm transition-all duration-300 hover:scale-[1.02]">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <p className="text-green-400 text-xs text-center">Message sent! I&apos;ll get back to you soon.</p>}
          {status === "error" && <p className="text-red-400 text-xs text-center">Something went wrong. Please try emailing directly.</p>}
        </form>
      </div>
    </div>
  );
}