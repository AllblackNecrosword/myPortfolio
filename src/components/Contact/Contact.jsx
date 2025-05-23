"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPinHouse, Phone } from "lucide-react";
const Contact = () => {
  return (
    <div className="mt-28 pb-10" id="contact">
      {/* <h1 className="text-center text-3xl font-bold md:text-5xl">CONTACT</h1> */}
      <div className=" mt-8 w-5/6 m-auto md:flex items-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center p-4 md:w-1/2 flex flex-col md:items-start "
        >
          <p className="text-3xl font-bold md:text-6xl pb-4">Let's work</p>
          <p className="text-3xl font-bold md:text-6xl">together</p>
          <div className="mt-8 flex flex-col justify-center items-center md:items-start space-y-2">
            <Mail />
            <p>Mail</p>
            <p>koshishkhadka364@gmail.com</p>
          </div>
          <div className="mt-8 flex flex-col justify-center items-center md:items-start space-y-2">
            <MapPinHouse />
            <p>Address</p>
            <p>Kapan,kathmandu</p>
          </div>
          <div className="mt-8 flex flex-col justify-center items-center md:items-start space-y-2">
            <Phone />
            <p>Phone</p>
            <p>9843023686</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col mt-6 pt-4 space-y-5 md:w-1/2 "
        >
          <input
            placeholder="Name"
            className="bg-white text-black py-2 rounded-md pl-4"
          />
          <input
            placeholder="Email"
            className="bg-white text-black py-2 rounded-md pl-4"
          />
          <input
            placeholder="Message"
            className="bg-white text-black py-2 rounded-md pl-4 h-28"
          />
          <button className="text-white py-3 bg-[#0C2340] hover:bg-white hover:text-black transition-all ease-in duration-300 delay-100">
            Submit
          </button>
        </motion.div>
      </div>

      {/* <div className="w-1/2 flex flex-col space-y-4 w-4/5 m-auto mt-10 pb-12 md:w-1/4">
        <input placeholder="Name" className="bg-white text-black py-2 rounded-md pl-4"/>
        <input placeholder="Email" className="bg-white text-black py-2 rounded-md pl-4"/>
        <input placeholder="Message" className="bg-white text-black py-2 rounded-md pl-4 h-28"/>
        <button className="text-white py-3 bg-blue-600 hover:bg-white hover:text-black transition-all ease-in duration-300 delay-100">Submit</button>
      </div> */}
    </div>
  );
};

export default Contact;
