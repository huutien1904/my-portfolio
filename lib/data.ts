import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ingenta from "@/public/ingenta.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FrontEnd Developer in CMC",
    location: "Ha Noi, Viet Nam",
    description: "I interned for 6 months then worked officially for 2 years with 2 projects",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Graduated university",
    location: "Ha Noi, Viet Nam",
    description: "I graduated after 5 years of studying information technology with an engineering degree",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2023",
  },
  {
    title: "Front-End Developer in Rikkei Soft",
    location: "Ha Noi, Viet Nam",
    description:
      "I worked as a front-end developer in web and mobile. I am also upskilling to the full stack developer. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "INGENTA",
    description:
      "I have worked as a FrontEnd developer with 10 developer since 1 years. Website to manage and analyze students according to AI data",
    tags: ["React", "MY SQL", "Tailwind", "Prisma"],
    imageUrl: ingenta,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Framer Motion",
] as const;
