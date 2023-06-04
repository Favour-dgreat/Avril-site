import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Button } from 'react-bootstrap';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => { 
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-log'>
    <img src={images.lg} alt="logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>About us</a></li>
      <li className='p__opensans'><a href='#about'>Find Creatives</a></li>
      <li className='p__opensans'><a href='#menu'>Hire Creatives</a></li>
      <li className='p__opensans'><a href='#awards'>Jobs</a></li>
      {/* <li className='p__opensans'><a href='#contact'>Contact</a></li> */}
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>LOGIN</a>
    {/* <div/> */}
    <Button className='my__btn'>Sign up</Button>
    {/* <a href='/' className='p__opensans'>Book Table</a> */}
    </div>
  
    
  </nav>
);
}

export default Navbar;
