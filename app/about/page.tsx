"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Rocket,
  Server,
  TestTube,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const timeline = [
    {
      year: "2020 – 2024",
      title: "Bachelor of Science in Information Technology",
      description:
        "Mindoro State University – Calapan Campus. Academic Distinction Awardee (Grades: 1.69 GWA).",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      images: [
        "/images/journey/college1.jpg",
        "/images/journey/college5.jpg",
        "/images/journey/college2.jpg",
        "/images/journey/college3.jpg",
        "/images/journey/college4.jpg",
        "/images/journey/college6.jpg",
      ],
    },
    {
      year: "2023",
      title: "TESDA NC III – Programming (JAVA)",
      description:
        "Built a console-based Inventory System for simple data tracking.",
      icon: <TestTube className="w-6 h-6 text-primary" />,
      images: [],
    },
    {
      year: "2023",
      title: "iNTELLYX IT Solutions (SIL Program)",
      description:
        "Developed an Inventory System, applied problem-solving and collaborated with team to meet requirements.",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      images: [],
    },
    {
      year: "Feb – May 2024",
      title: "Bureau of Fisheries and Aquatic Resources (Intern)",
      description:
        "Developed property management system with Laravel. Organized employee files and coordinated with supervisor.",
      icon: <Server className="w-6 h-6 text-primary" />,
      images: [
        "/images/journey/ojt1.jpg",
        "/images/journey/ojt2.jpg",
        "/images/journey/ojt3.jpg",
        "/images/journey/ojt4.jpg",
        "/images/journey/ojt5.jpg",
        "/images/journey/ojt6.jpg",
        "/images/journey/ojt7.jpg",
      ],
    },
    {
      year: "July 2024 – March 2025",
      title: "Junior Web Developer at Infinitech Advertising Corp",
      description:
        "Built and maintained websites using Laravel and Next.js. Communicated with clients and collaborated on team projects.",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      images: [
        "/images/journey/job1.jpg",
        "/images/journey/job2.jpg",
        "/images/journey/job3.jpg",
        "/images/journey/job4.jpg",
        "/images/journey/job5.jpg",
        "/images/journey/job6.jpg",
        "/images/journey/job7.jpg",
        "/images/journey/job8.jpg",
      ],
    },
    {
      year: "August 2025 – Present",
      title: "Upskilling into Next.js, Express.js, MongoDB stack",
      description:
        "Exploring the MERN stack. Developing websites with new technologies and integrating full-stack solutions.",
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      images: [
        "/images/journey/present1.jpg",
        "/images/journey/present2.jpg",
        "/images/journey/present3.jpg",
        "/images/journey/present4.jpg",
      ],
    },
  ];

  return (
    <main className="relative container mx-auto px-4 py-16 space-y-24 mt-10">
      <motion.div
        className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr
          from-zinc-200/60 via-gray-300/50 to-zinc-100/60
          dark:from-gray-800/40 dark:via-zinc-900/50 dark:to-gray-700/40
          blur-3xl"
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <section className="max-w-3xl mx-auto text-center space-y-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-zinc-800  dark:text-muted-foreground leading-relaxed text-justify"
        >
          I am <span className="font-semibold">Lyca May Nobleza</span>, a
          passionate <span className="font-semibold">Web Developer</span> with
          hands-on experience in building and maintaining websites using{" "}
          <span className="font-semibold">Laravel</span> and{" "}
          <span className="font-semibold">Next.js</span>. I hold a{" "}
          <span className="font-semibold">
            Bachelor of Science in Information Technology{" "}
          </span>
          from Mindoro State University, graduating with{" "}
          <span className="font-semibold">Academic Distinction</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-zinc-800  dark:text-muted-foreground leading-relaxed text-justify"
        >
          My expertise spans frontend and backend frameworks, relational and
          NoSQL databases, and modern development tools. I focus on writing{" "}
          <span className="font-semibold">
            clean, maintainable, and reusable code
          </span>
          , ensuring scalability and long-term efficiency in projects.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-zinc-800  dark:text-muted-foreground leading-relaxed text-justify"
        >
          To boost my productivity, I actively explore{" "}
          <span className="font-semibold">AI-driven development tools</span> and
          dedicate time to continuous learning. This helps me adapt quickly to
          new frameworks and integrate innovative solutions into my projects.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-zinc-800  dark:text-muted-foreground leading-relaxed text-justify"
        >
          I am currently upskilling in the{" "}
          <span className="font-semibold">MERN stack</span> and look forward to
          contributing my adaptability, problem-solving skills, and passion for
          continuous growth to future projects.
        </motion.p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Journey</h2>
        <div className="relative border-l border-zinc-300 dark:border-zinc-700 max-w-3xl mx-auto space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year + i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative ml-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card/60 dark:bg-card/40 backdrop-blur-md shadow-sm p-5 cursor-pointer group"
            >
              {/* Timeline dot */}
              <span className="absolute -left-3 top-5 flex items-center justify-center w-6 h-6 rounded-full bg-background border shadow">
                {item.icon}
              </span>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  {item.year} — {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>

                {/* Images section */}
                {item.images && item.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {item.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="relative w-full h-28 rounded-lg overflow-hidden shadow-sm"
                      >
                        <Image
                          src={img}
                          alt={`${item.title} screenshot`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
