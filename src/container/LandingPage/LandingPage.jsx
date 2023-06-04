import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { images }from '../../constants';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
return(
  <div className='app__header section__padding'  id='home'>
    <nav className='app__navbar' >
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
    <Button className='my__btn' style={{cursor:'pointer'}}>Sign up</Button>
    {/* <a href='/' className='p__opensans'>Book Table</a> */}
    </div>
  
    
  </nav>
    <div className='app_wrapper_info'>
      {/* <SubHeading title="Chase the new flavour"/> */}
      <h1 className='app__header-h1'>Avril</h1>
      
    </div>
    <div className='app__wrapper_img' style={{display: 'flex', margin: '0 ',   paddingTop: '300px', width: '100%'}}>
      <img src={images.vector} style={{maxHeight: '100px', maxWidth: '100px', left: '30%', right: '50%', top: '100%', bottom: '0%'}} className='app_wrapper-img1' alt="header img"/>
      <img src={images.frame3} style={{maxHeight: '400px', maxWidth: '200px', marginTop: '10%'}} className='app_wrapper-img2' alt="header img"/>
    </div>
    <br/>
    <div className='app_wrapper_info2' style={{display: 'block', width: '30%'}}>
      {/* <SubHeading title="Chase the new flavour"/> */}
      <p style={{color: 'white', lineHeight: '20px', marginTop: '4rem', marginBottom:'2rem'}}>Welcome to our Web3 job platform, the ideal
 setting for creative people to get in touch with
potential clients and advance their careers.
</p>
<Button className='my__btn' style={{justifyContent: 'center', width: '150px', height: '40px', fontSize: '15px', cursor: 'pointer'}} onClick={() => navigate('register')}>Find more</Button>

</div>
  </div>
  );
};

export default LandingPage;
