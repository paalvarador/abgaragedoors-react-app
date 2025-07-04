import { ImgComparisonSlider } from '@img-comparison-slider/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const WorkData = () => {
    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        axios
            .get("https://abgaragedoors-api-rest.vercel.app/api/work/all")
            .then(res => {
                setWorkData(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="work__container">
                {
                    workData.map((work) => (
                        <SwiperSlide key={work._id} className="work__content">
                            <ImgComparisonSlider hover="hover" tabIndex={0} className='rendered'>
                                <img slot="first" src={window.location.origin + '/assets/images/works_before/' + work.image} alt={work.name} width={600} height={400}/>
                                <img slot="second" src={window.location.origin + '/assets/images/works_after/' + work.image} alt={work.name} width={600} height={400} />
                            </ImgComparisonSlider>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default WorkData

/*
    < Swiper
slidesPerView = { 1}
spaceBetween = { 30}
keyboard = {{
    enabled: true,
                }}
pagination = {{
    clickable: true,
                }}
navigation = { true}
modules = { [Keyboard, Pagination, Navigation]}
className = "mySwiper"
    >
{
    workData.map((work) => (
        <SwiperSlide>
            <div key={work._id} className="work__content">
                <img src={"http://localhost:3000/" + work.image} alt={work.name} />
                <div className="work__content__data">
                    <h3 className="work__content__data-title">{work.title}</h3>
                    <p className="work__content_data-description">{work.description}</p>
                </div>
            </div>
        </SwiperSlide>
    ))
}
            </Swiper >*/
