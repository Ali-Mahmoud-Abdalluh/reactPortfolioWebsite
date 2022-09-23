import './testimonials.css';
import TestimonialsCard from './TestimonialsCard';
import { avatar1, avatar2, avatar3, avatar4 } from '../../assets/';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {

    const testimonials = [
        { name: "Client Name", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur dolore qui laborum, optio nesciunt totam voluptatum quo cum perferendis!", avatar: avatar1 },
        { name: "Client Name", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur dolore qui laborum, optio nesciunt totam voluptatum quo cum perferendis!", avatar: avatar2 },
        { name: "Client Name", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur dolore qui laborum, optio nesciunt totam voluptatum quo cum perferendis!", avatar: avatar3 },
        { name: "Client Name", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur dolore qui laborum, optio nesciunt totam voluptatum quo cum perferendis!", avatar: avatar4 }
    ]

    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    testimonials.map(
                        (testimonial, index) =>
                            <SwiperSlide key={index} ><TestimonialsCard testimonial={testimonial} /></SwiperSlide>
                    )
                }
            </Swiper>


        </section>
    )
}

export default Testimonials