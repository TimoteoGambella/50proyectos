import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Project1 from "./views/Project1";
import Project10 from "./views/Project10";
import Project11 from "./views/Project11";
import Project12 from "./views/Project12";
import Project13 from "./views/Project13";
import Project14 from "./views/Project14";
import Project15 from "./views/Project15";
import Project16 from "./views/Project16";
import Project17 from "./views/Project17";
import Project18 from "./views/Project18";
import Project19 from "./views/Project19";
import Project2 from "./views/Project2";
import Project20 from "./views/Project20";
import Project21 from "./views/Project21";
import Project22 from "./views/Project22";
import Project23 from "./views/Project23";
import Project24 from "./views/Project24";
import Project25 from "./views/Project25";
import Project26 from "./views/Project26";
import Project27 from "./views/Project27";
import Project28 from "./views/Project28";
import Project29 from "./views/Project29";
import Project3 from "./views/Project3";
import Project30 from "./views/Project30";
import Project31 from "./views/Project31";
import Project32 from "./views/Project32";
import Project33 from "./views/Project33";
import Project34 from "./views/Project34";
import Project35 from "./views/Project35";
import Project36 from "./views/Project36";
import Project37 from "./views/Project37";
import Project38 from "./views/Project38";
import Project39 from "./views/Project39";
import Project3b from "./views/Project3b";
import Project4 from "./views/Project4";
import Project40 from "./views/Project40";
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
          <Route path="/project12" element={<Project12 setDirUrl={setDirUrl}/>} />
          <Route path="/project13" element={<Project13 setDirUrl={setDirUrl}/>} />
          <Route path="/project14" element={<Project14 setDirUrl={setDirUrl}/>} />
          <Route path="/project15" element={<Project15 setDirUrl={setDirUrl}/>} />
          <Route path="/project16" element={<Project16 setDirUrl={setDirUrl}/>} />
          <Route path="/project17" element={<Project17 setDirUrl={setDirUrl}/>} />
          <Route path="/project18" element={<Project18 setDirUrl={setDirUrl}/>} />
          <Route path="/project19" element={<Project19 setDirUrl={setDirUrl}/>} />
          <Route path="/project20" element={<Project20 setDirUrl={setDirUrl}/>} />
          <Route path="/project21" element={<Project21 setDirUrl={setDirUrl}/>} />
          <Route path="/project22" element={<Project22 setDirUrl={setDirUrl}/>} />
          <Route path="/project23" element={<Project23 setDirUrl={setDirUrl}/>} />
          <Route path="/project24" element={<Project24 setDirUrl={setDirUrl}/>} />
          <Route path="/project25" element={<Project25 setDirUrl={setDirUrl}/>} />
          <Route path="/project26" element={<Project26 setDirUrl={setDirUrl}/>} />
          <Route path="/project27" element={<Project27 setDirUrl={setDirUrl}/>} />
          <Route path="/project28" element={<Project28 setDirUrl={setDirUrl}/>} />
          <Route path="/project29" element={<Project29 setDirUrl={setDirUrl}/>} />
          <Route path="/project30" element={<Project30 setDirUrl={setDirUrl}/>} />
          <Route path="/project31" element={<Project31 setDirUrl={setDirUrl}/>} />
          <Route path="/project32" element={<Project32 setDirUrl={setDirUrl}/>} />
          <Route path="/project33" element={<Project33 setDirUrl={setDirUrl}/>} />
          <Route path="/project34" element={<Project34 setDirUrl={setDirUrl}/>} />
          <Route path="/project35" element={<Project35 setDirUrl={setDirUrl}/>} />
          <Route path="/project36" element={<Project36 setDirUrl={setDirUrl}/>} />
          <Route path="/project37" element={<Project37 setDirUrl={setDirUrl}/>} />
          <Route path="/project38" element={<Project38 setDirUrl={setDirUrl}/>} />
          <Route path="/project39" element={<Project39 setDirUrl={setDirUrl}/>} />
          <Route path="/project40" element={<Project40 setDirUrl={setDirUrl}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
