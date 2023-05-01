import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import bg1 from '../assets/Rectangle 1.png'

const Main = () => {
    return (
        <div>
            <div className="relative">
             <img style={{height:'100vh',width:'100%' }}src={bg1} alt="" />
            </div>
            <div className="absolute top-0 w-full mt-2">
            <Header></Header>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;