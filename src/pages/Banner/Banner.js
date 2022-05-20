import React from 'react';
import { Button } from 'react-bootstrap';
import bannerimg from '../../img&icon/images/chair.png'
import clockIcon from '../../img&icon/icons/clock.svg'
import markerIcon from '../../img&icon/icons/marker.svg'
import phoneicon from '../../img&icon/icons/phone.svg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            {/* banner section */}
            <section className='banner'>
                <div className='container d-flex  justify-content-center flex-sm-column flex-xl-row  info-img mb-5 pb-5'>
                    <div className='banner-info me-5 pe-5'>
                        <h2 className='info-title'>Your New Smile Starts Here</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='banner-btn' >GET STARTED</button>
                    </div>
                    <div className='banner-img'>
                        <img src={bannerimg} />
                    </div>
                </div>
               
                <div className='d-flex container mt-5 pt-5 '>
                    <div className='banner-cart1 d-flex justify-content-center align-items-center '>
                        <img className='ps-2 pe-3' src={clockIcon} />
                        <div>
                            <h2>Opening Hours</h2>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                    <div className='banner-cart2 d-flex justify-content-center align-items-center'>
                        <img className='ps-2 pe-3' src={markerIcon} />
                        <div>
                            <h2>Visit our location</h2>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                    <div className='banner-cart3 d-flex justify-content-center align-items-center'>
                        <img className='ps-2 pe-3' src={phoneicon} />
                        <div>
                            <h2>Contact us now</h2>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Banner;