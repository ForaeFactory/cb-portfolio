import { ArrowDown } from "lucide-react";
import { Intro } from "./Intro";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto text-left z-10">
        <div className="space-y-1">
          <h1 className="text-lg md:text-2xl uppercase h-auto font-medium tracking-[.3em] text-gradient opacity-0 animate-fade-in-delay-1">
            Craig Brooks
          </h1>
          <div className="flex flex-row items-center text-5xl md:text-8xl h-auto font-medium text-gradient opacity-0 animate-fade-in-delay-1">
            <h1 className="leading-tight">
              Creative
            </h1>
            <span className="font-light text-2xl md:text-5xl mr-8 ml-8 leading-tight">
              {"  x  "}
            </span>
            <Intro />
            {/* <span className="flex relative bg-accent">

            </span> */}


          </div>
          <h4 className="my-5 leading-9 w-[65vw] tracking-wide font-light text-xl opacity-0 animate-fade-in-delay-2">
            Strategic and hands-on creator with a passion for design, storytelling, and data-driven problem solving. On a mission to deliver work that connects, performs, and lasts.
          </h4>
          {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-md text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
