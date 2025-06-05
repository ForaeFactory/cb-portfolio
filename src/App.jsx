import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Projects } from "./pages/Projects";
import { Ultra } from "./components/Ultra";
import { BLSeltzer } from "./components/Seltzer";
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
          <Route path="/projects/ultra" element={<Ultra />} />
          <Route path="/projects/mul-leader" element={<MULProject />} />
          <Route path="/projects/khc-digital" element={<KHCProject />} />
          <Route path="/projects/blseltzer" element={<BLSeltzer />} />
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
