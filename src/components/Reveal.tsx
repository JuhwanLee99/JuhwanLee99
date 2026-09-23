import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .62, ease: [0.22, 0.65, 0.2, 1] }}>{children}</motion.div>;
}
