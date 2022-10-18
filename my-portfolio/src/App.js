import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"
import pictureMichael from './images/picture-michael.png';


function App() {
  return ( 
  <>
  <div className="container">
    <div className="header">
      <div className="speech-bubble">
        <h1>Hi, I'm Michael nice to meet you!</h1>
        <h2>Thank you for visiting my portfolio website</h2>
      </div>
      <img className='image-michael' src={pictureMichael} alt="Picture of myself" />
    </div>
    <AboutMe/>
    <Skills/>
    <Projects></Projects>
  </div>
  </>
  );
}

export default App;