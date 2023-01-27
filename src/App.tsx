import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Projects from "./Projects";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
