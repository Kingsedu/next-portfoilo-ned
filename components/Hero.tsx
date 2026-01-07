"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import profilepic from "../public/asset/profilepic.png";

const Hero = () => {
  //   console.log(profilepic);
  return (
    <>
      <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#340f41_35%,#8a3da4_55%,#b993ed_85%)]">
        <div className="absolute bg-black w-600 h-250 rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#9e4ac5)] top-[450px] border-[1px] border-[#BD8CDE]/30" />
        <div className="container relative mx-auto px-4 pt-12 pb-24">
          <div className="flex flex-col items-center justify-center text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-8 mt-24 border-red-50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 to-transparent rounded-full blur-3xl"></div>
              <Image
                src={profilepic}
                alt="profile pic"
                className="w-62.5 relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                Hi, I am <br /> CHINEDU{" "}
                <span className="text-purple-300">KINGSLEY UMEH</span>
              </h1>
              <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                I am a FullStack / Mobile / Web3 developer focusing on creating
                responsive websites that provides user with best experience
              </p>
              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gray-500 rounded-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 hover:bg-purple-700 transition-colors"
                >
                  Contact Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 border border-purple-400/20 rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  View Work
                </motion.button>
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
