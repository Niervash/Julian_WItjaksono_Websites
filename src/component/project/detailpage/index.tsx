import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "../../../column";

// Definisikan tipe untuk project
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
    if (id) {
      const found = projects.find((p) => p.id === parseInt(id));
      setProject(found || null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
        <Link
          to="/"
          className="text-orange-500 hover:text-orange-600 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-4 items-center text-sm">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full">
                {project.date}
              </span>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                  >
                    <Github size={16} />
                    Repository
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">About the Project</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative pb-[75%] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <span className="text-2xl">&times;</span>
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
