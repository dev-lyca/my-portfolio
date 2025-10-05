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
  const [viewModes, setViewModes] = useState<
    Record<string, "desktop" | "mobile">
  >({});

  return (
    <main className="relative container mx-auto px-6 py-12 mt-20 lg:mt-10">
      <section className="text-center mb-10 lg:mb-12 space-y-2">
        <motion.h1
          className="text-5xl font-extrabold tracking-wide uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A showcase of the projects I’ve designed and developed.
        </motion.p>
      </section>

      <section className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project, i) => {
          const desktopImages = project.images.filter((img) =>
            img.endsWith(".png")
          );
          const mobileImages = project.images.filter((img) =>
            img.endsWith(".jpg")
          );

          const currentView =
            viewModes[project.id] ||
            (desktopImages.length > 0 ? "desktop" : "mobile");

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

                <CardContent className="space-y-3 h-[450px] flex flex-col justify-between">
                  {/* Toggle Buttons */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {desktopImages.length > 0 && (
                      <button
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          currentView === "desktop"
                            ? "bg-primary text-white dark:text-gray-900"
                            : "bg-gray-200 dark:bg-zinc-700 text-black dark:text-white"
                        }`}
                        onClick={() =>
                          setViewModes((prev) => ({
                            ...prev,
                            [project.id]: "desktop",
                          }))
                        }
                      >
                        Desktop
                      </button>
                    )}
                    {mobileImages.length > 0 && (
                      <button
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          currentView === "mobile"
                            ? "bg-primary text-white dark:text-gray-900"
                            : "bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
                        }`}
                        onClick={() =>
                          setViewModes((prev) => ({
                            ...prev,
                            [project.id]: "mobile",
                          }))
                        }
                      >
                        Mobile
                      </button>
                    )}
                  </div>

                  {currentView === "desktop" && desktopImages.length > 0 && (
                    <div className="relative max-w-[305px] w-full h-auto mx-auto rounded-lg overflow-hidden">
                      <motion.div
                        className="flex gap-x-4"
                        animate={{
                          x: [0, -desktopImages.length * 100 + "%"],
                        }}
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

                  {currentView === "mobile" && mobileImages.length > 0 && (
                    <div className="relative max-w-[300px] w-full h-auto mx-auto rounded-lg overflow-hidden">
                      <motion.div
                        className="flex gap-x-2"
                        animate={{
                          x: [0, -mobileImages.length * 100 + "%"],
                        }}
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

                  <p className="text-sm sm:text-base text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

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
