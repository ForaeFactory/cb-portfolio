import { SignpostBig, BookOpen, Puzzle } from "lucide-react";
import craigPic from '../assets/profileImageL.png'

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
          In a Nutshell...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl text-left font-semibold">
              The Road Less Traveled
            </h3>

            <p className="text-left text-lg text-muted-foreground">
              For 15 years, I've been the creative force behind bold identities and impactful campaigns
              for everyone from global giants like Bud Light and Kraft Heinz to agile startups and private equity-backed ventures.
              My journey from accounting to launching national ad campaigns and building my own agency has been anything but linear.
              Every step has been driven by a relentless pursuit of meaningful results and creative innovation.
            </p>

            <p className="text-left text-lg text-muted-foreground">
              I'm a firm believer in learning by doing. My self-taught path in design, marketing, and entrepreneurship
              wasn't just about acquiring technical skills; it forged a creative resilience and a knack for turning big
              ideas into tangible outcomes. Whether I'm crafting a brand from scratch, advising on high-stakes creative
              strategy, or storytelling through film and music, I bring a unique blend of <b>vision, empathy, and an unwavering
                commitment to craft.</b> For me, great design is more than just aesthetics—it's strategic, intentional, and
              transformative. Ultimately, I'm here to build things that endure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              {/* <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 p-10">
            <img src={craigPic} className="rounded-2xl" alt='Me looking up like a goofball!' />
          </div>
        </div>
      </div>
    </section>
  );
};
