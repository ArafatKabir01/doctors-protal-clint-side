import React from 'react';
import Service from '../Service/Service';
import './Services.css'
import fluoride from '../../img&icon/images/fluoride.png'
import whitening from '../../img&icon/images/whitening.png'
import cavity from '../../img&icon/images/cavity.png'

const Services = () => {
    return (
        <div>
            {/* our services */}
            <section className='container text-center mt-5 pt-5'>
                <h2 className='text-bold service-title pt-5'>OUR SERVICES</h2>
                <h3 className='service-provide-title'>Services We Provide</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pt-5">
                    <Service img={fluoride} cartTitle='Fluoride Treatment' cartDetails='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>
                    <Service img={whitening} cartTitle='Cavity Filling' cartDetails='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>
                    <Service img={cavity} cartTitle='Teeth Whitening' cartDetails='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>
                </div>
            </section>
            
        </div>
    );
};

export default Services;