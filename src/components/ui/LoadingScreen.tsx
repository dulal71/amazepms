"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import loadingAnimation from "@/../public/lottie/loading.json";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
              <Lottie
                lottieRef={lottieRef}
                animationData={loadingAnimation}
                loop
                autoplay
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                AmazePMS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-sm font-medium tracking-wide text-slate-500 sm:text-base"
              >
                Loading
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ...
                </motion.span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
