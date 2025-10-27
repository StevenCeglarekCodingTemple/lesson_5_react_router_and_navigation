import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
    return (
        <div>

            <Link to='/' className='site-link'>Home</Link>
            <Link to='/about' className='site-link'>About</Link>
            <Link to='/contact' className='site-link'>Contact</Link>

            <div className='site-links'>
                <NavLink 
                    to='/'
                    className='site-link' >
                    Home
                </NavLink>
                <NavLink 
                    to='/contact'
                    className='site-link' >
                    Contact
                </NavLink>
                <NavLink 
                    to='/about'
                    // style={({ isActive }) => ({
                    //     fontWeight: isActive ? 'bold' : 'normal'
                    //   })} 
                      className='site-link'
                      >
                    About
                </NavLink>
                <NavLink 
                    // to=`/user/${id}`
                    className='site-link' >
                    User Profile
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation