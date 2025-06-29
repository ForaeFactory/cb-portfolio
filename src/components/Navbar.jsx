import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";

const navItems = [
  { name: "Home", href: "/", side: "left" },
  { name: "Snapshot", href: "/#about", side: "left" },
  { name: "Toolbox", href: "/#skills" },
  { name: "Projects", href: "#projects", side: "right" },
  { name: "Connect", href: "/#contact", side: "right" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >


      {/* desktop nav */}
      <div className="hidden md:flex justify-around">
        {navItems.map((item, key) => (
          item.side === 'left' &&
          <a
            key={key}
            href={item.href}
            className="text-foreground text-lg font-medium hover:text-primary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
        <a
          className="text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <Monogram />
          </span>
        </a>
        {navItems.map((item, key) => (
          item.side === 'right' &&
          <a
            key={key}
            href={item.href}
            className="text-foreground text-lg font-medium hover:text-primary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}


        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
