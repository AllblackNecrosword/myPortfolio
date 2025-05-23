"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const Project = () => {
  const project = [
    {
      name: "Fashion Ecommerce Site",
      image:
        "https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383",
    },
    {
      name: "Job Portal Application",
      image:
        "https://themewagon.com/wp-content/uploads/2020/11/jobfinder-1.jpg",
    },
    {
      name: "AI Image Generator",
      image:
        "https://www.figma.com/community/resource/768447be-8fa8-45b3-9e30-70b11a5c7f4e/thumbnail",
    },
  ];
  return (
    <div className="w-5/6 m-auto mt-14">
      <motion.h1
        id="projects"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-3xl font-bold"
      >
        PROJECTS
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center pt-3 lg:text-xl "
      >
        A collection of hands-on projects where I applied and expanded my skills
        in full-stack development.
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:flex justify-evenly flex-wrap"
      >
        {project.map((elements, index) => {
          return (
            <Card
              key={index}
              className="group mt-12 md:w-xl transition-all duration-200 delay-100 ease-in-out 
                   focus-within:scale-105 lg:hover:scale-105"
              tabIndex={0} // makes the whole card focusable
            >
              <CardHeader>
                <CardTitle className="bg-amber-300 m-auto">
                  <img
                    src={elements.image}
                    alt="Ecommerce image"
                    className="w-full min-w-[200px] max-w-[300px] md:min-w-[250px] md:max-w-[350px] md:h-56 object-cover mx-auto rounded"
                  />
                </CardTitle>
                <CardDescription className="text-2xl font-semibold">
                  {elements.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex justify-between">
                {/* Make buttons focusable so focus-within works */}
                <Button tabIndex={-1}>Demo</Button>
                <Button tabIndex={-1}>Github</Button>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Project;
