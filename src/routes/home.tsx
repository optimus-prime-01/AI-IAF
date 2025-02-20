"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-react";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-gray-800/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width: `clamp(${width * 0.5}px, ${width * 0.8}px, ${width}px)`,
          height: `clamp(${height * 0.5}px, ${height * 0.8}px, ${height}px)`,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-black/[0.15]",
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function AIBoostHero() {
  const { userId } = useAuth();
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/[0.05] via-transparent to-gray-200/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-gray-200/[0.15]"
          className="left-[-20%] sm:left-[-10%] md:left-[-5%] top-[10%] sm:top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-gray-300/[0.15]"
          className="right-[-10%] sm:right-[-5%] md:right-[0%] top-[65%] sm:top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-gray-100/[0.15]"
          className="left-[0%] sm:left-[5%] md:left-[10%] bottom-[0%] sm:bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-gray-400/[0.15]"
          className="right-[10%] sm:right-[15%] md:right-[20%] top-[5%] sm:top-[10%] md:top-[15%]"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6 mt-[-40px] sm:mt-[-60px] md:mt-[-80px]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible">
            <motion.h1
              style={{
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                background: "linear-gradient(to bottom, #1a1a1a, #333)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "1.1",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              AI Boost
            </motion.h1>

            <motion.h2
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: "bold",
                background: "linear-gradient(to right, #444, #666, #888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: "clamp(5px, 2vw, 10px)",
                lineHeight: "1.2",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Leverage AI to ace interviews
            </motion.h2>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="max-w-xl px-2 mx-auto mt-4 mb-6 text-base font-light leading-relaxed tracking-wide text-gray-600 sm:px-4 sm:mt-6 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
              Boost your interview skills with AI-driven insights. Prepare smarter, practice better, and stand out!
            </p>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <Link to={userId ? "/generate" : "/signin"}>
              <Button
                className="relative px-4 py-2 text-base font-semibold text-white transition-all duration-300 bg-gray-800 rounded-full sm:px-6 sm:py-3 sm:text-lg hover:bg-gray-700"
                style={{
                  boxShadow: "0 0 15px #00ff00, 0 0 30px #00ff00",
                  border: "2px solid #00ff00",
                }}
              >
                {userId ? "Take Interview" : "Get Started"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-white/80" />
    </div>
  );
}
