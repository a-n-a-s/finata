import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="bg-gray-800 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl  font-semibold text-white dark:text-black p-4">
                Your Personal AI Financial Advisor <br />
                <span className="text-4xl md:text-[6rem] text-teal-500 font-bold mt-1 leading-none">
                  Finata
                </span>
              </h1>
            </>
          }
        >
          <Image
             src={`/d1.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            
          />
        </ContainerScroll>
      </div>
      <div classname="flex flex-col items-center justify-center overflow-hidden mx-auto ">
        <h1 className="text-6xl text-center font-semibold text-white dark:text-black p-4">Our Project</h1>
        <Image  src = {'/image.png'} width={400} height={400} className="mx-auto my-10"/>
      </div>
    </section>
  );
}

export default Hero;