import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:julian.witjaksono@example.com", label: "Email" },
  ];

  return (
    <div className="bg-white p-8 border border-slate-100 shadow-sm">
      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6">Connect</h3>
      <div className="flex flex-wrap gap-8">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-slate-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <link.icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
