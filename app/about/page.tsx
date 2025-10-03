"use client";

import JourneyPage from "@/components/journey";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative container mx-auto px-6 py-12 mt-20 lg:mt-10">
      <section className="text-center mb-12 space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-wide uppercase "
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground"
        >
          Learn more about who I am
        </motion.p>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden border-b lg:border-r border-zinc-700"
        >
          <Image
            src="/images/mee.png"
            alt="Lyca Nobleza"
            width={400}
            height={400}
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text side like article column */}
        <section className="flex-1 space-y-6 ">
          {[1, 2, 3, 4].map((i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-lg leading-relaxed border-b border-zinc-700 pb-4"
            >
              {i === 1 && (
                <>
                  I am <span className="font-semibold">Lyca May Nobleza</span>,
                  a <span className="font-semibold">Web Developer</span>{" "}
                  passionate about building and maintaining websites with{" "}
                  <Badge variant="destructive">Laravel</Badge> and{" "}
                  <Badge variant="default">Next.js</Badge>. I hold a{" "}
                  <span className="font-semibold">
                    Bachelor of Science in Information Technology
                  </span>
                  .
                </>
              )}
              {i === 2 && (
                <>
                  My expertise spans frontend and backend frameworks, relational
                  and NoSQL databases, and modern development tools. I focus on
                  writing{" "}
                  <span className="font-semibold">
                    clean, maintainable, and reusable code
                  </span>{" "}
                  to ensure scalability and long-term efficiency.
                </>
              )}
              {i === 3 && (
                <>
                  To boost productivity, I actively explore{" "}
                  <span className="font-semibold">AI-driven tools</span> and
                  dedicate time to continuous learning — adapting quickly to new
                  frameworks and integrating innovative solutions into my
                  projects.
                </>
              )}
              {i === 4 && (
                <>
                  Currently, I’m upskilling in the{" "}
                  <span className="font-semibold">MERN stack</span> while
                  contributing adaptability, problem-solving, and passion for
                  growth to future projects.
                </>
              )}
            </motion.p>
          ))}
        </section>
      </div>

      <div className="mt-16 px-2 lg:px-20 pt-8">
        <JourneyPage />
      </div>
    </main>
  );
}
