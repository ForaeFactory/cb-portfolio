import { ArrowDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProjectFeature } from "./ProjectFeature";
import Clients from '/projects/Port/Port_clients.png';
import BearKing from '/projects/Port/Port_bk.png';
import BearKing2 from '/projects/Port/Port_bk2.png';
import BL from '/projects/Port/Port_bl.png';
import BL2 from '/projects/Port/Port_bl2.png';
import CSC from '/projects/Port/Port_csc.png';
import CSC2 from '/projects/Port/Port_csc2.png';
import Ultra from '/projects/Port/Port_mul.png';
import Ultra2 from '/projects/Port/Port_mul2.png';
import Ultra3 from '/projects/Port/Port_mul3.png';
import SXSW from '/projects/Port/Port_sxsw.png';
import SXSW2 from '/projects/Port/Port_sxsw2.png';
import RS from '/projects/Port/Port_rs.png';
import RS2 from '/projects/Port/Port_rs2.png';
import INT from '/projects/Port/Port_in.png';
import INT2 from '/projects/Port/Port_in2.png';
import ExecDeck from '/projects/Port/Port_exec.png';


const casePages = [
    {
        id: 1,
        description: "Clients",
        image: Clients,
    },
    {
        id: 2,
        description: "Bear King Brewery",
        image: BearKing
    },
    {
        id: 3,
        description: "Bear King Brewery Branding",
        image: BearKing2
    },
    {
        id: 4,
        description: "Bud Light",
        image: BL
    },
    {
        id: 5,
        description: "Bud Light Designs",
        image: BL2
    },
    {
        id: 6,
        description: "Columbia, SC",
        image: CSC
    },
    {
        id: 7,
        description: "Columbia, SC Designs",
        image: CSC2
    },
    {
        id: 8,
        description: "Michelob Ultra",
        image: Ultra
    },
    {
        id: 9,
        description: "Michelob Ultra Designs",
        image: Ultra2
    },
    {
        id: 10,
        description: "Michelob Ultra Additional Work",
        image: Ultra3
    },
    {
        id: 11,
        description: "InTell",
        image: INT
    },
    {
        id: 12,
        description: "InTell Designs",
        image: INT2
    },
    {
        id: 13,
        description: "Republic Square",
        image: RS
    },
    {
        id: 14,
        description: "Republic Square Designs",
        image: RS2
    },
    {
        id: 15,
        description: "SXSW",
        image: SXSW
    },
    {
        id: 16,
        description: "SXSW Designs",
        image: SXSW2
    },
    {
        id: 17,
        description: "Executive Presentations",
        image: ExecDeck
    },
];


export const PortProject = () => {
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
                                src={Clients}
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
                <ProjectFeature brand={'port'} />
                {/* Footer */}
                <Footer />
            </div>

        </>
    );
};
