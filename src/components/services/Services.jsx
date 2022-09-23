import ServiceCard from './ServiceCard';
import './services.css';


const Services = () => {
    const services = [
        { "UI/UX Design": ["Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur."] },
        { "Web Development": ["Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur."] },
        { "Content Creation": ["Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur."] },
    ]


    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container serivces__container">
                {
                    services.map(
                        (service, index) =>
                            <ServiceCard key={index} service={service} />
                    )
                }
            </div>
        </section>
    )
}

export default Services