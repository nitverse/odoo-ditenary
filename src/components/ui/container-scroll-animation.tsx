"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const ContainerScroll = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] w-full md:h-[80rem] flex items-center justify-center absolute p-2 md:p-20 mt-14"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          //   users={users}
        />
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any;
  scale: any;
  translate: any;
}) => {
  const foodItems = [
    {
      name: "Spinach",
      designation: "Rich in Iron",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Salmon",
      designation: "Omega-3 Fats",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Blueberries",
      designation: "High Antioxidants",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Almonds",
      designation: "Good Fats",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Quinoa",
      designation: "Protein Packed",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Avocado",
      designation: "Healthy Fats",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Sweet Potato",
      designation: "Vitamin A",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Greek Yogurt",
      designation: "Rich in Protein",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Garlic",
      designation: "Boosts Immunity",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Lentils",
      designation: "Fiber-Rich",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Broccoli",
      designation: "Vitamin C",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Oats",
      designation: "High Fiber",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Eggs",
      designation: "Protein Rich",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Walnuts",
      designation: "Omega-3 Fats",
      badge: "Healthy",
      image: "",
    },
    {
      name: "Chicken Breast",
      designation: "Lean Protein",
      badge: "Healthy",
      image: "",
    },
  ];
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4">
        {foodItems.map((food, idx: number) => (
          <motion.div
            key={`user-${idx}`}
            className="bg-white rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="absolute text-gray-700 top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
              {food.badge}
            </div>
            <Image
              src={food.image}
              className="rounded-tr-md rounded-tl-md text-sm"
              alt="thumbnail"
              width={170}
              height={170}
            />
            <div className="p-4">
              <h1 className="font-semibold text-sm text-gray-700">
                {food.name}
              </h1>
              <h2 className=" text-xs text-gray-700">{food.designation}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
