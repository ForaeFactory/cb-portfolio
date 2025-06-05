
import MUL2 from '/projects/MUL2_Landscape.png';
import KHC from '/projects/KH_Landscape.png';
import BLS from '/projects/BLS_Landscape.png';
import Bud from '/projects/Bud_Landscape.png';

const projects = [
    {
        id: 1,
        brand: "bls",
        title: "Bring Your Flavor",
        description: "Campaign launch of Bud Light's Seltzer Extension",
        image: BLS,
        tags: ["Campaign", "360", "Multicultural"],
        demoUrl: "/projects/blseltzer",
    },
    {
        id: 2,
        brand: "khc",
        title: "Digital Revolution",
        description:
            "Digital product suite as part of KHC's digital revolution.",
        image: KHC,
        tags: ["Digital", "Identity", "Design"],
        demoUrl: "/projects/khc-digital",
    },
    {
        id: 3,
        brand: "bud",
        title: "Be A King",
        description:
            "Regional launch of multicultural Be A King campaign.",
        image: Bud,
        tags: ["OOH", "Experiential", "Design"],
        demoUrl: "/projects/bud-king",
    },
    {
        id: 4,
        brand: "mul",
        title: "Look of the Leader",
        description:
            "Enhance the premium aesthetic of Michelob Ultra for trade.",
        image: MUL2,
        tags: ["OOH", "Trade", "Design"],
        demoUrl: "/projects/ultra"
    },
];


export const ProjectFeature = (brand) => {
    const activeBrand = brand;

    const filteredProjects = projects.filter(
        (proj) => proj.brand !== activeBrand.brand
    );

    return (
        <section id="projects" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="pt-10 pb-15 text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Other Projects & <span className="text-primary"> Case Studies </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, id) => (
                        <a key={id} href={project.demoUrl}>
                            <div

                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, id) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <span key={id} className="mx-auto px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">

                </div>
            </div>
        </section>
    );
};


