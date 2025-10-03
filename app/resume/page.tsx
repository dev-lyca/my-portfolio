"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const ResumePage = () => {
  return (
    <main className="relative container mx-auto px-6 py-12 mt-20 lg:mt-10 space-y-12">
      {/* Heading */}
      <section className="text-center mb-12 space-y-2">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Resume
        </motion.h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A quick overview of my professional journey.
        </p>
        <Button asChild className="mt-4">
          <a href="/resume.pdf" download>
            <FiDownload className="mr-2" /> Download PDF
          </a>
        </Button>
      </section>

      {/* Resume Content */}
      <Card className="p-8 space-y-8">
        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Frontend Developer</h3>
              <p className="text-sm text-muted-foreground">
                Awesome Company — 2022–Present
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                <li>Built and optimized modern web apps using Next.js</li>
                <li>Collaborated with designers to improve UX/UI</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">Web Developer Intern</h3>
              <p className="text-sm text-muted-foreground">
                Startup XYZ — 2021–2022
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                <li>Developed landing pages and dashboards</li>
                <li>Maintained and updated company website</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-sm">
            <span className="font-medium">B.S. in Computer Science</span> — Your University (2018–2022)
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">
              TailwindCSS
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">
              Node.js
            </span>
          </div>
        </section>
      </Card>
    </main>
  );
};

export default ResumePage;
