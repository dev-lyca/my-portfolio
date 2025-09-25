import { motion, Variants } from "framer-motion";

import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const logos = [
  {
    id: "html",
    icon: <FaHtml5 className="text-zinc-900 dark:text-zinc-100 w-12 h-12" />,
  },
  {
    id: "css",
    icon: <FaCss3Alt className="text-zinc-900 dark:text-zinc-100 w-12 h-12" />,
  },
  {
    id: "js",
    icon: <FaJs className="text-zinc-900 dark:text-zinc-100 w-12 h-12" />,
  },
  {
    id: "php",
    icon: <FaPhp className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },

  {
    id: "react",
    icon: <FaReact className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },
  {
    id: "next",
    icon: (
      <SiNextdotjs className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />
    ),
  },
  {
    id: "express",
    icon: <SiExpress className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },
  {
    id: "laravel",
    icon: <FaLaravel className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },
  {
    id: "tailwind",
    icon: (
      <SiTailwindcss className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />
    ),
  },
  {
    id: "bootstrap",
    icon: (
      <FaBootstrap className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />
    ),
  },

  {
    id: "postgresql",
    icon: (
      <SiPostgresql className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />
    ),
  },
  {
    id: "mysql",
    icon: <SiMysql className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },
  {
    id: "mongodb",
    icon: <SiMongodb className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },

  {
    id: "prisma",
    icon: <SiPrisma className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },

  {
    id: "git",
    icon: <SiGit className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },
  {
    id: "github",
    icon: <FaGithub className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },

  {
    id: "vercel",
    icon: <SiVercel className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },
  {
    id: "render",
    icon: <SiRender className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },

  {
    id: "postman",
    icon: <SiPostman className="text-zinc-900 dark:text-zinc-100 w-14 h-14" />,
  },
];

const TechStackSlider = () => {
  const hoverVariants: Variants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="absolute inset-0 -z-20 border-none backdrop-blur-2xl" />

      <motion.div
        className="flex gap-12 items-center justify-items-center p-8 pt-4 relative z-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            className="flex-shrink-0"
            variants={hoverVariants}
            whileHover="hover"
          >
            {logo.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackSlider;
