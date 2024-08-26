import '../../styles/skill.css'

export default function Skill({skills}) {
    return(
        <div className="skill-center">
            {skills.map((skill) => (
                <div className="text-pos"> 
                    <div className="skill-box">
                        <div className="skill-pos">
                            <img src={skill.src} height="50" width="50" alt={skill.skillName} />
                        </div>
                    </div>
                    <h3>{skill.skillName}</h3>
                </div>
                
            ))}
        </div>
    );
}