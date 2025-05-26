import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Vision
  { name: "Campaign Direction", level: 90, category: "vision" },
  { name: "Multichannel Strategy", level: 80, category: "vision" },
  { name: "Storytelling", level: 95, category: "vision" },
  { name: "Brand Positioning", level: 85, category: "vision" },
  { name: "Concept Development", level: 90, category: "vision" },

  // Execution
  { name: "UX/UI Principles", level: 85, category: "execution" },
  { name: "Branding", level: 90, category: "execution" },
  { name: "Responsive Design", level: 80, category: "execution" },
  { name: "Front End Development", level: 65, category: "execution" },
  { name: "Digital & Print", level: 85, category: "execution" },
  { name: "Experiential", level: 70, category: "execution" },

  // Leadership
  { name: "Collaboration", level: 90, category: "leadership" },
  { name: "Stakeholder Presentations", level: 85, category: "leadership" },
  { name: "Project Management", level: 85, category: "leadership" },
  { name: "Team-Building", level: 90, category: "leadership" },

  // Tools
  { name: "Adobe Creative Suite", level: 95, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Asana", level: 90, category: "tools" },
  { name: "HTML/CSS", level: 80, category: "tools" },
  { name: "JavaScript", level: 75, category: "tools" },
  { name: "React", level: 70, category: "tools" },
];

const categories = ["all", "vision", "execution", "leadership", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("vision");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
