import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import "../Assets/cardblog.css";
import { CardContext } from './CardContext';
import { useContext } from "react";

export default function CardBlog() {
  const swiperRef = useRef(null);

  const handleLeftClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleRightClick = () => {
    swiperRef.current.swiper.slideNext();
  };
  const { blogcards1 } = useContext(CardContext);
  return (
    <>
      <div className="blog-slide-main">
        <Container>
          <div className="blog-slide-head">
            <h3 className="container">Headlines</h3>
            <p className="container">
              Read our blog and find out the latest updates in the Industry.
            </p>
          </div>
          <div className="blog-slide-card container">
            <Swiper
              ref={swiperRef}
              slidesPerView={4}
              loop={true}
              modules={[Navigation]}
              className="mySwiper blogSwiper"
              breakpoints={{
                1024:{
                    slidesPerView: 4
                },
                768: {
                    slidesPerView: 3
                },
                425: {
                    slidesPerView: 1
                },
                375: {
                  slidesPerView: 1
              },
              320:{
                slidesPerView: 1,
            }
            }}
            >
              {blogcards1.map((cardblog,index)=>(
                <SwiperSlide className='blogSwiper-slide cardinitblog'key={index}>
                   <img src={cardblog.image} alt="" className="w-100" />
                        <div className="blogcardtitle"><p>{cardblog.title}</p></div>
                        <div><button>Read More</button></div>
                </SwiperSlide>
              ))} 
            </Swiper>
            <div className="slidemovebtn">
              <i className="bi bi-chevron-left leftslidemove" onClick={handleLeftClick}></i>
              <i className="bi bi-chevron-right leftslidemove" onClick={handleRightClick}></i>
            </div>
          </div>
        </Container >
      </div >
    </>
  );
}
