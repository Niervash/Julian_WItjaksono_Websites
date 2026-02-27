import { ArrowLeft, ChevronLeft, CornerDownLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CVPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black py-10">
      <div>
        <Link
          to={"/"}
          className="inline-flex ml-5 mb-5 sm:ml-10 text-black hover:text-blue-700 transition"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 font-sans text-base leading-relaxed">
        {/* NAME */}
        <h1 className="text-3xl font-bold text-center uppercase">John Doe</h1>
        <p className="text-center mb-4">Frontend Developer & UI Designer</p>

        {/* CONTACT */}
        <div className="text-center text-sm mb-8">
          john.doe@example.com | +62 812 3456 7890 | Jakarta, Indonesia |
          johndoe.dev | linkedin.com/in/johndoe | github.com/johndoe
        </div>

        {/* SUMMARY */}
        <section className="mb-8">
          <h2 className="font-bold uppercase border-b border-black pb-1 mb-3">
            Professional Summary
          </h2>
          <p>
            Frontend Developer dengan 4+ tahun pengalaman membangun aplikasi web
            responsif dan interaktif. Menguasai React, TypeScript, dan Tailwind
            CSS.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-8">
          <h2 className="font-bold uppercase border-b border-black pb-1 mb-3">
            Work Experience
          </h2>

          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between">
              <strong>Senior Frontend Developer</strong>
              <span>2022 - Present</span>
            </div>
            <div className="italic">PT Teknologi Maju</div>
            <ul className="list-disc list-inside mt-2">
              <li>
                Memimpin pengembangan frontend untuk aplikasi dashboard
                perusahaan.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <strong>Frontend Developer</strong>
              <span>2020 - 2022</span>
            </div>
            <div className="italic">Startup Kreatif</div>
            <ul className="list-disc list-inside mt-2">
              <li>Mengembangkan website company profile dan e-commerce.</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-8">
          <h2 className="font-bold uppercase border-b border-black pb-1 mb-3">
            Education
          </h2>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <strong>Sarjana Komputer - Ilmu Komputer</strong>
              <span>2016 - 2020</span>
            </div>
            <div className="italic">Universitas Gadjah Mada</div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-8">
          <h2 className="font-bold uppercase border-b border-black pb-1 mb-3">
            Skills
          </h2>
          <p>React, TypeScript, Tailwind CSS, JavaScript, Next.js, Git</p>
        </section>

        {/* LANGUAGES */}
        <section className="mb-8">
          <h2 className="font-bold uppercase border-b border-black pb-1 mb-3">
            Languages
          </h2>
          <ul className="list-disc list-inside">
            <li>Indonesia – Native</li>
            <li>Inggris – Professional (TOEFL 600)</li>
          </ul>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h2 className="font-bold uppercase border-b border-black pb-1 mb-3">
            Certifications
          </h2>
          <ul className="list-disc list-inside">
            <li>Certified React Developer (2023)</li>
            <li>UI/UX Design Specialization (2022)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CVPage;
