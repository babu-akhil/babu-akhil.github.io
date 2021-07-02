import './App.css';
import Navbar from './Navbar'
import Links from './Links';
import Typewriter from 'typewriter-effect'

function Intro() {
let interests = [ "<span style = 'color: #99d3ff'>programming</span>", 
                  "<span style = 'color: #6b94b3'>mathematics</span>",
                  "<span style = 'color: #008000'>machine learning", 
                  "<span style = 'color: #008000'>music", 
                  "<span style = 'color: #ffb300'>web development"].map((string) => {return(string+'.')})
  return(
    <div className = 'intro'>
      <div className = 'text'>
      Hi, I'm Akhil. <br></br>
      I like to build things. <br></br>
      I am interested in <br></br><Typewriter options = {{strings: interests, autoStart: true, loop: true, wrapperClassName: 'typewriter', pauseFor: 1000}} /> <br></br>
      </div>
    </div>
  )
}


function IntroComponent() {
  return (
    <div className="IntroContainer">
      <Links />
      <div className = "Intro">
        <Navbar />
        <Intro />
      </div>
    </div>
  );
}

export default IntroComponent;
