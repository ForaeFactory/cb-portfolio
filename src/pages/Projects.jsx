import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BLSUpdate } from "../components/BLSUpdate";


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
                <BLSUpdate />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};