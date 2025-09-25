"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import TechStackSlider from "./tech-stack-slider";
import { Typewriter } from "./typewriter";

export default function HeroSection() {
  return (
    <section className="relative h-full md:h-[100vh] lg:h-[100vh] ">
      <div
        className="flex flex-col items-center 
    justify-center px-10 overflow-hidden mt-20 lg:mt-0 container mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative space-y-4 lg:space-y-6"
          >
            <Typewriter
              text={["WEB", "DEVELOPER"]}
              as="h2"
              className="text-5xl text-left sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
            />

            <div className="flex flex-col justify-center text-left select-none pointer-events-none">
              <div className="text-2xl md:text-8xl lg:text-7xl font-extrabold text-black/40 dark:text-white/40 tracking-widest leading-tight block lg:hidden md:hidden">
                <span>CODE.</span>
                <span>BUILD.</span>
                <span>CREATE.</span>
              </div>
            </div>

            <div>
              <Typewriter
                text="Modern Development"
                as="h2"
                className="text-xl text-zinc-900 dark:text-white font-semibold max-w-[500px]"
              />
              <Typewriter
                text="
              Focused on speed, usability, and cutting-edge technologies.  
              Leveraging modern frameworks, scalable architectures, and best practices,  
              I ensure every project is optimized for performance and maintainability.  
              From seamless user interfaces to robust backend systems, I create  
              digital experiences that are both future-proof and impactful.
              "
                as="p"
                className="text-zinc-900 dark:text-muted-foreground"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row justify-start gap-4"
            >
              <Button
                size="lg"
                asChild
                className="border rounded-tr-4xl rounded-bl-4xl"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border rounded-tr-4xl rounded-bl-4xl"
              >
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute text-right text-6xl md:text-6xl lg:text-7xl font-extrabold
              text-black/40 dark:text-white/10 select-none pointer-events-none
              tracking-widest leading-tight hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-20">
                <span>C.</span>
                <span>ODE.</span>
              </div>
              <div className="grid grid-cols-2 gap-24">
                <span>BUI</span>
                <span>ILD.</span>
              </div>
              <div className="grid grid-cols-2 gap-40">
                <span>CREA</span>
                <span>TE.</span>
              </div>
            </div>

            <motion.div
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="relative hidden self-start -mt-10 lg:inline-block"
            >
              <Image
                src="/images/me.png"
                alt="Lyca Nobleza - Hero Image"
                width={400}
                height={300}
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_20px_50px_rgba(255,255,255,0.35)] grayscale hover:grayscale-0 transition-all duration-500 w-[450px] h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full overflow-hidden relative lg:-mt-10 z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <TechStackSlider />
      </motion.div>
    </section>
  );
}
