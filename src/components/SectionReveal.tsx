import { motion, type MotionProps } from 'framer-motion';
import { useInView } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
};

const baseVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

function sectionVariants(delay = 0) {
  return {
    ...baseVariants,
    show: {
      ...baseVariants.show,
      transition: {
        duration: 0.58,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };
}

export function SectionReveal({ children, className, delay = 0, margin = '-30px 0px -10% 0px' }: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15, margin });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={sectionVariants(delay)}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function StaggerList({
  children,
  className,
  ...motionProps
}: {
  children: ReactNode;
  className?: string;
} & MotionProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: 0.07,
            staggerChildren: 0.09,
          },
        },
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.li>
  );
}
