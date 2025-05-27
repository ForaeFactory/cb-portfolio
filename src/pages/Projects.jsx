import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MULProject } from "../components/MUL";


export const Projects = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle
            <ThemeToggle />
            {/* Background Effects
            <StarBackground />*/}

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <MULProject />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};