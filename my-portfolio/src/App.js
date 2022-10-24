//import Projects from "./components/Projects";
//import AboutMe from "./components/AboutMe";
//import Skills from "./components/Skills"
//import pictureMichael from './images/picture-michael.png';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';

function App() {
  return ( 
  <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </>
  );
}

export default App;