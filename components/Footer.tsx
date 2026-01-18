import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com", Icon: AiFillGithub, label: "Github" },
  { href: "https://x.com", Icon: AiOutlineTwitter, label: "X (Twitter)" },
  { href: "https://facebook.com", Icon: AiFillFacebook, label: "Facebook" },
  { href: "https://instagram.com", Icon: AiFillInstagram, label: "Instagram" },
  { href: "https://telegram.org", Icon: FaTelegramPlane, label: "Telegra" },
];
const Footer = () => {
  return (
    <footer className="relative py-8 max-w-300 mx-auto px-4">
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-1/4 w-25 h-25 bg-purple-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[16%] left-1/2 w-37.5 h-25 bg-purple-400 rounded-lg opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[35%] left-2/3 w-25 h-25 bg-purple-400 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-1/4 w-50 h-50 bg-purple-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[35%] left-1/2 w-62.5 h-37.5 bg-purple-400 rounded-lg opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[50%] left-1/3 w-50 h-25 bg-purple-400 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="relative z-10 text-center mt-8">
        <h1 className="hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
          CHINEDU UMEH
        </h1>
        <h1 className="md:hidden text-9xl font-bold text-white opacity-10">
          NEDU <br /> UMEH
        </h1>
      </div>
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-purple-200">&copy; 2026. All rights reserved</p>
        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-purple-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-purple-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
