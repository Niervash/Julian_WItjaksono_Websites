import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="space-y-6 max-w-sm">
            <h3 className="text-2xl font-serif">Julian Witjaksono</h3>
            <p className="text-slate-500 font-light leading-relaxed">
              Advancing the intersection of Artificial Intelligence and high-end software development.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Navigation</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-light">
                <li><Link to="/home" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/cv" className="hover:text-primary transition-colors">Curriculum Vitae</Link></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-light">
                <li><span className="cursor-not-allowed">Privacy Policy</span></li>
                <li><span className="cursor-not-allowed">Terms of Service</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 uppercase tracking-widest">
            © {currentYear} Julian Witjaksono. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-400 uppercase tracking-widest">
            Handcrafted with <span className="text-primary italic">Precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
