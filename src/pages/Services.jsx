import services from "../data/services";

function Services() {
    return (
        <div>
            <h2>Services</h2>
            
            {services.map((service, index) => (
                <div className="card" key={index}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Services;