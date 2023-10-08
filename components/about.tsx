"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Before graduating from university, I decided to pursue an internship in the programming field . I interned in{" "}
        <span className="font-medium">FrontEnd web development</span> and absolutely fell in love with it.
        <span className="italic">What I enjoy most about programming is the problem-solving aspect</span>. I{" "}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core
        stack is <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with
        TypeScript. I am always looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing badminton , watching movies, and playing
        with my dog. I also enjoy <span className="font-medium">learning new things</span>. I'm also learning how to
        play the guitar.
      </p>
    </motion.section>
  );
}
