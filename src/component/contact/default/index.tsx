import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium block">
                Contact
              </span>
              <h2 className="text-4xl md:text-6xl font-serif">
                Let's discuss <br />
                <span className="italic font-normal">your vision.</span>
              </h2>
              <p className="text-slate-500 font-light text-lg leading-relaxed max-w-md pt-4">
                I am always open to discussing innovative projects, AI research opportunities, or technical partnerships.
              </p>
            </div>

            <div className="space-y-8 pt-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white shadow-sm border border-slate-100 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent font-bold">Email</p>
                  <p className="text-primary font-medium">julian.witjaksono@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white shadow-sm border border-slate-100 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent font-bold">Location</p>
                  <p className="text-primary font-medium">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 shadow-2xl shadow-slate-200/50"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors font-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 px-8 uppercase tracking-[0.3em] text-xs font-bold hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
