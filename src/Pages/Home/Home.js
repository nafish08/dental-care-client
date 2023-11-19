import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import DentalCare from './DentalCare';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className='sm:px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;