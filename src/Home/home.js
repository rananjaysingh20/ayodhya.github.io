import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import '../styles/home.css'
import Spinner from '../assets/navbar-rotator.png';
import HotelBookingForm from '../components/BookingForm';
import BackgroundSlider from '../components/imageSlider';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar isOpen={isOpen} toggle={toggleNavbar} />
      <div style={{ padding: '20px' }} className='home-page'>
        <img src={Spinner} alt='Spinner' className='spinner'/>
        <h1>DivineStays</h1>
        <p>Book amazing stays in just a click.</p>
      </div>
      <div>
        <HotelBookingForm />
      </div>
      <BackgroundSlider />
    </div>
  );
};

export default HomePage;