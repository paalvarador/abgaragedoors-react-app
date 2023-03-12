import React from 'react';
//import "./home.css";
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
        <section className="home section" id="home">
                <div className="home__content">
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
                        <SwiperSlide><img src={require('../../assets/sliders/slide2.jpg')} alt="slide2" /></SwiperSlide>
                        <SwiperSlide><img src={require('../../assets/sliders/slide3.jpg')} alt="slide3" /></SwiperSlide>
                        <SwiperSlide><img src={require('../../assets/sliders/slide4.jpg')} alt="slide4" /></SwiperSlide>
                        <SwiperSlide><img src={require('../../assets/sliders/slide5.jpg')} alt="slide5" /></SwiperSlide>
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