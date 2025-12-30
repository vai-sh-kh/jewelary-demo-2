"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  scaleOnHover?: boolean;
  fill?: boolean;
  sizes?: string;
}

export default function AnimatedImage({
  src,
  alt,
  className = "",
  delay = 0,
  scaleOnHover = true,
  fill = false,
  sizes,
}: AnimatedImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`relative overflow-hidden ${className}`}
      whileHover={scaleOnHover ? { scale: 1.05 } : {}}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      )}
    </motion.div>
  );
}
