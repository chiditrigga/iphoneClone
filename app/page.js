"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { Compare } from "@/components/ui/compare";
import Navbar from "@/components/ui/navbar";
import NavbarSmall from "@/components/ui/navbarSmall";
import Closerlook from "@/components/ui/closerlook";
import Hero from "@/components/ui/hero";

import ProcessorA from "@/components/ui/processorA";


import { FloatingDock } from "@/components/ui/floating-dock";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { LampContainer } from "@/components/ui/lamp";



export default function ThreeDCardDemo() {



 
  return (
    <>
    <div className="hidden md:block">
      <Navbar/>
    </div>
    <div className=" md:hidden">
      <NavbarSmall/>
    </div>

  
    <Hero />

<Closerlook />

<ProcessorA />

    {/* <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
    <Compare
      firstImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRT-eUIe-o4YONQ71GoqGt8Zn84vfwNM3giP5OAcPfTvQJoGHwQLxD7pKiEZ9a82ziNaDLHh3blJIc0B4m1Pvw9Zd-dbAg9-iZAIO3Qk"
      secondImage="https://i.scdn.co/image/364d6dfc4b762b452702539e28e0021558c7a7b6"
      firstImageClassName="object-cover object-left-top"
      secondImageClassname="object-cover object-left-top"
      className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
      slideMode="hover"
    />
  </div>

 

      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer> */}

   
  </>
  );
}

