import React, { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function TestimonialData() {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        axios
            .get("https://abgaragedoors-api-rest.vercel.app/api/testimonial/all")
            .then(res => {
                console.log(res);
                setTestimonialData(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);


    return (
        <>
            <Swiper className="testimonial__container"
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    996: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    639: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}>
                {
                    testimonialData.map((testimonial) => (
                        <SwiperSlide key={testimonial._id} className="testimonial__card">
                            <img src={testimonial.image} alt="testimonial" className="testimonial__img" />
                            <h3 className="testimonial__name">{testimonial.name}</h3>
                            <p className="testimonial__message">{testimonial.message}</p>
                            <span className="testimonial__city">{testimonial.city}</span>
                            <span className="testimonial__country">{testimonial.country}</span>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default TestimonialData
