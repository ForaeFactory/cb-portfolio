import ReactPlayer from "react-player";
import { ArrowDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProjectFeature } from "./ProjectFeature";
import BUD from '/projects/BUD/Bud_Cover.png';
import BUD_Overview from '/projects/BUD/Bud_Case-Overview.png';
import BUD_Profile from '/projects/BUD/Bud_Case-Profile.png';
import BUD_Situation from '/projects/BUD/Bud_Case-Situation.png';
import BUD_Research from '/projects/BUD/Bud_Case-Research.png';
import BUD_Approach1 from '/projects/BUD/Bud_Case-Approach1.png';
import BUD_Approach2 from '/projects/BUD/Bud_Case-Approach2.png';
import BUD_Approach3 from '/projects/BUD/Bud_Case-Approach3.png';
import BUD_Results1 from '/projects/BUD/Bud_Case-Results1.png';
import BUD_Results2 from '/projects/BUD/Bud_Case-Results2.png';
import BUD_Close from '/projects/BUD/Bud_Case-Close.png';

const casePages = [
    {
        id: 2,
        description: "Project Overview: Summary",
        image: BUD_Overview
    },
    {
        id: 3,
        description: "Company Profile: Category & Consumers",
        image: BUD_Profile
    },
    {
        id: 4,
        description: "The Situation: Core Challenges",
        image: BUD_Situation
    },
    {
        id: 5,
        description: "Research: Data Points Given & Key Discoveries",
        image: BUD_Research
    },
    {
        id: 6,
        description: "My Approach: Objectives",
        image: BUD_Approach1
    },
    {
        id: 7,
        description: "My Approach: Democratize Brand Assets & Information",
        image: BUD_Approach2
    },
    {
        id: 8,
        description: "My Approach: Simplify Trrade Visuals & Processes",
        image: BUD_Approach3
    },
    {
        id: 9,
        description: "Results: Brand Growth",
        image: BUD_Results1
    },
    {
        id: 10,
        description: "Results: Continued Success",
        image: BUD_Results2
    },
    {
        id: 10,
        description: "Michelob Ultra",
        image: BUD_Close
    },
];


export const BUDProject = () => {
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
                                src={BUD}
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
                            <div className="container max-w-6xl h-auto my-25 mx-auto text-center rounded-xl z-10">
                                <ReactPlayer light={<img src='./BUD/Bud_thumbnail.png' alt='Budweiser: Be a King' />} url="https://www.youtube.com/watch?v=LZROLpYs6ug&t=1s" width="100%" height="720px" control='true' muted />
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                            <ArrowDown className="h-5 w-5 text-primary" />
                        </div>
                    </section>


                </main>
                <ProjectFeature brand={'bud'} />

                {/* Footer */}
                <Footer />
            </div>

        </>
    );
};
