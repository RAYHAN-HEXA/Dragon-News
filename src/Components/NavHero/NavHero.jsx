import React from 'react';
import { NavLink } from 'react-router';
import user  from '../../assets/user.png'

const NavHero = () => {
    return (
        <div className='flex gap-5 justify-around items-center' >
            <div>

            </div>
            <div className="Nav flex text-accent gap-4">
                <NavLink to='/' >Home</NavLink>
                 <NavLink to='/about' >About</NavLink>
                  <NavLink to='/carrer' >Career</NavLink>
            </div>
            <div className="btn-login flex gap-4 justify-center items-center">
                <img src={user} alt="User" />
                <button className='btn btn-primary px-10' >Login</button>

            </div>
        </div>
    );
};

export default NavHero;