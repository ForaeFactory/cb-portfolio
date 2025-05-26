import { Navbar } from "../components/Navbar";
import { MULWork } from "../components/MUL";
import { Footer } from "../components/Footer";


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
                <MULWork />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};