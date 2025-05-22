import { Copyright, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6 flex flex-col justify-center items-center ">
      <div className="flex items-center gap-x-5 p-3">
        <Facebook className="transition-all duration-100 delay-75 hover:scale-125"/>
        <Instagram className="transition-all duration-100 delay-75 hover:scale-125"/>
        <Linkedin className="transition-all duration-100 delay-75 hover:scale-125"/>
        <Mail className="transition-all duration-100 delay-75 hover:scale-125"/>
      </div>
      <div className="flex gap-x-4 p-3">
        <Copyright />
        <p className="text-regular font-semibold">Copyright All rights reserved Koshish Khadka</p>
      </div>
    </footer>
  );
};

export default Footer;
