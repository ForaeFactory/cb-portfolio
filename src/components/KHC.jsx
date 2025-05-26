import { ArrowDown } from "lucide-react";
import KH from '/public/projects/KH/KH_Cover.png';
import KH_Overview from '/public/projects/KH/KH_Overview.png';
import KH_Profile from '/public/projects/KH/KH_Profile.png';
import KH_Situation from '/public/projects/KH/KH_Situation.png';
import KH_Research from '/public/projects/KH/KH_Research.png';
import KH_Research2 from '/public/projects/KH/KH_Research2.png';
import KH_Approach1 from '/public/projects/KH/KH_Approach.png';
import KH_Approach2 from '/public/projects/KH/KH_Approach1.png';
import KH_Approach3 from '/public/projects/KH/KH_Approach2.png';
import KH_Results1 from '/public/projects/KH/KH_Results1.png';
import KH_Results2 from '/public/projects/KH/KH_Results2.png';
import KH_Results3 from '/public/projects/KH/KH_Results3.png';

const casePages = [
    {
        id: 1,
        description: "Project Overview: Digital Revolution",
        image: KH_Overview
    },
    {
        id: 2,
        description: "Company Profile: Background & The Digital Future",
        image: KH_Profile
    },
    {
        id: 3,
        description: "The Situation: Core Challenges and Primary Goal",
        image: KH_Situation
    },
    {
        id: 4,
        description: "Research: Digital Product Identities",
        image: KH_Research
    },
    {
        id: 5,
        description: "Research: User Pain Points",
        image: KH_Research2
    },
    {
        id: 6,
        description: "My Approach: Design",
        image: KH_Approach1
    },
    {
        id: 7,
        description: "My Approach: Naming Criteria",
        image: KH_Approach2
    },
    {
        id: 8,
        description: "My Approach: Naming",
        image: KH_Approach3
    },
    {
        id: 9,
        description: "Results: Re-Designed Digital Suite",
        image: KH_Results1
    },
    {
        id: 10,
        description: "Results: Symbol Lock-Ups",
        image: KH_Results2
    },
    {
        id: 11,
        description: "Results: Meet the Jetsons",
        image: KH_Results3
    },
];


export const KHWork = () => {
    return (
        <>
            <section
                id="hero"
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                <div className="container max-w-7xl mx-auto text-center z-10">
                    <img
                        src={KH}
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