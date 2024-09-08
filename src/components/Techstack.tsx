"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiMui,
  SiPrisma,
  SiChakraui,
  SiWebpack,
  SiRedux,
  SiGithubactions,
  SiVercel,
  SiReactrouter,
} from "@icons-pack/react-simple-icons";
const Techstack = () => {
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-dot-white/[0.5] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <h2 className="text-xl md:text-3xl font-bold text-center mb-14 z-10">
        Languages - Libraries - Frameworks - Tools
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards>
            <SiHtml5 className="size-10" />
            <SiCss3 className="size-10" />
            <SiGit className="size-10" />
            <SiReact className="size-10" />
            <SiJavascript className="size-10" />
            <SiTypescript className="size-10" />
            <SiNextdotjs className="size-10" />
            <SiJest className="size-10" />
            <SiRedux className="size-10" />
            <SiReactrouter className="size-10" />
          </InfiniteMovingCards>
          <InfiniteMovingCards direction="right" speed="fast">
            <SiMarkdown className="size-10" />
            <SiGithub className="size-10" />
            <SiVite className="size-10" />
            <SiMui className="size-10" />
            <SiTailwindcss className="size-10" />
            <SiPrisma className="size-10" />
            <SiChakraui className="size-10" />
            <SiWebpack className="size-10" />
            <SiGithubactions className="size-10" />
            <SiVercel className="size-10" />
          </InfiniteMovingCards>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
