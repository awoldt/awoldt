import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
