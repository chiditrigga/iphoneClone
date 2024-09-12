"use client"


import Navbar from "@/components/ui/navbar";
import NavbarSmall from "@/components/ui/navbarSmall";
import Closerlook from "@/components/ui/closerlook";
import Hero from "@/components/ui/hero";

import ProcessorA from "@/components/ui/processorA";

import Acamera from "@/components/ui/Acamera";
import Gigablast from "@/components/ui/Gigablast";
import Battery from "@/components/ui/Battery";
import Card from "@/components/ui/Card";

export default function ThreeDCardDemo() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className=" md:hidden">
        <NavbarSmall />
      </div>

      <Hero />

      <Closerlook />

      <ProcessorA />
      <Acamera />
      <Gigablast />
      <Battery />
      <Card />

   
    </>
  );
}
