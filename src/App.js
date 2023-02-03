import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Project1 from "./views/Project1";
import Project10 from "./views/Project10";
import Project11 from "./views/Project11";
import Project2 from "./views/Project2";
import Project3 from "./views/Project3";
import Project3b from "./views/Project3b";
import Project4 from "./views/Project4";
import Project4b from "./views/Project4b";
import Project5 from "./views/Project5";
import Project6 from "./views/Project6";
import Project7 from "./views/Project7";
import Project8 from "./views/Project8";
import Project9 from "./views/Project9";

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
          <Route path="/project5" element={<Project5 setDirUrl={setDirUrl}/>} />
          <Route path="/project6" element={<Project6 setDirUrl={setDirUrl}/>} />
          <Route path="/project7" element={<Project7 setDirUrl={setDirUrl}/>} />
          <Route path="/project8" element={<Project8 setDirUrl={setDirUrl}/>} />
          <Route path="/project9" element={<Project9 setDirUrl={setDirUrl}/>} />
          <Route path="/project10" element={<Project10 setDirUrl={setDirUrl}/>} />
          <Route path="/project11" element={<Project11 setDirUrl={setDirUrl}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
