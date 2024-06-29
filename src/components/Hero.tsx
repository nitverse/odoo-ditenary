import React from "react";
import GridLayout from "./GridLayout";
import { Button } from "./ui/button";
import { ContainerScroll } from "./ui/container-scroll-animation";

const Hero = () => {
  return (
    <GridLayout>
      <div
        className={
          "container h-[65rem] flex flex-col justify-start items-center"
        }
      >
        <h2 className="text-4xl sm:text-7xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pt-8 pb-6">
          Eat Right, <br /> Feel Bright
        </h2>
        <p className="text-zinc-300 mb-8 md:w-[40%] text-center z-50">
          Discover a healthier you with personalized meal planning tailored to
          your lifestyle and dietary needs
        </p>
        <div className="flex">
          <Button className="z-50 mx-4">Get Started</Button>
          <Button
            className="z-50 mx-4 bg-transparent text-white"
            variant="outline"
          >
            Get Diet Plan
          </Button>
        </div>

        <ContainerScroll />

        {/* <div className="bg-red-700 h-[20rem] w-[30rem]"></div> */}
      </div>
    </GridLayout>
  );
};

export default Hero;