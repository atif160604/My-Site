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

function App() {
  
  return (
    //TODO: make the compoenents work with the DATA by using prop drilling, which will dynamically render componenets
    <>
    <h1>Hello world</h1>
    <NavBar />
    <Skill skills={SKILL} />
    <section>
      <Intro />
    </section>
    <section>
      <AboutMe/>
    </section>
    <section>
      {DATA.map((project) =>  (
      <div className='project-center'>
        <div className="project" style={{
        width:"75%"
        }}>
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
    </>
  );
}

const DATA = [
  {projectName: "PacmanDQN", description: "We created a Pacman AI", image: pacman ,tech: ["Python", "Pytorch", "RL", "DQN", "OpenAIGymnasium"]},
  {projectName: "PacmanDQN", description: "We created a Pacman AI", image: pacman ,tech: ["Python", "Pytorch", "RL", "DQN", "OpenAIGymnasium"]}
]
const SKILL = [
  {skillName: "postgres", src: postgres},
  {skillName: "postgres", src: postgres}
]
export default App;
