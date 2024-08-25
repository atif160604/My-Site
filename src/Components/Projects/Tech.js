import '../../styles/tech.css'

export default function Tech({ stack }) {
    return (
        <div>
            {stack.map((tech) => (
                <p className="box">{tech}</p>
            ))}
        </div>
    );
}
