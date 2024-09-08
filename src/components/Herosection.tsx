import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { FlipWords } from "./ui/flip-words";
import { MoveUpRight } from "lucide-react";

const Herosection = () => {
  const words = ["ReactJS", "NextJS", "JavaScript"];
  return (
    <div className="h-auto md:h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="h-auto md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-14  md:py-0">
        <Spotlight
          className="top-5 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        {/* //extra blue light */}
        <Spotlight className="left-40 top-0 md:h-auto h-[35vh]" fill="cyan" />

        <div className="realtive p-4 z-10 w-full text-center">
          <h1 className="mt-4 md:mt-0 text-4xl md:text-7xl  font-bold  bg-clip-text text-transparent bg-gradient-to-tr md:bg-gradient-to-b from-neutral-50  ">
            Transforming Ideas into code
          </h1>

          <div className="mt-4 font-normal text-xs md:text-xl text-neutral-300 max-w-lg mx-auto">
            I'm Sri Venkat, a Frontend developer using
            <FlipWords
              words={words}
              duration={2000}
              className="text-neutral-300"
            />
            to craft{" "}
            <span className="font-[777]  bg-gradient-to-b from-neutral-100 md:from-neutral-50 text-transparent bg-clip-text">
              User Interfaces
            </span>
          </div>

          <div className="mt-4">
            <Link href={"https://github.com/srivenkat13"} target="_blank">
              <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                Show me code 
                <span className="ml-1">
                  <MoveUpRight size={18}  />
                </span>
              </Button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
