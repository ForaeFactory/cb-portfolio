/* eslint-disable react/prop-types */
import { useState } from "react";
import { cn } from "../lib/utils";
import { Section } from "./Section";

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

export const SkillsSection = ({ id, visible, sectionRef }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animateKey, setAnimateKey] = useState(0);
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;


  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const filterChange = (newFilter) => {
    setActiveCategory(newFilter)
    setAnimateKey(prevKey => prevKey + 1)
  }

  return (
    <Section
      className="profile"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-regular tracking-wide mb-10 text-center">
          Toolbox
        </h2>
        <hr
          className="my-10 h-px border-t-0 bg-transparent bg-linear-to-r from-white/0 via-white/30 to-transparent" />

        <div className="flex flex-wrap justify-center gap-6 my-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => filterChange(category)}
              className={cn(
                "px-5 py-2 rounded-md text-lg font-regular transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-(--accent) font-medium text-black"
                  : "bg-(--secondary) text-foreground hover:bg-(--secondary)"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-300 ease-in">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-(--card)/30 p-6 rounded-md shadow-md card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-regular text-md"> {skill.name}</h3>
              </div>
              <div className="w-full bg-(--accent)/20 h-2 rounded-full overflow-hidden">
                <div key={animateKey}
                  className="bg-(--accent)/90 h-2 rounded-full origin-left animate-[grow_1s_ease-in-out]"
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
    </Section>
  );
};
