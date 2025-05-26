import { ArrowDown } from "lucide-react";
import MUL from '/public/projects/MUL/MUL_Cover.png';
import MUL_Overview from '/public/projects/MUL/MUL_Case-Overview.png';
import MUL_Profile from '/public/projects/MUL/MUL_Case-Profile.png';
import MUL_Situation from '/public/projects/MUL/MUL_Case-Situation.png';
import MUL_Research from '/public/projects/MUL/MUL_Case-Research.png';
import MUL_Approach1 from '/public/projects/MUL/MUL_Case-Approach1.png';
import MUL_Approach2 from '/public/projects/MUL/MUL_Case-Approach2.png';
import MUL_Approach3 from '/public/projects/MUL/MUL_Case-Approach3.png';
import MUL_Results1 from '/public/projects/MUL/MUL_Case-Results1.png';
import MUL_Results2 from '/public/projects/MUL/MUL_Case-Results2.png';
import MUL_Close from '/public/projects/MUL/MUL_Case-Close.png';
import { ProjectFeature } from "./ProjectFeature";

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


export const MULWork = () => {
    return (
        <>
            <section>
                <ProjectFeature />
            </section>
            <section
                id="hero"
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                <div className="container max-w-7xl mx-auto text-center z-10">
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
                            className="container max-w-7xl my-30 mx-auto text-center z-10"
                        >
                            <div className="h-auto m-10 overflow-hidden rounded-xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>))};
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </section>
        </>
    );
};
