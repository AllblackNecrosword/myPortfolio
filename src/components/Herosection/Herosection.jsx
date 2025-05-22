"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import TextFlip from "../animata/TextFlip";
import { TypingAnimation } from "../magicui/typing-animation";
const Herosection = () => {
  // const array=[];

  return (
    <section
      id="home"
      className="h-screen md:flex overflow-hidden w-4/5 m-auto"
    >
      <div className="h-2/5 flex flex-col justify-center items-center md:items-start space-y-4 px-4 md:px-8 md:w-1/2 md:h-screen">
        <motion.p
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-14 text-xl text-center font-semibold md:text-2xl md:text-left md:mt-0"
        >
          Hi, I am
        </motion.p>

        <motion.div
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl font-bold text-center md:text-6xl md:text-left"
        >
          {/* <TypingAnimation>Koshish Khadka</TypingAnimation> */}
          Koshish Khadka
        </motion.div>

        <motion.p
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xl font-semibold md:text-2xl text-gray-600 text-left"
        >
          a developer who loves
        </motion.p>
        <motion.div
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl font-bold md:text-3xl text-[#6A5ACD]  text-left"
        >
          {/* <TextFlip/> */}
          clean code
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#6A5ACD] text-white text-sm py-2 px-2 md:px-4 md:py-3 rounded-md   "
          >
            View my Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 1 }}
            className="text-white rounded-md text-sm py-2 px-2 md:px-4 md:py-3 border hover:bg-white hover:text-black transition"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 0.9 }}
        className="h-full  flex justify-center items-center mt-6 md:w-1/2 md:mt-0"
      >
        <img
          src="https://i.pinimg.com/736x/45/47/1a/45471a9cd1644120501cd2643a31888c.jpg"
          alt="Professional photo"
          className="w-4/5 h-[90%] object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Herosection;
