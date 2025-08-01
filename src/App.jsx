import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState, useContext, createContext } from 'react';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { BLSUpdate } from "./components/BLSUpdate";

import { BUDUpdate } from "./components/BUDUpdate";
import { UltraUpdate } from "./components/UltraUpdate";
import { KHUpdate } from "./components/KHCUpdate";
// import { ProjectsUpdate } from "./components/FeaturedUpdate";
import { ContactUpdate } from "./components/ContactUpdate";

import { NavUpdate } from "./components/Nav/NavUpdate";
import { Queue } from "./components/Queue";
import { Bewell } from "./components/BeWell";
// import { Showcase } from "./components/Showcase";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <NavUpdate />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/#projects" element={<Showcase />} /> */}
          <Route path="/connect" element={<ContactUpdate />} />
          <Route path="/projects/ultra-leader" element={<UltraUpdate />} />
          <Route path="/projects/kh-digital" element={<KHUpdate />} />
          <Route path="/projects/bls-flavor" element={<BLSUpdate />} />
          <Route path="/projects/bud-king" element={<BUDUpdate />} />
          <Route path="/projects/queue" element={<Queue />} />
          <Route path="/projects/bewell" element={<Bewell />} />
          {/* <Route path="/testing" element={<Showcase />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
