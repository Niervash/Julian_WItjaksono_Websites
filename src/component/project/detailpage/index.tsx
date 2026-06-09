import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, X } from "lucide-react";
import { projects } from "../../../column";
import { UserLayout } from "../../../layout";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  liveUrl: string;
  repoUrl: string | null;
  date: string;
}

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const found = projects.find((p) => p.id === parseInt(id));
      setProject(found || null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <UserLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-slate-200 border-t-primary rounded-full animate-spin" />
        </div>
      </UserLayout>
    );
  }

  if (!project) {
    return (
      <UserLayout>
        <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
          <h2 className="text-3xl font-serif">Project not found</h2>
          <Link to="/home" className="text-sm uppercase tracking-widest font-bold text-primary border-b border-primary">
            Return Home
          </Link>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <section className="bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <Link to="/home" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 bg-slate-50 border border-slate-100 text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                    {project.date}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Layers size={18} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-sm text-slate-500 font-light italic">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <ExternalLink size={18} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Links</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" className="text-sm text-primary hover:underline underline-offset-4">Live Performance</a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" className="text-sm text-primary hover:underline underline-offset-4">Source Code</a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Process & Insight</h2>
                <p className="text-slate-600 font-light leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-video overflow-hidden bg-slate-50 cursor-zoom-in hover:opacity-80 transition-opacity border border-slate-100"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`Process ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-primary/95 z-[70] flex items-center justify-center p-8 backdrop-blur-md"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }}
              src={selectedImage} 
              className="max-h-full max-w-full shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </UserLayout>
  );
};

export default ProjectDetailPage;
