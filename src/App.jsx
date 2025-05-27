import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Projects } from "./pages/Projects";
import { MULProject } from "./components/MUL";
import { KHCProject } from "./components/KHC";
import { BLSProject } from "./components/BLS";
import { BUDProject } from "./components/BUD";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#projects" element={<Projects />} />
          <Route path="/projects/mul-leader" element={<MULProject />} />
          <Route path="/projects/khc-digital" element={<KHCProject />} />
          <Route path="/projects/bls-flavor" element={<BLSProject />} />
          <Route path="/projects/bud-king" element={<BUDProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
