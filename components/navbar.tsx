"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[90%] mx-auto 
    rounded-bl-4xl rounded-tr-4xl border bg-white/80 dark:bg-zinc-900/80 backdrop-blur shadow-lg"
    >
      <div className="flex h-14 items-center justify-between px-6">
        <Link
          href="/"
          className="font-bold text-lg text-zinc-900 dark:text-zinc-100"
        >
          dev.elmn
        </Link>

        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              stiffness: 300,
              damping: 20,
              duration: 0.6,
            }}
          >
            <Button
              asChild
              className="hidden md:inline-flex border rounded-tr-4xl rounded-bl-4xl
          text-zinc-100 dark:text-zinc-900
          bg-zinc-900 dark:bg-zinc-100
          shadow-md"
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
            ) : (
              <Menu className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <header
          className="md:hidden flex flex-col gap-4 px-6 pb-6 
        bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 
        rounded-bl-4xl rounded-br-4xl backdrop-blur-3xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-zinc-900 dark:text-zinc-100 
              hover:text-zinc-500 dark:hover:text-zinc-400 transition"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Button
            asChild
            className="mt-4 border rounded-tr-4xl rounded-bl-4xl
             text-zinc-100 dark:text-zinc-900 transition"
          >
            <Link href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </Button>
        </header>
      )}
    </header>
  );
}
