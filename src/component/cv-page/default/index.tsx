import React from "react";
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Globe, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { UserLayout } from "../../../layout";
import { motion } from "framer-motion";

const CVPage: React.FC = () => {
  return (
    <UserLayout>
      <section className="bg-slate-50 pt-32 pb-24 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          <Link to="/home" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl shadow-slate-200/50 p-8 md:p-16 space-y-16"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-slate-100 pb-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif">Julian Witjaksono</h1>
                <p className="text-lg text-accent font-light tracking-widest uppercase">Computer Scientist & A.I. Specialist</p>
              </div>
              <div className="grid grid-cols-1 gap-3 text-sm text-slate-500 font-light">
                <div className="flex items-center gap-3"><Mail size={14} className="text-primary" /> julian.witjaksono@example.com</div>
                <div className="flex items-center gap-3"><MapPin size={14} className="text-primary" /> Jakarta, Indonesia</div>
                <div className="flex items-center gap-3"><Linkedin size={14} className="text-primary" /> linkedin.com/in/julian-w</div>
              </div>
            </div>

            {/* Summary */}
            <div className="grid md:grid-cols-3 gap-8">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Professional Summary</h2>
              <div className="md:col-span-2">
                <p className="text-slate-600 font-light leading-relaxed">
                  Computer Science graduate specializing in Artificial Intelligence, Machine Learning, and Full-Stack Development. 
                  Experienced in building computer vision models, AI-powered applications, and robust web systems. 
                  Passion for mentoring and technical education, combined with a strong foundation in robotic systems.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="grid md:grid-cols-3 gap-8">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Core Expertise</h2>
              <div className="md:col-span-2 space-y-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <h3 className="text-xl font-serif">A.I. & Machine Learning</h3>
                    <span className="text-xs text-accent italic">Specialization</span>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Developing and deploying neural networks using TensorFlow and PyTorch. 
                    Expertise in Computer Vision, predictive modeling, and data analysis pipelines.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <h3 className="text-xl font-serif">Web Engineering</h3>
                    <span className="text-xs text-accent italic">Full-Stack</span>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Architecting modern web applications with React, TypeScript, and Node.js. 
                    Focus on performance, scalability, and elegant user interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="grid md:grid-cols-3 gap-8">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Education</h2>
              <div className="md:col-span-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-serif">Bachelor of Computer Science</h3>
                    <p className="text-slate-500 font-light text-sm italic">Major in Artificial Intelligence</p>
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-tighter">Graduated</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="grid md:grid-cols-3 gap-8">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Technical Stack</h2>
              <div className="md:col-span-2">
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {["Python", "TensorFlow", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Git"].map(skill => (
                    <span key={skill} className="text-sm text-slate-600 font-light border-b border-slate-100 pb-1">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-12 border-t border-slate-100 text-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-secondary transition-all duration-300">
                <Download size={16} /> Download Full Resume
              </button>
            </div>

          </motion.div>
        </div>
      </section>
    </UserLayout>
  );
};

export default CVPage;
