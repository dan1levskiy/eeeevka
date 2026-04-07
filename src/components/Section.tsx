import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
  dark?: boolean;
}

export default function Section({ id, title, children, className = "", bgColor = "transparent", dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif mb-4 ${dark ? 'text-notary-parchment' : 'text-notary-red'}`}>
            {title}
          </h2>
          <div className="w-24 h-1 bg-notary-orange" />
        </motion.div>
        
        {children}
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="leaf-pattern w-full h-full" />
      </div>
    </section>
  );
}
