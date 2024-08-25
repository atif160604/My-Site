export default function Description({ project, des}) {
    return (
        <div className="text-padding">
            <h2>
                {project}
            </h2>
            <p> {des}</p>
        </div>
    );
}