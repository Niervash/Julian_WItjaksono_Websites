import React from "react";
import { IlovemySelf } from "../../../assets";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <>
      <section className="py-12 md:py-16 px-4  bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 ">
            <div className="md:w-1/2 text-center">
              <img
                src={IlovemySelf}
                alt="Foto Saya"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200 shadow-lg mx-auto"
              />
              <br />
              <h2 className="text-2xl md:text-3xl font-semibold">
                Julian Witjaksono
              </h2>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                About Me
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Computer Science graduate specializing in AI, Machine Learning,
                and Web Development. Experienced in building AI-powered
                applications, computer vision models, and full-stack systems. IT
                Teacher and robotics coach with a passion for mentoring and
                turning complex ideas into practical solutions.
              </p>
              <Link
                to={"/cv"}
                className="mt-1 inline-flex  text-blue-900 hover:text-blue-600 transition"
              >
                Read More <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutMe;
