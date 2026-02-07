function SkillGroup({ title, items }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <ul>
                {items.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillGroup;