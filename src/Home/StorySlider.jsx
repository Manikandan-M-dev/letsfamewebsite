import React, { useContext } from 'react';
import { CardContext } from './CardContext';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../Assets/storyslidehome.css';

import { Pagination, Autoplay } from 'swiper/modules';


export default function StorySlider() {
    const { cards } = useContext(CardContext);
    return (
        <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay:2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper storySwiper"
                    breakpoints={{
                        1440:{
                            slidesPerView:3,
                            spaceBetween: 20,
                        },
                        1024:{
                            slidesPerView:3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView:2,
                            spaceBetween: 30,
                        },
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        375:{
                            slidesPerView: 1,
                        },
                        320:{
                            slidesPerView: 1,
                        }

                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index} className='storySwiper-slide card-individual'>
                                <div>
                                    <img src={card.image} alt="story" />
                                    <p>{card.description}</p>
                                </div>
                                <div className="storycontents">
                                    <h5>{card.name}</h5>
                                    <h6>{card.designation}</h6>
                                    <span>{card.country}</span>
                                </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </>
    );
} 