import ProjectList from "./components/ProjectList";
import pictureMichael from './images/picture-michael.png'


function App() {
  return ( 
  <>
  <div className="container">
    <div className="header">
      <div className="speech-bubble">
        <h1>Hi, I'm Michael nice to meet you</h1>
        <h2>This is my Portfolio App</h2>
      </div>
      <img className='image-michael' src={pictureMichael} alt="Picture of myself" />
    </div>
    
    <h3>Projects:</h3>
    <ProjectList></ProjectList>
  </div>
  </>
  );
}

export default App;