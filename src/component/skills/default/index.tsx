import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import {
  SiHtml5, SiCss3, SiTypescript, SiReact, SiTailwindcss, SiGit, SiDocker,
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiJupyter, SiAnaconda, SiTableau, SiMysql, SiPostgresql,
} from "react-icons/si";

const tools = [
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Tableau", icon: SiTableau },
];

const ToolsCarousel: React.FC = () => {
  const baseWidth = 160; 
  const totalWidth = tools.length * baseWidth;
  const x = useMotionValue(0);

  useAnimationFrame(() => {
    const speed = 0.5;
    const newX = x.get() - speed;
    if (newX <= -totalWidth) {
      x.set(0);
    } else {
      x.set(newX);
    }
  });

  return (
    <div className="w-full bg-slate-50 py-20 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-serif text-center">Toolkit & Technologies</h2>
        </div>
      </div>
      
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div className="flex items-center" style={{ x }}>
          {[...Array(3)].flatMap((_, i) =>
            tools.map((tool, index) => (
              <div
                key={`${tool.name}-${i}-${index}`}
                className="flex flex-col items-center justify-center shrink-0 group transition-all duration-500"
                style={{ width: baseWidth }}
              >
                <div className="p-6 bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-primary/20 group-hover:-translate-y-1 transition-all duration-300">
                  <tool.icon className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="mt-4 text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-primary transition-colors duration-300">
                  {tool.name}
                </span>
              </div>
            )),
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsCarousel;
