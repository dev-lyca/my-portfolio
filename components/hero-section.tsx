"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-2rem)] flex flex-col 
      lg:flex-row items-center justify-center px-10 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex-1 sm:block max-w-xl relative h-[400px] sm:h-[500px] lg:h-[600px] w-full 
        flex items-center justify-center"
      >
        <div className="relative inline-block">
          <div
            className="absolute inset-0 rounded-xl
             bg-black/20 dark:bg-white/10
             filter blur-[50px]
             z-[-1]"
          />

          <Image
            src="/images/mee.png"
            alt="Lyca Nobleza - Hero Image"
            width={400}
            height={400}
            className="object-contain drop-shadow-2xl grayscale"
            priority
          />
          <div
            className="absolute inset-0 bg-black/20"
            style={{
              WebkitMaskImage: "url('/images/mee.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url('/images/mee.png')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-xl space-y-3 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-7xl sm:text-4xl font-bold font-serif leading-tight"
        >
          Crafting Modern, Scalable, and Elegant Web Solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl"
        >
          I’m a passionate{" "}
          <span className="font-semibold text-foreground">Web Developer</span>{" "}
          focused on building fast, interactive, and user-friendly digital
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button size="lg" asChild>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
