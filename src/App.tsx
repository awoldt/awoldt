import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/projects' element={<Projects />}/>
    </Routes>
  );
}

export default App;
