import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import DentalCare from './DentalCare';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;