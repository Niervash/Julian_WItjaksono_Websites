import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SocialMedia } from "../../social-media";

interface props {}
const ContactSection: React.FC<props> = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin bekerja sama? Silakan hubungi saya
            melalui form di bawah.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kolom Kiri - Form Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formspree.io/f/your-endpoint" // Ganti dengan endpoint Formspree Anda
              method="POST"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* Kolom Kanan - Info Kontak & Media Sosial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Informasi Kontak */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="text-orange-500" size={20} />
                  <span>email@contoh.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="text-orange-500" size={20} />
                  <span>+62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-orange-500" size={20} />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Media Sosial */}
            <SocialMedia />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
