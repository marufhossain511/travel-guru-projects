import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import coxs from '../../assets/Sajek.png'
import sundharban from '../../assets/sundorbon.png'
import srimangal from '../../assets/Sreemongol.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight, FaBeer } from 'react-icons/fa';
const Home = () => {
    const infos=useLoaderData()
    console.log(infos);
    const {image_url}=infos
    return (
        <div className="flex ml-5 mt-5 mr-0">
            <div className="w-[50%] ml-12">
                <h2 className='text-white text-8xl font-normal '>COX'S BAZAR</h2>
                <p className='text-white font-normal'>Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
                <Link><button className='my-4 btn btn-warning text-white'>Booking <FaArrowRight className='ml-2'/></button></Link>
            </div>

            <div className=" w-[50%] h-96 ">
            <Swiper
                // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                        >
                    <SwiperSlide><div className='relative'>
                    <Link><img src={coxs} alt="" /></Link>
                        </div>
                        <div className='absolute bottom-1'>
                            <h2 className='ml-2 text-white font-extrabold'>COX'S BAZAR</h2>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide><div className='relative'>
                    <Link><img src={sundharban} alt="" /></Link>
                        </div>
                        <div className='absolute bottom-1'>
                            <h2 className='ml-2 text-white font-extrabold'>SUNDARBON</h2>
                        </div></SwiperSlide>
                    <SwiperSlide><div className='relative'>
                    <Link><img src={srimangal} alt="" /></Link>
                        </div>
                        <div className='absolute bottom-1'>
                            <h2 className='ml-2 text-white font-extrabold'>SRIMANGAL</h2>
                        </div></SwiperSlide>
                    <SwiperSlide><div className='relative'>
                    <Link><img src={coxs} alt="" /></Link>
                        </div>
                        <div className='absolute bottom-1'>
                            <h2 className='ml-2 text-white font-extrabold'>COX'S BAZAR</h2>
                        </div></SwiperSlide>
                    ...
             </Swiper>
            </div>
        </div>
    );
};

export default Home;