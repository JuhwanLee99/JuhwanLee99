import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxHero({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], ['0%', '-12%']);

  return (
    <motion.section style={{ y }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet/25 via-indigo-600/20 to-black/20 p-8 md:p-14">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-aqua/30 blur-3xl" />
        <div className="absolute right-6 top-6 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </motion.section>
  );
}
