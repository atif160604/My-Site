import './App.css';
import './Components/Projects/Tech'
import Project from './Components/Projects/Project';
import './styles/Project.css'
import pacman from './Pacman.jpeg'
import AboutMe from './Components/AboutMe/about';
import Intro from './Components/Intro/intro';
import Skill from './Components/Skill/Skill'
import postgres from "./Postgres.svg"
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact';
import html from './Svg/html.svg'
import java from './Svg/java.svg'
import javascript from './Svg/javascript.svg'
import node from './Svg/node.svg'
import python from './Svg/python.svg'
import react from './Svg/react.svg'
import swift from './Svg/swift.svg'
import css from './Svg/css.svg'
import firebase from './Svg/firebase.svg'
import unity from './Svg/unity.svg'

function App() {
  
  return (
    <>
    <section className='section2 nav-space'>
      <NavBar />
    </section>
    <section>
      <Intro />
    </section>
    <section id='about'>
      <h1 className='title'>About me</h1>
      <AboutMe/>
    </section>
    <section id='projects'>
      <h1 className='title'>Projects</h1>
      {DATA.map((project) =>  (
      <div className='project-center'>
        <div className="project">
          <Project 
            projectName={project.projectName}
            description={project.description}
            image={project.image}
            tech={project.tech}
             />
        </div>
      </div>
      ))}
    </section>
    <section id='skills' className='section3'>
      <h1 className='title'>Skills</h1>
      <Skill skills={SKILL} />
    </section>
    <section id='connect' className='section2'>
      <Contact />
    </section>

    </>
  );
}

const DATA = [
  {projectName: "PacmanDQN", description: "We created a Pacman AI", image: pacman ,tech: ["Python", "Pytorch", "RL", "DQN", "OpenAIGymnasium"]},
  {projectName: "PacmanDQN", description: "We created a Pacman AI", image: pacman ,tech: ["Python", "Pytorch", "RL", "DQN", "OpenAIGymnasium"]}
]
const SKILL = [
  {skillName: "React", src: react},
  {skillName: "Python", src: python},
  {skillName: "Javascript", src: javascript},
  {skillName: "Swift", src: swift},
  {skillName: "Java", src: java},
  {skillName: "Node", src: node},
  {skillName: "HTML", src: html},
  {skillName: "CSS", src: css},
  {skillName: "Postgres", src: postgres},
]
export default App;
