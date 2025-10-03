import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Leluxe Clinic - ADMIN Side",
    description:
      "A full-stack project using PrismaORM, PostgreSQL, Neon, Next.js, deployed on Vercel.",
    tech: ["PrismaORM", "PostgreSQL", "Neon", "Next.js", "Vercel"],
    demoLink: "https://leluxe-clinic.vercel.app",
    githubLink: "",
    images: ["/images/projects/leluxe2.png", "/images/projects/leluxe2.jpg"],
  },
  {
    id: "2",
    title: "ASDC Scuba Diving Reservation",
    description:
      "Reservation system using PrismaORM, PostgreSQL, Neon, Next.js, hosted on Vercel.",
    tech: ["PrismaORM", "PostgreSQL", "Neon", "Next.js", "Vercel"],
    demoLink: "https://asdc-system.vercel.app",
    githubLink: "",
    images: [
      "/images/projects/asdc1.png",
      "/images/projects/asdc2.png",
      "/images/projects/asdc3.png",
      "/images/projects/asdc.jpg",
      "/images/projects/asdc1.jpg",
      "/images/projects/asdc2.jpg",
    ],
  },
  {
    id: "3",
    title: "TrackTask",
    description:
      "Task organizing app built with Next.js, Express.js, MongoDB, deployed on Vercel and Render with Google Auth login.",
    tech: ["Next.js", "Express.js", "MongoDB", "Vercel", "Render"],
    demoLink: "https://tracktask-five.vercel.app",
    githubLink: "",
    images: [
      "/images/projects/tracktask1.png",
      "/images/projects/tracktask2.png",
      "/images/projects/tracktask.jpg",
      "/images/projects/tracktask2.jpg",
      "/images/projects/tracktask3.jpg",
      "/images/projects/tracktask4.jpg",
      "/images/projects/tracktask5.jpg",
    ],
  },
  {
    id: "4",
    title: "QR Code Generator",
    description:
      "Simple QR Code generator project built using Next.js 14, Tailwind CSS, and the next-qrcode library.",
    tech: ["Next.js", "Tailwind", "next-qrcode"],
    demoLink: "https://qrcode-generator-seven-iota.vercel.app",
    githubLink: "https://github.com/dev-lyca/qrcode-generator",
    images: [
      "/images/projects/qrcode.png",
      "/images/projects/qrcode1.png",
      "/images/projects/qrcode1.jpg",
      "/images/projects/qrcode2.jpg",
    ],
  },
];
