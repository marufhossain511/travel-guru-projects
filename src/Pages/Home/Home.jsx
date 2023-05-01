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
    // console.log(infos);
    const {image_url}=infos
    return (
        <div className="lg:flex ml-5 mt-5 mr-0">
            <div className="lg:w-[50%] ml-3 lg:ml-12">
                <h2 className='text-white text-8xl font-normal '>COX'S BAZAR</h2>
                <p className='text-white font-normal'>Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
                <Link><button className='my-4 btn btn-warning text-white'>Booking <FaArrowRight className='ml-2'/></button></Link>
            </div>

            <div className=" lg:w-[50%] lg:mt-10 h-96 ">
            <Swiper
                // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                        >
                    {
                        infos.map(info=><SwiperSlide key={info.id}>
                            <div className='relative'>
                    <Link to={`info/${info.id}`}><img className='object-cover w-full h-60' src={info.image_url} alt="" /></Link>
                        </div>
                        <div className='absolute bottom-1'>
                            <h2 className='ml-2  text-white font-extrabold'>{info.name}</h2>
                        </div> 
                        </SwiperSlide>)
                    }
                    ...
             </Swiper>
             {/* <div className='relative'>
                    <Link><img src={coxs} alt="" /></Link>
                        </div>
                        <div className='absolute bottom-1'>
                            <h2 className='ml-2 text-white font-extrabold'>COX'S BAZAR</h2>
                        </div> */}
            </div>
        </div>
    );
};

export default Home;