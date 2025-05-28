import { ArrowDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProjectFeature } from "./ProjectFeature";
import BLS from '/projects/BLS/BLS_Cover.png';
import BLS_Overview from '/projects/BLS/BLS_Case-Overview.png';
import BLS_Profile from '/projects/BLS/BLS_Case-Profile.png';
import BLS_Situation from '/projects/BLS/BLS_Case-Situation.png';
import BLS_Research from '/projects/BLS/BLS_Case-Research.png';
import BLS_Approach1 from '/projects/BLS/BLS_Case-Approach1.png';
import BLS_Approach2 from '/projects/BLS/BLS_Case-Approach2.png';
import BLS_Approach3 from '/projects/BLS/BLS_Case-Approach3.png';
import BLS_Results1 from '/projects/BLS/BLS_Case-Results1.png';
import BLS_Results2 from '/projects/BLS/BLS_Case-Results2.png';
import BLS_Close from '/projects/BLS/BLS_Case-Close.png';

const casePages = [
    {
        id: 2,
        description: "Project Overview: Summary",
        image: BLS_Overview
    },
    {
        id: 3,
        description: "Company Profile: Category & Consumers",
        image: BLS_Profile
    },
    {
        id: 4,
        description: "The Situation: Core Challenges",
        image: BLS_Situation
    },
    {
        id: 5,
        description: "Research: Data Points Given & Key Discoveries",
        image: BLS_Research
    },
    {
        id: 6,
        description: "My Approach: Objectives",
        image: BLS_Approach1
    },
    {
        id: 7,
        description: "My Approach: Democratize Brand Assets & Information",
        image: BLS_Approach2
    },
    {
        id: 8,
        description: "My Approach: Simplify Trrade Visuals & Processes",
        image: BLS_Approach3
    },
    {
        id: 9,
        description: "Results: Brand Growth",
        image: BLS_Results1
    },
    {
        id: 10,
        description: "Results: Continued Success",
        image: BLS_Results2
    },
    {
        id: 10,
        description: "Michelob Ultra",
        image: BLS_Close
    },
];


export const BLSProject = () => {
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
                                src={BLS}
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
                <ProjectFeature brand={'bls'} />
                {/* Footer */}
                <Footer />
            </div>

        </>
    );
};
