"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        <>
            {domLoaded && (
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[
                        Autoplay,
                        Pagination,
                        

                    ]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src='/slider/image-1.png'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/slider/image-2.jpg'/>
                        </SwiperSlide>
                    <SwiperSlide>
                    <img src='/slider/image-3.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src='/slider/image-4.jpg'/>
                    </SwiperSlide>
                </Swiper>
            )}
        </>
    );
}
