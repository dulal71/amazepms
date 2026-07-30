"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import loadingAnimation from "@/../public/lottie/loading.json";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const ready = () => {
      setFadeOut(true);
      setTimeout(() => setShow(false), 600);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(ready, 800);
      return () => clearTimeout(timer);
    }

    window.addEventListener("load", ready);
    return () => window.removeEventListener("load", ready);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
        >
          <div className="flex flex-col items-center gap-14 sm:gap-16">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
              <Lottie
                lottieRef={lottieRef}
                animationData={loadingAnimation}
                loop
                autoplay
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              AmazePMS
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
