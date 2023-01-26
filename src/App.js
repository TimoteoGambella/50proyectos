import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Project1 from "./views/Project1";
import Project2 from "./views/Project2";
import Project3 from "./views/Project3";
import Project3b from "./views/Project3b";
import Project4 from "./views/Project4";
import Project4b from "./views/Project4b";

function App() {
  const [dirUrl,setDirUrl]=useState("home")

  return (
    <>
      <Router>
        {dirUrl!=="project3"&&<Navbar/>}
        <Routes>
          <Route path="/" element={<Home setDirUrl={setDirUrl}/>} />
          <Route path="/project1" element={<Project1 setDirUrl={setDirUrl}/>} />
          <Route path="/project2" element={<Project2 setDirUrl={setDirUrl}/>} />
          <Route path="/project3a" element={<Project3 setDirUrl={setDirUrl}/>} />
          <Route path="/project3b" element={<Project3b setDirUrl={setDirUrl}/>} />
          <Route path="/project4" element={<Project4 setDirUrl={setDirUrl}/>} />
          <Route path="/project4b" element={<Project4b setDirUrl={setDirUrl}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
