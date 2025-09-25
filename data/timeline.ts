import { TimelineItem } from "../types/timeline";
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Rocket,
  Server,
  TestTube,
} from "lucide-react";

export const timeline: TimelineItem[] = [
  {
    year: "2020 – 2024",
    title: "Bachelor of Science in Information Technology",
    description:
      "Mindoro State University – Calapan Campus. Academic Distinction Awardee (Grades: 1.69 GWA).",
    icon: GraduationCap,
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
    icon: TestTube,
    images: [],
  },
  {
    year: "2023",
    title: "iNTELLYX IT Solutions (SIL Program)",
    description:
      "Developed an Inventory System, applied problem-solving and collaborated with team to meet requirements.",
    icon: Briefcase,
    images: [],
  },
  {
    year: "Feb – May 2024",
    title: "Bureau of Fisheries and Aquatic Resources (Intern)",
    description:
      "Developed property management system with Laravel. Organized employee files and coordinated with supervisor.",
    icon: Server,
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
    icon: Rocket,
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
    icon: Lightbulb,
    images: [
      "/images/journey/present1.jpg",
      "/images/journey/present2.jpg",
      "/images/journey/present3.jpg",
      "/images/journey/present4.jpg",
    ],
  },
];
