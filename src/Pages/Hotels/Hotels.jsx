import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelsCard from './HotelsCard';

const Hotels = () => {
    const hotels=useLoaderData()
    console.log(hotels);
    return (
        <div className='lg:flex lg:mx-16 my-10 gap-4'>
            <div className='lg:w-[50%]'>
                {
                    hotels.map(hotel=><HotelsCard
                    key={hotel.id}
                    hotel={hotel}
                    ></HotelsCard>)
                }
            </div>
            <div className='lg:w-[50%]'>
            <iframe className='w-full h-screen rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24933407057!2d91.9204992358945!3d21.45103776170327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1682899313051!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
            </div>
        </div>
    );
};

export default Hotels;