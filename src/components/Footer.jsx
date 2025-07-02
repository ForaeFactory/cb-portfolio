import { ArrowLeft } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-10 bg-card relative border-t border-border mt-12 mx-auto pt-8 flex flex-wrap justify-around items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} ForaeFactory.com All rights reserved.
      </p>
      <a
        href="/#projects"
        className="flex p-2 rounded-full items-center bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowLeft size={25} />
        <p className="mx-3">Return to Projects</p>

      </a>
    </footer>
  );
};
