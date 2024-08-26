import postgres from "../../Postgres.svg"
import '../../styles/skill.css'

export default function Skill({skills}) {
    return(
        <div className="skill-box">
            <img src={postgres} height="50" width="50" alt="postgres" />
        </div>
    );
}

// {skills.map((skill) => (
//     <p className="box">{skill}</p>
// ))}