"use client";
import { LuArrowUpRight } from "react-icons/lu";
import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section id="contact" className="py-32 text-white max-w-300 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-3">
              <p className="text-lg text-purple-300">Phone</p>
              <a
                href="tel:+2348062468740"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +234 8062468740
                <span className="text-purple-500">
                  <LuArrowUpRight />
                </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-purple-300">Email</p>
              <a
                href="mailto:chinedumeh26@yahoo.com"
                className="text-3xl lg:text-4xl font-semibold hover:text-purple-400 transition duration-300 flex items-center"
              >
                chinedumeh26@yahoo.com
                <span className="text-purple-500">
                  <LuArrowUpRight />
                </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-purple-300">Home</p>
              <address className="text-xl not-italic leading-relaxed">
                Lekki, Phase-One, Primewater
                <br />
                Lagos State
              </address>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-100 rounded-2xl overflow-hidden"
        >
          <iframe
            /* src="https://www.google.com/maps/place/Lekki+Phase+1,+Lekki+106104,+Lagos/data=!4m2!3m1!1s0x103bf452da3bd44b:0x47331fb41adc9d28?sa=X&ved=1t:242&ictx=111" */
            /*  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5788316086147!2d4.8906773!3d52.3660809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c19bcaa879%3A0x3b86a376ef9a0a98!2sKeizersgracht%20520%2C%201017%20EK%20Amsterdam!5e0!3m2!1sen!2snl!4v1647355453979!5m2!1sen!2snl" */
            /*  src="https://www.google.com/maps/place/Lekki,+Lagos/@6.5115619,3.6100865,11z/data=!3m1!4b1!4m6!3m5!1s0x103bf75df5c74367:0x6a7e7df9d6c1cd4a!8m2!3d6.4330474!4d3.4821942!16s%2Fm%2F012fxlwm?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D" */
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.94670077497!2d3.455233!3d6.44736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d6e5f3e8b7%3A0x9f0e0d4e3f8c1a57!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
