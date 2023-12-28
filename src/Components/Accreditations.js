import React from 'react'
// import Reac from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination  } from 'swiper/modules';


const Accreditations = () => {


    return (
        <>
            <div className='accreditations-main '>
                <div className='container '>
                    <h2 className='product-title'>Accreditations</h2>
                    <div className='swiper-accreditation'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                              pagination={{
                                clickable: true,
                              }}
                            //   navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay, Pagination ]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='swiper-slide-accreditation' ><img className='accredition-slider-images ' src='/accreditations/image-1.png' alt='image' /></SwiperSlide>
                            <SwiperSlide className='swiper-slide-accreditation'><img className='accredition-slider-images ' src='/accreditations/image-2.png' alt='image' /></SwiperSlide>
                            <SwiperSlide className='swiper-slide-accreditation'><img className='accredition-slider-images ' src='/accreditations/image-3.png' alt='image' /></SwiperSlide>
                            <SwiperSlide className='swiper-slide-accreditation'><img className='accredition-slider-images ' src='/accreditations/image-4.png' alt='image' /></SwiperSlide>
                            <SwiperSlide className='swiper-slide-accreditation'><img className='accredition-slider-images ' src='/accreditations/image-5.png' alt='image' /></SwiperSlide>
                            <SwiperSlide className='swiper-slide-accreditation'><img className='accredition-slider-images ' src='/accreditations/image-1.png' alt='image' /></SwiperSlide>
                            <SwiperSlide className='swiper-slide-accreditation'><img className='accredition-slider-images ' src='/accreditations/image-4.png' alt='image' /></SwiperSlide>
{/*                        
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accreditations