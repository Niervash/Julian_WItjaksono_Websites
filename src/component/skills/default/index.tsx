import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import {
  // Web Development Essentials
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiDocker,

  // Data Science & ML Languages
  SiPython,

  // ML Frameworks & Libraries
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,

  // Development Environment & Tools
  SiJupyter,
  SiAnaconda,

  // Visualization & BI
  SiTableau,

  // Databases
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const tools = [
  // Web Development Essentials (untuk deployment/dashboard)
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },

  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },

  // Data Science & Machine Learning
  { name: "Python", icon: SiPython, color: "#3776AB" },

  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
  { name: "Anaconda", icon: SiAnaconda, color: "#44A833" },

  // Visualisasi Data
  { name: "Tableau", icon: SiTableau, color: "#E97627" },

  // Database
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

const ToolsCarousel: React.FC = () => {
  const baseWidth = 120; // lebar per item (icon + nama) dalam px
  const totalWidth = tools.length * baseWidth;
  const duplicateCount = 2; // jumlah duplikasi

  const x = useMotionValue(0);
  const containerRef = useRef(null);

  useAnimationFrame(() => {
    // Kecepatan scroll (piksel per frame)
    const speed = 0.3;
    const newX = x.get() - speed;

    // Reset ke 0 jika sudah mencapai setengah dari total lebar (agar loop seamless)
    if (newX <= -totalWidth) {
      x.set(0);
    } else {
      x.set(newX);
    }
  });

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Tools & Technologies
        </h2>
        <div
          ref={containerRef}
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div className="flex gap-8 items-center" style={{ x }}>
            {/* Duplikasi tools agar loop terlihat seamless */}
            {[...Array(duplicateCount)].flatMap((_, i) =>
              tools.map((tool, index) => (
                <div
                  key={`${tool.name}-${i}-${index}`}
                  className="flex flex-col items-center justify-center shrink-0"
                  style={{ width: baseWidth }}
                >
                  <tool.icon
                    className="w-12 h-12 mb-2"
                    style={{ color: tool.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {tool.name}
                  </span>
                </div>
              )),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCarousel;
