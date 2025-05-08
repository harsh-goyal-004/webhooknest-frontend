import { motion } from "framer-motion";
import React from "react";

function Footer() {
  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        className="h-18 bg-black flex justify-center items-center fixed md:static w-full bottom-0"
      >
        <div className="flex items-center gap-5">
          <a href="http://github.com/harsh-goyal-004" target="_blank">
            <img
              src="/github-logo.png"
              alt="GitHub"
              loading="lazy"
              className="w-[40px]"
            />
          </a>
          <span className="text-white font-medium text-lg">
            Made with ❤️ by Harsh Goyal
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;
