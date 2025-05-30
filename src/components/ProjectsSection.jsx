
import MUL2 from '/projects/MUL2_Landscape.png';
import KHC from '/projects/KH_Landscape.png';
import BLS from '/projects/BLS_Landscape.png';
import Bud from '/projects/Bud_Landscape.png';

const projects = [
  {
    id: 1,
    title: "Find Your Flavor",
    description: "Campaign launch of Bud Light's Seltzer Extension",
    image: BLS,
    tags: ["Campaign", "360", "Multicultural"],
    demoUrl: "/projects/bls-flavor",
  },
  {
    id: 2,
    title: "Digital Revolution",
    description:
      "Design digital product suite as part of KHC's digital revolution.",
    image: KHC,
    tags: ["Digital", "Identity", "Design"],
    demoUrl: "/projects/khc-digital",
  },
  {
    id: 3,
    title: "Be A King",
    description:
      "Regional launch of multicultural Be A King campaign.",
    image: Bud,
    tags: ["OOH", "Experiential", "Design"],
    demoUrl: "/projects/bud-king",
  },
  {
    id: 4,
    title: "Look of the Leader",
    description:
      "Enhance the premium aesthetic of Michelob Ultra for trade.",
    image: MUL2,
    tags: ["OOH", "Experiential", "Design"],
    demoUrl: "/projects/mul-leader",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some of my most impactful projects. Each project included working with global brands and
          high-performing teams with an emphasis on design excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project, id) => (
            <a key={id} href={project.demoUrl}>
              <div
                key={id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.tags.map((tag) => (
                      // eslint-disable-next-line react/jsx-key
                      <span className=" px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
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


      </div>
    </section>
  );
};
