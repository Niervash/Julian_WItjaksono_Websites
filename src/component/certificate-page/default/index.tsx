import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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

  // =============================
  // FETCH DATA
  // =============================
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.sheetbest.com/sheets/1699b264-1048-4cea-a075-ae49a038bf3d",
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        const data = await response.json();

        const formattedData = data.map((item: any, index: number) => {
          const imageId = item.imageId?.trim();

          return {
            id: item.id || `cert-${index}`,
            title: item.title || "Untitled Certificate",
            year: item.year || "-",
            imageUrl: imageId
              ? `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`
              : "/no-image.png",
          };
        });

        setCertificates(formattedData);
      } catch (err: any) {
        setError(err?.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  // =============================
  // MODAL FUNCTION
  // =============================
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

  // =============================
  // RENDER
  // =============================
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My Certificates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Berikut adalah sertifikat yang telah saya raih dalam berbagai bidang.
        </motion.p>

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Memuat data...</p>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">Error: {error}</p>
          </div>
        )}

        {/* GRID */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openModal(cert.imageUrl, cert.title)}
              >
                <div className="relative pb-[60%] bg-gray-200 overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/no-image.png";
                    }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500">Issued: {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <X size={24} />
              </button>

              <div className="relative pt-[60%] bg-black">
                <img
                  src={selectedImage}
                  alt={selectedTitle}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-semibold">
                  {selectedTitle}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesPage;
