import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../column";
import { ArrowUpRight } from "lucide-react";

const ProjectsPage: React.FC = () => {
  return (
    <section id="projects" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block"
            >
              Selected Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif"
            >
              Building the future of <br />
              <span className="italic font-normal">intelligence.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 font-light max-w-sm text-right hidden md:block"
          >
            A collection of innovative projects spanning artificial intelligence, full-stack systems, and cutting-edge web technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/projects/${project.id}`} className="block space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                  <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-xl">
                    <ArrowUpRight size={24} className="text-primary" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif group-hover:italic transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-light text-accent uppercase tracking-widest pt-2">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link 
            to="/projects" 
            className="inline-block px-12 py-5 border border-slate-200 text-sm uppercase tracking-[0.3em] font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-500"
          >
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
