import Description from "./Description";
import Tech from "./Tech";
import pacman from '../../Pacman.jpeg'
import "../../styles/Project.css"


export default function Project() {
    return (
        <>
            <Description project={"PacmanDQN"} des={"Iposlem"}/>
            <Tech stack={"React"}/>
            <img src={pacman} width="200" height="200" alt="pacman" className="right"/>
        </>
    );
}