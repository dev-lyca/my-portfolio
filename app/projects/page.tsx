"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <main className="relative container mx-auto px-4 py-16 space-y-16">
      <section className="text-center space-y-2">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A selection of my recent work, including web applications and UI
          experiments.
        </motion.p>
      </section>

      <section className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {projects.map((project, i) => {
          const desktopImages = project.images.filter((img) =>
            img.endsWith(".png")
          );
          const mobileImages = project.images.filter((img) =>
            img.endsWith(".jpg")
          );

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  {/* Toggle Buttons */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {desktopImages.length > 0 && (
                      <button
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          viewMode === "desktop"
                            ? "bg-primary text-white dark:text-gray-900"
                            : "bg-gray-200 dark:bg-zinc-700 text-black dark:text-white"
                        }`}
                        onClick={() => setViewMode("desktop")}
                      >
                        Desktop
                      </button>
                    )}
                    {mobileImages.length > 0 && (
                      <button
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          viewMode === "mobile"
                            ? "bg-primary text-white dark:text-gray-900"
                            : "bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
                        }`}
                        onClick={() => setViewMode("mobile")}
                      >
                        Mobile
                      </button>
                    )}
                  </div>

                  {/* Desktop Preview */}
                  {viewMode === "desktop" && desktopImages.length > 0 && (
                    <div className="relative max-w-[305px] w-full h-auto mx-auto rounded-lg overflow-hidden">
                      <motion.div
                        className="flex gap-x-4"
                        animate={{ x: [0, -desktopImages.length * 100 + "%"] }}
                        transition={{
                          duration: desktopImages.length * 6,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                      >
                        {[...desktopImages, ...desktopImages].map(
                          (src, idx) => (
                            <div
                              key={idx}
                              className="relative w-full flex-shrink-0 h-full"
                            >
                              <Image
                                src={src}
                                alt={project.title}
                                width={800}
                                height={450}
                                className="object-contain rounded-lg"
                              />
                            </div>
                          )
                        )}
                      </motion.div>
                    </div>
                  )}

                  {/* Mobile Preview */}
                  {viewMode === "mobile" && mobileImages.length > 0 && (
                    <div className="relative max-w-[300px] w-full h-auto mx-auto rounded-lg overflow-hidden">
                      <motion.div
                        className="flex gap-x-2"
                        animate={{ x: [0, -mobileImages.length * 100 + "%"] }}
                        transition={{
                          duration: mobileImages.length * 6,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                      >
                        {[...mobileImages, ...mobileImages].map((src, idx) => (
                          <div
                            key={idx}
                            className="relative max-w-[300px] w-full flex-shrink-0 h-auto"
                          >
                            <Image
                              src={src}
                              alt={project.title}
                              width={100}
                              height={100}
                              className="object-contain rounded-lg"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex flex-wrap gap-2 justify-end">
                  {project.demoLink && (
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="mr-1" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="mr-1" /> GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}
