import Description from "./Description";
import Tech from "./Tech";
import "../../styles/Project.css"


export default function Project({projectName, description, image, tech}) {

    return (
        <div className="container">
            <div>
                <Description project={projectName} des={description}/>
                <Tech stack={tech}/>
            </div>
            <div className="image-padding" >
               <img src={image} width="400" height="400" alt="pacman" className="right"/> 
            </div>
        </div>
    );
}