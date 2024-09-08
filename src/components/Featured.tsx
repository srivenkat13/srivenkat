"use client";
import React from "react";
import ProjectData from "../data/projects.json";
import Link from "next/link";
import Image from "next/image";
import { Meteors } from "./ui/meteros";

interface Project {
  id: number;
  title: string;
  description: string;
  uses: string[];
  image: string;
}
export default function Featured() {
  return (
    <div className=" py-6 md:py-12 " id="featured">
      <div>
        <div className="text-center">
          <h2 className=" text-xl md:text-3xl text-teal-500 font-semibold tracking-widest ">
            Featured Projects
          </h2>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {ProjectData.projects.map((project: Project) => (
            <div key={project.id} className="flex justify-center group">
              <div className=" shadow-feature-card flex flex-col rounded-[22px]  dark:bg-transparent overflow-hidden h-full max-w-sm relative">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    height="1000"
                    width="800"
                    className="object-contain rounded-lg  group-hover:scale-105"
                  />
                  <p className="text-xl font-bold sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.uses.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-full border text-neutral-300 px-3 py-2 text-xs leading-4 dark:bg-zinc-900"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Meteors number={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/projects"}>
          <button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
}
