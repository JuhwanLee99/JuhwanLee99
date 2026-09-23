import { motion, useScroll, useSpring } from 'framer-motion';
export function TopProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <div className="progress-track" aria-hidden="true"><motion.div className="progress-fill" style={{ scaleX }} /></div>;
}
export default TopProgressBar;
