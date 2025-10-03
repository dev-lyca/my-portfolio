"use client";

import JourneyPage from "@/components/journey";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative container mx-auto px-10 py-8 mt-20 lg:mt-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-bold"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <section className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="relative inline-block"
            >
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/mee.png"
                  alt="Lyca Nobleza - About Me"
                  width={400}
                  height={300}
                  className="object-contain drop-shadow-2xl 
                  shadow-amber-50  rounded-tl-full rounded-br-full"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="flex-1 space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-lg text-zinc-800 dark:text-muted-foreground leading-relaxed text-justify"
            >
              {i === 1 && (
                <>
                  I am <span className="font-semibold">Lyca May Nobleza</span>,
                  a passionate{" "}
                  <span className="font-semibold">Web Developer</span> with
                  hands-on experience in building and maintaining websites using{" "}
                  <span className="font-semibold">
                    <Badge variant={"destructive"}>Laravel</Badge>
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    <Badge variant={"default"}>Next.js</Badge>
                  </span>
                  . I hold a{" "}
                  <span className="font-semibold">
                    Bachelor of Science in Information Technology.
                  </span>
                </>
              )}
              {i === 2 && (
                <>
                  My expertise spans frontend and backend frameworks, relational
                  and NoSQL databases, and modern development tools. I focus on
                  writing{" "}
                  <span className="font-semibold">
                    clean, maintainable, and reusable code
                  </span>
                  , ensuring scalability and long-term efficiency in projects.
                </>
              )}
              {i === 3 && (
                <>
                  To boost my productivity, I actively explore{" "}
                  <span className="font-semibold">
                    AI-driven development tools
                  </span>{" "}
                  and dedicate time to continuous learning. This helps me adapt
                  quickly to new frameworks and integrate innovative solutions
                  into my projects.
                </>
              )}
              {i === 4 && (
                <>
                  I am currently upskilling in the{" "}
                  <span className="font-semibold">MERN stack</span> and look
                  forward to contributing my adaptability, problem-solving
                  skills, and passion for continuous growth to future projects.
                </>
              )}
            </motion.p>
          ))}
        </section>
      </div>
      <div className="mx-0 lg:mx-auto px-1 lg:px-20">
        <JourneyPage />
      </div>
    </main>
  );
}
