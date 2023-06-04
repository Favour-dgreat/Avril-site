import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { images }from '../../constants';
import './Intro.css';

const HireCreatives = () => {
  const navigate = useNavigate();
return(
  <div className='app__header section__padding'  id='home'>
   
    <div className='app_wrapper_info'>
      {/* <SubHeading title="Chase the new flavour"/> */}
      
    <div className='app_wrapper_info2' style={{display: 'block', width: '100%'}}>
      {/* <SubHeading title="Chase the new flavour"/> */}
      <p style={{color: 'white', marginBottom: '2rem', textAlign: 'center'}}>Let’s make your hiring process seamless by joining our membership plan with just $100 annually
    </p> 

    <div className="app_wrapper_images" style={{display: 'flex', marginBottom: '3rem', marginLeft: '6%'}}>
      <img src={images.first} style={{margin: '0 60px'}} className='app_wrapper-img1' alt="header img"/>
      <img src={images.second} style={{margin: '0 60px'}} className='app_wrapper-img2' alt="header img"/>
      <img src={images.third} style={{margin: '0 60px'}} className='app_wrapper-img1' alt="header img"/>
      <img src={images.fourth} style={{margin: '0 60px'}} className='app_wrapper-img2' alt="header img"/>
    </div>      
    <Button className='my__btn' style={{justifyContent: 'center', width: '150px', height: '40px', fontSize: '15px', cursor: 'pointer', position: 'relative', left: '20%'}} onClick={() => navigate('register')}>Pay here</Button>

    </div>
</div>

</div>
  );
};

export default HireCreatives;
