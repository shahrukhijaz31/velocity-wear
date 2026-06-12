'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/site';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-0 overflow-hidden rounded-full bg-electric-gradient py-3 pl-3 pr-3 font-bold text-ink-900 shadow-glow-lg transition-all duration-300 hover:pr-5 sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-cyan-glow/40 blur-md" />
          <MessageCircle className="h-6 w-6 shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:ml-2 group-hover:max-w-[140px]">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
