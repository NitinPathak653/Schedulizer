import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import GoalDetail from "./GoalDetail";
import Goals from "./Goals";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/goals/:goalId' element={<GoalDetail />} />
      </Routes>
    </div>
  );
}

export default App;
