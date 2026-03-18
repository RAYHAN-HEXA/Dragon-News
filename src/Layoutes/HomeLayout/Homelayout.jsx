import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import LatestNews from '../../Components/LatestNews/LatestNews';
import NavHero from '../../Components/NavHero/NavHero';

const Homelayout = () => {
    return (
        <div >
           <header>
<Navbar></Navbar>
<section className='w-11/12 mx-auto' >
    <LatestNews></LatestNews>
</section>
<nav className='w-11/12 mx-auto' >
    <NavHero></NavHero>
</nav>
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