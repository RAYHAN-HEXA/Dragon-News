import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const Homelayout = () => {
    return (
        <div >
           <header>
<Navbar></Navbar>
           </header>   
        <section className="left-side"></section>
        <section className="main-content">
            <Outlet></Outlet>
        </section>
        <section className="right-side"></section>
        </div>
    );
};

export default Homelayout;