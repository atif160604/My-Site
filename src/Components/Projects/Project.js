import Description from "./Description";
import Tech from "./Tech";
import pacman from '../../Pacman.jpeg'
import "../../styles/Project.css"


export default function Project() {

    return (
        <div className="container">
            <div>
                <Description project={"PacmanDQN"} des={"Iposlem"}/>
                <Tech stack={"React"}/>
            </div>
            <div className="image-padding" >
               <img src={pacman} width="400" height="400" alt="pacman" className="right"/> 
            </div>
        </div>
    );
}