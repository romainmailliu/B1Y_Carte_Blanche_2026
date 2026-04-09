'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BuyModalProps {
  open: boolean
  onClose: () => void
}

export default function BuyModal({ open, onClose }: BuyModalProps) {
  const [form, setForm] = useState({ email: '', phone: '', message: '' })

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Purchase inquiry:', form)
    onClose()
  }

  const inputClass = "w-full bg-surface-container-highest text-on-surface placeholder:text-on-surface-variant rounded-lg px-4 py-3 outline-none focus:outline focus:outline-1 focus:outline-outline-variant font-body text-base"

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
                <h2 className="font-headline text-2xl text-white italic">Acquérir une œuvre</h2>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2">
                  Nous vous recontacterons sous 48h
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '1.5rem' }}>close</span>
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
                placeholder="Message (œuvre souhaitée, budget, questions...)"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="mt-2 bg-primary text-on-primary px-8 py-3 rounded-full font-body font-semibold hover:opacity-80 transition-opacity duration-500"
              >
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
