import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import LatestNews from '../../Components/LatestNews/LatestNews';
import NavHero from '../../Components/NavHero/NavHero';
import LeftAside from '../HomeLayout/LeftAside';
import RightAside from '../HomeLayout/RightAside';
import NewsCard from '../../Components/newsCard/NewsCard';

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
    <main className='w-11/12 mx-auto my-3  grid grid-cols-12 ' >
         <aside className='col-span-3 sticky h-fit top-5 ' >
         <LeftAside></LeftAside>
     </aside>
        <section className="main-content col-span-6">
            <Outlet>
                <NewsCard></NewsCard>
            </Outlet>
        </section>
      <aside className='col-span-3 sticky h-fit top-0 '>
            <RightAside></RightAside>
      </aside>
    </main>
        </div>
    );
};

export default Homelayout;