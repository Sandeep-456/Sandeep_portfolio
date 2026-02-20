import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Layout from "./ui/Layout";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* Main Layout containing Profile and the Nav Card */}
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>

      {/* Separate route for project details */}
      <Route path="project/:id" element={<ProjectDetails />} />

      {/* Error Handling */}
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
