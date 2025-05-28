import { ArrowDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProjectFeature } from "./ProjectFeature";
import MUL from '/projects/MUL/MUL_Cover.png';
import MUL_Overview from '/projects/MUL/MUL_Case-Overview.png';
import MUL_Profile from '/projects/MUL/MUL_Case-Profile.png';
import MUL_Situation from '/projects/MUL/MUL_Case-Situation.png';
import MUL_Research from '/projects/MUL/MUL_Case-Research.png';
import MUL_Approach1 from '/projects/MUL/MUL_Case-Approach1.png';
import MUL_Approach2 from '/projects/MUL/MUL_Case-Approach2.png';
import MUL_Approach3 from '/projects/MUL/MUL_Case-Approach3.png';
import MUL_Results1 from '/projects/MUL/MUL_Case-Results1.png';
import MUL_Results2 from '/projects/MUL/MUL_Case-Results2.png';
import MUL_Close from '/projects/MUL/MUL_Case-Close.png';

const casePages = [
    {
        id: 2,
        description: "Project Overview: Summary",
        image: MUL_Overview
    },
    {
        id: 3,
        description: "Company Profile: Category & Consumers",
        image: MUL_Profile
    },
    {
        id: 4,
        description: "The Situation: Core Challenges",
        image: MUL_Situation
    },
    {
        id: 5,
        description: "Research: Data Points Given & Key Discoveries",
        image: MUL_Research
    },
    {
        id: 6,
        description: "My Approach: Objectives",
        image: MUL_Approach1
    },
    {
        id: 7,
        description: "My Approach: Democratize Brand Assets & Information",
        image: MUL_Approach2
    },
    {
        id: 8,
        description: "My Approach: Simplify Trrade Visuals & Processes",
        image: MUL_Approach3
    },
    {
        id: 9,
        description: "Results: Brand Growth",
        image: MUL_Results1
    },
    {
        id: 10,
        description: "Results: Continued Success",
        image: MUL_Results2
    },
    {
        id: 10,
        description: "Michelob Ultra",
        image: MUL_Close
    },
];


export const MULProject = () => {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                {/* Navbar */}
                <Navbar />
                {/* Main Content */}
                <main>
                    <section
                        id="hero"
                        className="relative min-h-screen flex flex-col items-center justify-center px-4"
                    >
                        <div className="container max-w-screen mx-auto text-center z-10">
                            <img
                                src={MUL}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </section>
                    <section>
                        <div>
                            {casePages.map((project, key) => (
                                <div
                                    key={key}
                                    className="container max-w-screen my-30 mx-auto text-center z-10"
                                >
                                    <div className="h-auto m-10 overflow-hidden rounded-xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
                                        />
                                    </div>
                                </div>))}
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
