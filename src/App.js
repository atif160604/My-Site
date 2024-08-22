import logo from './logo.svg';
import './App.css';
import './Components/Projects/Tech'
import Project from './Components/Projects/Project';
import './styles/Project.css'

function App() {
  return (
    <>
    <h1>Hello world</h1>
    <div className="project" style={{
      width:"95%"
    }}>
      <Project  />
    </div>
    
    </>
  );
}

export default App;
