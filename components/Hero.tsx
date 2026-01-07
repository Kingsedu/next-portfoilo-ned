"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000_10%,#232323_35%,#fff_67%,#fff_85%)]">
        <div className="absolute bg-black w-600 h-250 rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#fff)] top-[450px] border-[1px] border-[#fff]/30" />
        <div className="container relative mx-auto px-4 ">
          <div className="flex flex-col items-center justify-center text-center z-10">
            <motion.div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-500/20 to transparent rounded-full blur-3xl">
                <Image
                  src={}
                  alt="profile pic"
                  className="w-[250px] relative z-10"
                />
              </div>
            </motion.div>
          </div>
          <motion.div></motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
