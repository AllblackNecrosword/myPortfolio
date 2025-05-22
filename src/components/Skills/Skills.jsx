"use client";
import React from "react";
import { motion } from "framer-motion";
import FlipCard from "../animata/FlipCard";

const Skills = () => {
  return (
    <motion.div
    id="skills"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      // viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col mt-14"
    >
      <h1 className="text-center text-3xl font-bold ">SKILLS</h1>
      <div className="w-5/6 lg:flex justify-evenly flex-wrap gap-x-4 m-auto">
        <div className="mt-12">
          {" "}
          <FlipCard
            className="flex-1 min-w-[250px] max-w-[calc(33.333%-1rem)]  m-auto"
            description="I specialize in building modern, responsive, and high-performance
              websites using the latest web technologies. From dynamic
              e-commerce platforms and sleek portfolio sites to custom web
              applications"
            image="https://cdn.pixabay.com/photo/2015/10/27/14/40/programming-1009134_1280.jpg"
            rotate="y"
            subtitle="Web Developement"
            title="Web Developement"
          />{" "}
        </div>
        <div className="mt-12">
          <FlipCard
            className="flex-1 min-w-[250px] max-w-[calc(33.333%-1rem)] m-auto"
            description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
            image="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
            rotate="y"
            subtitle="UI Design"
            title="UI Design"
          />
        </div>
        <div className="mt-12">
          <FlipCard
            className="flex-1 min-w-[250px] max-w-[calc(33.333%-1rem)]  m-auto"
            description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
            image="https://media.istockphoto.com/id/2163506574/photo/standard-quality-control-certification-assurance-guarantee-concept-businessman-working-with.jpg?s=1024x1024&w=is&k=20&c=LS8XqzwRyTaL8M3EVnVFIry23NQdX3ZBKfTzNWkXYBk="
            rotate="y"
            subtitle="What is programming?"
            title="System Testing"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
