"use client";
import React from "react";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      // viewport={{ once: true, amount: 0.3 }}
      className="pt-24"
    >
      <h1 className="text-center text-3xl font-bold md:text-5xl">ABOUT</h1>
      <div className="w-5/6 m-auto mt-12 flex flex-col space-y-12 md:flex-row gap-x-8 md:justify-evenly md:mt-16 max-w-screen-xl">
        <img
          src="https://cdn.pixabay.com/photo/2021/05/22/06/30/man-6272667_1280.jpg"
          alt="About us image"
          className="object-cover rounded-xl md:w-1/3 max-w-sm max-h-[400px] min-w-[300px] min-h-[400px]"
        />
        <div className="md:w-1/2 flex items-start max-w-xl min-w-[250px]">
          <p className="text-sm text-justify md:text-xl max-h-[400px] overflow-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            aliquam vitae quam veritatis eligendi pariatur, voluptate nisi iusto
            vero molestiae incidunt? Dicta consequuntur at, deserunt tempora
            natus odit minima quaerat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis odit nihil autem fugit voluptates maiores
            quas atque. Possimus, reprehenderit, consectetur nulla vel voluptate
            fuga officiis dolores provident exercitationem, ut quasi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas in
            exercitationem non corporis doloribus ut nemo placeat possimus ab?
            Quam, perferendis quis. Culpa, molestiae nostrum ducimus voluptate
            quasi qui! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ullam amet veritatis maxime fugiat, quod blanditiis totam, quis,
            temporibu
 
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Aboutme;
