"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_xkwi2nk";
const EMAILJS_TEMPLATE_ID = "template_z789237";
const EMAILJS_PUBLIC_KEY = "Y0Vh6DS8F21xy5zPw";

interface BuyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BuyModal({ open, onClose }: BuyModalProps) {
  const [form, setForm] = useState({ email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ email: "", phone: "", message: "" });
        onClose();
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface-container-highest text-on-surface placeholder:text-on-surface-variant rounded-lg px-4 py-3 outline-none focus:outline focus:outline-1 focus:outline-outline-variant font-body text-base";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-container-low rounded-lg p-8 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-headline text-2xl text-white italic">
                  Acheter une photo. Toutes les recettes sont reversées à la
                  Croix-Rouge Libanaise.
                </h2>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2">
                  Nous vous recontacterons bientôt
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <span
                  style={{
                    fontFamily: "Material Symbols Outlined",
                    fontSize: "1.5rem",
                  }}
                >
                  close
                </span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              <textarea
                placeholder="Message (photo souhaitée, questions...)"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="mt-2 bg-primary text-on-primary px-8 py-3 rounded-full font-body font-semibold hover:opacity-80 transition-opacity duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" && "Envoi en cours…"}
                {status === "success" && "Message envoyé ✓"}
                {status === "error" && "Erreur — réessayer"}
                {status === "idle" && "Envoyer"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
