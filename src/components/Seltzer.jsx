import { ArrowDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProjectFeature } from "./ProjectFeature";
import Cover from '/projects/BLS/BLS_ProjCover.png';
import Overview from '/projects/BLS/BLS_Overview.png';
import Cans from '/projects/BLS/BLS_Fill2.png';
import Billboard from '/projects/BLS/BLS_OOH1.png';
import Trade from '/projects/BLS/BLS_Trade.png';
import HeroImage from '/projects/BLS/BLS_Photos-Fill.png';
import Photography from '/projects/BLS/BLS_Photos2.png';
import Flavors from '/projects/BLS/BLS_Fill1.png';
import Posty from '/projects/BLS/BLS_Posty.png';
import Close from '/projects/BLS/BLS_Close.png';

const casePages = [
    {
        id: 2,
        description: "Bud Light Seltzer Overview",
        image: Overview
    },
    {
        id: 3,
        description: "Bud Light Seltzer Cans",
        image: Cans
    },
    {
        id: 4,
        description: "Bring Some Flavor Billboard",
        image: Billboard
    },
    {
        id: 5,
        description: "Trade Marketing Usage",
        image: Trade
    },
    {
        id: 6,
        description: "Bud Light Seltzer Flavors",
        image: Flavors
    },
    {
        id: 7,
        description: "Photo of young woman winking at camera",
        image: HeroImage
    },
    {
        id: 8,
        description: "Photoshoot of young diverse crowd enjoying Seltzer",
        image: Photography
    },
    {
        id: 9,
        description: "Posty Fest Designs",
        image: Posty
    },
    {
        id: 10,
        description: "Seltzer for the Many Image",
        image: Close
    },
];


export const BLSeltzer = () => {
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
                            <div className="mt-10">
                                <a href="/projects/bls-flavor" className="cosmic-button">
                                    {" "}
                                    View Bud Light Seltzer Case Study
                                </a>
                            </div>
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
