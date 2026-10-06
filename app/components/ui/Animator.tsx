'use client';

import { motion, Variants } from "framer-motion";

interface AnimatorProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export default function Animator({
  children,
  variants,
  className = "",
  delayChildren,
  staggerChildren,
}: AnimatorProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className={className}
      // @ts-ignore
      delayChildren={delayChildren}
      // @ts-ignore
      staggerChildren={staggerChildren}
    >
      {children}
    </motion.div>
  );
}