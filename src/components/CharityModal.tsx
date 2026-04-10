"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CharityModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CharityModal({ open, onClose }: CharityModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-md w-full"
            style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: "3px",
              padding: "3.5rem 3rem",
              boxShadow: "0 0 80px rgba(206,17,38,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Red cross + glow */}
            <div className="flex items-center justify-center mb-10" style={{ height: "72px", position: "relative" }}>
              {/* Outer glow */}
              <motion.div
                animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.15, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(206,17,38,0.45) 0%, transparent 70%)",
                }}
              />
              {/* Cross — horizontal */}
              <div style={{
                position: "absolute",
                width: "56px",
                height: "18px",
                background: "#CE1126",
                borderRadius: "2px",
              }} />
              {/* Cross — vertical */}
              <div style={{
                position: "absolute",
                width: "18px",
                height: "56px",
                background: "#CE1126",
                borderRadius: "2px",
              }} />
            </div>

            {/* Label */}
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#CE1126",
              textAlign: "center",
              marginBottom: "1.25rem",
            }}>
              Croix-Rouge Libanaise
            </p>

            {/* Main message */}
            <h2 style={{
              fontFamily: "var(--font-noto-serif), serif",
              fontSize: "1.45rem",
              fontStyle: "italic",
              color: "#e5e2e1",
              lineHeight: 1.45,
              textAlign: "center",
              marginBottom: "1rem",
            }}>
              Toutes les recettes de cette vente sont intégralement reversées à la Croix-Rouge Libanaise.
            </h2>

            {/* Subtitle */}
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "#4a4a4a",
              textAlign: "center",
              marginBottom: "3rem",
            }}>
              Chaque achat est un geste de solidarité.
            </p>

            {/* Thin separator */}
            <div style={{ width: "32px", height: "1px", background: "#2a2a2a", margin: "0 auto 2.5rem" }} />

            {/* CTA */}
            <button
              onClick={onClose}
              style={{
                display: "block",
                width: "100%",
                padding: "0.9rem",
                background: "transparent",
                border: "1px solid #CE1126",
                color: "#CE1126",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#CE1126";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#CE1126";
              }}
            >
              Continuer
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
