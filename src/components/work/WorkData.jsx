import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";


const WorkData = () => {
    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        axios
            .get("https://sample-api-abgarage.herokuapp.com/api/work/all")
            .then(res => {
                console.log(res);
                setWorkData(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    return (
        <div className="work__container">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    workData.map((work) => (
                        <SwiperSlide>
                            <div key={work._id} className="work__content">
                                <img src={work.image} alt={work.name} />
                                <div className="work__content__data">
                                    <h3 className="work__content__data-title">{work.title}</h3>
                                    <p className="work__content_data-description">{work.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default WorkData