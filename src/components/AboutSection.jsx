import { SignpostBig, BookOpen, Puzzle } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Visionary Creative & Passionate Leader
            </h3>

            <p className="text-muted-foreground">
              Over the past 15 years, I’ve helped brands shape their voice,
              and bring ideas to life across screens, spaces, and experiences.
              From public speaking to leading creative for national campaigns,
              I’ve worn many hats—that flexibility has made me a empathetic
              collaborator and leader.
            </p>

            <p className="text-muted-foreground">
              I specialize in brand strategy, storytelling and creative leadership.
              I’m a self-taught designer who learned by doing—by
              saying yes to challenges, overcoming obstacles and adapting to
              an ever-changing landscape. This path built more than
              technical skill; it built creative resilience, critical thinking,
              and a deep understanding of how to turn ideas into results.
            </p>

            <p className="text-muted-foreground">
              Whether you need someone who can zoom out and analyze the big picture
              or dive in and get their hands dirty, I’m excited and equipped to do both—with skill, clarity, and passion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Brand Strategy</h4>
                  <p className="text-muted-foreground">
                    Craft clear, compelling brand strategies that align business goals with cultural relevance and audience insight.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Storytelling</h4>
                  <p className="text-muted-foreground">
                    Transform ideas into impactful stories that connect with audiences, elevate brands, and drive engagement across platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <SignpostBig className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Creative Leadership</h4>
                  <p className="text-muted-foreground">
                    Lead with vision and empathy to inspire teams, elevate ideas, and deliver bold, effective creative work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
