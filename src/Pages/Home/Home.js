import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import DentalCare from './DentalCare';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;