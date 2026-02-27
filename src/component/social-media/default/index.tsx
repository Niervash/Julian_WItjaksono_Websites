import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">Media Sosial</h3>
      <div className="flex gap-4">
        {/* Facebook */}
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>

        {/* GitHub */}
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
