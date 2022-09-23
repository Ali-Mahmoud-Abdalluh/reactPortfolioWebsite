import './testimonials.css';

const TestimonialsCard = ({ testimonial }) => {
    return (
        <article className='testimonial'>
            <div className="client__avatar">
                <img src={testimonial.avatar} alt="client image" />
            </div>
            <h5 className='client__name'>{testimonial.name}</h5>
            <small className="client__review">
                {testimonial.review}
            </small>
        </article>
    )
}

export default TestimonialsCard