import { ArrowDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProjectFeature } from "./ProjectFeature";
import Cover from '/projects/MUL/Cover.png';
import Overview from '/projects/MUL/Overview.png';
import Bottle from '/projects/MUL/Bottle1.png';
import Bottle2 from '/projects/MUL/Bottle2.png';
import OOH from '/projects/MUL/OOH.png';
import FitFest from '/projects/MUL/FitFest.png';
import Van from '/projects/MUL/VanWrap.png';
import PGLC from '/projects/MUL/PG-LC.png';
import Photography from '/projects/MUL/Photos.png';
import Apparel from '/projects/MUL/Apparel.png';
import Close from '/projects/MUL/Close.png';

const casePages = [
    {
        id: 2,
        description: "ULTRA Overview",
        image: Overview
    },
    {
        id: 3,
        description: "Bottle Redesign",
        image: Bottle
    },
    {
        id: 4,
        description: "Redesign Usage",
        image: Bottle2
    },
    {
        id: 5,
        description: "Consumer Photography",
        image: Photography
    },
    {
        id: 6,
        description: "OOH Examples",
        image: OOH
    },
    {
        id: 7,
        description: "Apparel Designs",
        image: Apparel
    },
    {
        id: 8,
        description: "New Van Wrap Design",
        image: Van
    },
    {
        id: 9,
        description: "FitFest Event Activation",
        image: FitFest
    },
    {
        id: 10,
        description: "ULTRA Extension Products",
        image: PGLC
    },
    {
        id: 10,
        description: "Michelob Ultra",
        image: Close
    },
];


export const Ultra = () => {
    return (
        <>
            <div className="min-h-screen min-w-screen bg-background2 text-foreground overflow-x-hidden">
                {/* Navbar */}
                <Navbar />
                {/* Main Content */}
                <main>
                    <section
                        id="hero"
                        className="relative min-h-screen flex flex-col items-center justify-center"
                    >
                        <div className="container max-w-screen mx-auto text-center z-10">
                            <img
                                src={Cover}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </section>
                    <section>
                        <div>
                            {casePages.map((project, key) => (
                                <div
                                    key={key}
                                    className="container max-w-screen my-10 mx-auto text-center z-10"
                                >
                                    <div className="h-auto overflow-hidden rounded-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
                                        />
                                    </div>
                                </div>))}
                            <div className="mt-15">
                                <a href="/projects/mul-leader" className="cosmic-button">
                                    {" "}
                                    View Michelob Ultra Case Study
                                </a>
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                            <ArrowDown className="h-5 w-5 text-primary" />
                        </div>
                    </section>
                </main>
                <ProjectFeature brand={'mul'} />
                {/* Footer */}
                <Footer />
            </div>

        </>
    );
};
