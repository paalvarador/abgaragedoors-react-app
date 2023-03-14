import React from 'react';
import "./home.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Home = () => {
    return (
        <section className="home_section" id="home">
                <div className="home__content">
                    <div className="home_card">
                        <div className="home_card-title">
                            <h1>We Are Security</h1>
                        </div>
                        <div className="home_card-description">
                            <span>At AB Garage Doors we like offer security to our clients</span> 
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={require('../../assets/sliders/slide1.jpg')} alt="slide1" /></SwiperSlide>
                        <SwiperSlide><img src={require('../../assets/sliders/slide6.jpg')} alt="slide6" /></SwiperSlide>
                        <SwiperSlide><img src={require('../../assets/sliders/slide7.jpg')} alt="slide7" /></SwiperSlide>
                        <SwiperSlide><img src={require('../../assets/sliders/slide8.jpg')} alt="slide8" /></SwiperSlide>
                        <SwiperSlide><img src={require('../../assets/sliders/slide9.jpg')} alt="slide9" /></SwiperSlide>
                    </Swiper>
                </div>
        </section>

    )
}

export default Home