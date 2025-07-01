import { useRef, useEffect, useState } from 'react';

import { SkillsSection } from "../components/SkillsSection";
import { HeroUpdate } from "../components/HeroUpdate";
import { NavUpdate } from '../components/Nav/NavUpdate';
import { ProfileUpdate } from '../components/AboutUpdate';
import { FooterUpdate } from '../components/FooterUpdate';

import { ProjectsUpdate } from '../components/FeaturedUpdate';


export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projects = useRef();
  const skills = useRef();
  const snapshot = useRef();

  useEffect(() => {
    const sections = [intro, projects, skills, snapshot];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    if (intro.current && intro.current instanceof Element) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavUpdate />
      <main>
        <HeroUpdate
          id="intro"
          sectionRef={intro}
          scrollIndicatorHidden={scrollIndicatorHidden}
          visible={visibleSections.includes(intro.current)}
        />
        <ProjectsUpdate
          id="projects"
          sectionRef={projects}
          visible={visibleSections.includes(projects.current)}
        />
        <ProfileUpdate
          id="profile"
          sectionRef={snapshot}
          visible={visibleSections.includes(snapshot.current)}
        />
        <SkillsSection
          id="skills"
          sectionRef={skills}
          visible={visibleSections.includes(skills.current)} />

      </main>
      <FooterUpdate />
    </div>
  );
};
