import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project1 from "./views/Project1";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
