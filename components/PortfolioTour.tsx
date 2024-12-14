/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import { Alignment, driver, Side } from "driver.js";
import "driver.js/dist/driver.css";
import { motion } from "framer-motion";

const steps: {
  element: string;
  popover: {
    align: Alignment;
    side: Side;
    title: string;
    description: string;
  };
}[] = [
  {
    element: "#home",
    popover: {
      title: "Welcome",
      align: "start",
      side: "top",
      description:
        "This is the home section of my portfolio. You can find a brief introduction about me here.",
    },
  },
  {
    element: "#about",
    popover: {
      title: "About",
      align: "start",
      side: "top",
      description:
        "Here you can read more about me and get to know me better. for more info go to the experience page",
    },
  },
  {
    element: "#projects",
    popover: {
      title: "Projects",
      align: "start",
      side: "top",
      description:
        "This section showcases some of my notable projects. Click on each to learn more.",
    },
  },
  {
    element: "#customers",
    popover: {
      title: "Customer",
      align: "start",
      side: "top",
      description:
        "Here you can find a short list of the companies i worked for and visite thier websites if you wish.",
    },
  },
  {
    element: "#services",
    popover: {
      title: "Services",
      align: "start",
      side: "top",
      description:
        "Here you can find a short list of the sevices I am ready to render to you, the first request is 30% discount",
    },
  },
  {
    element: "#skills",
    popover: {
      title: "Skills",
      align: "start",
      side: "top",
      description:
        "Here you can find a short list of the skills I mastered on my journey as a software developer, click to learn more about them.",
    },
  },
  {
    element: ".contact",
    popover: {
      title: "Contact",
      align: "start",
      side: "top",
      description:
        "Feel free to reach out to me using the contact information provided here.",
    },
  },
  {
    element: ".theme-switch",
    popover: {
      title: "Theme Switcher",
      align: "start",
      side: "top",
      description:
        "You can switch between light, dark, and custom themes using this button.",
    },
  },
];

export default function PortfolioTour() {
  const [driverObj, setDriverObj] = useState<any>(null);

  useEffect(() => {
    const driverInstance = driver({
      showProgress: true,
      showButtons: ["next", "previous", "close"],
      steps: steps,
      // allowClose: false,
    });
    setDriverObj(driverInstance);
  }, []);

  const startTour = () => {
    if (driverObj) {
      driverObj.drive();
    }
  };

  return (
    <div className="fixed bottom-4 left-4">
      <motion.div
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.button
          onClick={startTour}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0px 0px 0px rgba(0,0,0,0.2)",
              "0px 0px 20px rgba(0,0,0,0.4)",
              "0px 0px 0px rgba(0,0,0,0.2)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Tour
        </motion.button>
      </motion.div>
    </div>
  );
}
