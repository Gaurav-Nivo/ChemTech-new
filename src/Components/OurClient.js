import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function OurClient() {
  return (
    <>
      <div className='our-client-header'>
        <h1>Our Client</h1>
      </div>

      <div className='our-client-main' >
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
          <SwiperSlide>
            <div className='our-client'>
              <div className='our-client-slide-image' >
                <img className='our-client-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbzLsjZnKWU35OhUbcVqrvnzCJ0udxEsYiQ&usqp=CAU' />
              </div>
              <div className='our-client-text'>
                <h4><strong>Company Name</strong></h4>
                <h5>Adarsh Verma</h5>
                <p>I had a great expirence to the process</p>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
          <div className='our-client'>
              <div className='our-client-slide-image' >
                <img className='our-client-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OL4NINhivu2Ho6cnvj14NKY8Cv7vaifG0Q&usqp=CAU' />
              </div>
              <div className='our-client-text'>
                <h4><strong>Company Name</strong></h4>
                <h5>Veeru Verma</h5>
                <p>I had a great expirence to the process</p>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide> */}

        </Swiper>
      </div>

    </>
  );
}
