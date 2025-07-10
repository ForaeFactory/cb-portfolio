import { BrowserRouter, HydratedRouter, Route, Routes, Scripts, ScrollRestoration } from "react-router-dom";
// import { useState, useContext, createContext } from 'react';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
// import { Projects } from "./pages/Projects";
// import { Ultra } from "./components/Ultra";
// import { BLSeltzer } from "./components/Seltzer";
// import { MULProject } from "./components/MUL";
// import { KHCProject } from "./components/KHC";
// import { BUDProject } from "./components/BUD";
import { BLSUpdate } from "./components/BLSUpdate";

import { BUDUpdate } from "./components/BUDUpdate";
import { UltraUpdate } from "./components/UltraUpdate";
import { KHUpdate } from "./components/KHCUpdate";
import { ProjectsUpdate } from "./components/FeaturedUpdate";
import { ContactUpdate } from "./components/ContactUpdate";
// import { NavUpdate } from "./components/Nav/NavUpdate";
import { ThemeToggle } from "./components/ThemeToggle";
import { NavUpdate } from "./components/Nav/NavUpdate";
import { Queue } from "./components/Queue";
// import { ThemeToggleUpdate } from "./components/ThemeToggleUpdate";


function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>

        <NavUpdate />
        <ThemeToggle />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#projects" element={<ProjectsUpdate />} />
          <Route path="/connect" element={<ContactUpdate />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/projects/ultra-leader" element={<UltraUpdate />} />
          <Route path="/projects/kh-digital" element={<KHUpdate />} />
          <Route path="/projects/bls-flavor" element={<BLSUpdate />} />
          <Route path="/projects/bud-king" element={<BUDUpdate />} />
          <Route path="/projects/testing" element={<Queue />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
