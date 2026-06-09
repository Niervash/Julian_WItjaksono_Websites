import React from "react";
import { IlovemySelf } from "../../../assets";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 pb-12">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-slate-50 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-3/5 space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-medium block"
              >
                Computer Scientist & Full-Stack Developer
              </motion.span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">
                Crafting digital <br />
                <span className="italic font-normal serif">excellence.</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-secondary font-light leading-relaxed max-w-xl">
              I am Julian Witjaksono, a Computer Science graduate specializing in AI, Machine Learning, and sophisticated Web Development. I transform complex ideas into elegant, high-performance solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-primary"
              >
                View Portfolio
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </a>
              <div className="h-px w-12 bg-slate-200 hidden sm:block" />
              <span className="text-[10px] text-accent uppercase tracking-widest">
                Based in Indonesia
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[380px]">
              <div className="relative z-10 aspect-square overflow-hidden bg-slate-100 grayscale hover:grayscale-0 transition-all duration-1000 group shadow-2xl">
                <img
                  src={IlovemySelf}
                  alt="Julian Witjaksono"
                  className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 border-[15px] border-white/20 pointer-events-none" />
              </div>
              
              {/* Elegant floating badge instead of large card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 z-20 bg-primary px-6 py-4 text-white hidden md:block shadow-xl border-l-4 border-accent"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70 mb-1">Expertise</p>
                <h3 className="text-sm text-white font-serif">A.I. Specialization</h3>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
