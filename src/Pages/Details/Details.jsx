import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const details=useLoaderData()
    const navigate=useNavigate()
    // console.log(details);
    const {id,name,description,things_to_do}=details;
    const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"];

    const handleBooking=(e)=>{
        e.preventDefault()
        navigate(`/hotels/${id}`)
    }

    return (
        <div className='lg:flex mx-4'>
            <div className='lg:w-[50%] lg:mx-14 my-6 lg:my-20 '>
                <div className="card w-full h-80 glass  bg-opacity-5  text-white">
                <div className="card-body">
                    <h2 className="card-title text-6xl font-normal" >{name}</h2>
                    <p className='text-base font-normal'>{description}</p>
                    <div className="justify-start ">
                     <h2 className='text-xl font-medium'>Things to do :
                        {
                            things_to_do.map((n,idx)=><li className='text-base font-normal' key={idx}>{n}</li>)
                        }
                     </h2>
                    </div>
                </div>
                </div>
            </div>
            <div className='lg:w-[50%] mb-6 lg:my-16 bg-purple-400'>
            <form onSubmit={handleBooking}  className="destination-date bg-white px-6 py-5 rounded-lg">
                <div className="form-control">
                    <span className="label-text mb-2">Origin</span>
                    <select className="select select-bordered text-black" required>
                      {
                        divisions.map((division,idx)=><option key={idx}>{division}</option>)
                      }
                    </select>
                </div>
                <div className="form-control mt-5">
                    <span className="label-text mb-2">Destination</span>
                    <select className="select select-bordered text-black" required>
                        <option disabled selected>{name}</option>
                    </select>
                </div>
                <div className="form-control mt-5 text-black grid grid-cols-2 gap-4">
                    <div>
                        <p className='label-text mb-2'>Form</p>
                        <input type="date" required />
                    </div>
                    <div>
                        <p className="label-text mb-2">To</p>
                        <input className='input input-bordered w-full' type="date" required />
                    </div>
                </div>
                <button type='submit' className='w-full btn btn-warning normal-case mt-7'>Start Booking</button>
            </form>
            </div>
        </div>
    );
};

export default Details;