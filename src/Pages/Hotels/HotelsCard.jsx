import React from 'react';

const HotelsCard = ({hotel}) => {
    // console.log(hotel);
    const {place,name,address,phone,price_range,website,image}=hotel
    return (
        <div>
            <div className="card h-72 lg:h-60 w-full card-side bg-base-100 shadow-xl mb-4">
            <figure><img className='h-48 object-cover w-68 rounded p-2' src={image}/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Address :{address}</p>
                <p>Phone: {phone}</p>
                <p>price: $ {price_range}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-sm btn-success">Booked</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HotelsCard;