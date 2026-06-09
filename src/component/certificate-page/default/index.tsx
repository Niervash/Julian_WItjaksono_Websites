import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
}

const CertificatesPage: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.sheetbest.com/sheets/1699b264-1048-4cea-a075-ae49a038bf3d");
        if (!response.ok) throw new Error("Connection failed");
        const data = await response.json();
        const formattedData = data.map((item: any, index: number) => ({
          id: item.id || `cert-${index}`,
          title: item.title || "Untitled Certificate",
          year: item.year || "-",
          imageUrl: item.imageId?.trim()
            ? `https://drive.google.com/thumbnail?id=${item.imageId.trim()}&sz=w1000`
            : "/no-image.png",
        }));
        setCertificates(formattedData);
      } catch (err: any) {
        setError("Unable to load certificates at this time.");
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = "auto";
  };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block"
            >
              Credentials
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif"
            >
              Academic & Professional <br />
              <span className="italic font-normal">milestones.</span>
            </motion.h2>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-slate-50 animate-pulse border border-slate-100" />
            ))}
          </div>
        ) : error ? (
          <div className="py-20 text-center border border-dashed border-slate-200">
            <p className="text-slate-400 font-light">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openModal(cert.imageUrl, cert.title)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 border border-slate-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur p-4 rounded-full shadow-xl">
                      <ExternalLink size={20} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                    <Award size={12} />
                    <span>Issued {cert.year}</span>
                  </div>
                  <h3 className="text-lg font-serif group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-primary/95 z-[60] flex items-center justify-center p-6 md:p-12 backdrop-blur-sm"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center gap-8"
            >
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-h-[75vh] w-auto shadow-2xl border-8 border-white/5"
              />
              <h3 className="text-white text-2xl md:text-3xl font-serif text-center max-w-2xl">
                {selectedTitle}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesPage;
