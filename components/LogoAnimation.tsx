"use client";
import React from "react";
import { motion } from "framer-motion";
import udemy from "@/public/asset/udemy.png";
import fiverr from "@/public/asset/fiverr.png";
import elementor from "@/public/asset/elementor.png";
import logitech from "@/public/asset/logitech.png";
import oracle from "@/public/asset/oracle.png";
import Image from "next/image";

const images = [
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

const LogoAnimation = () => {
  return (
    <div className="py-8 my-24 bg-purple-300/10 -skew-y-2 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translate: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, idx) => (
              <Image key={idx} src={image.src} alt={image.alt} height={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
