import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard description="Monday - Friday: 8:00 AM - 6:00 PM Saturday: 9:00 AM - 3:00 PM Sunday: Closed" cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard description="123 Health Street, Cityville, State, Zip Code" cardTitle="Our Locations" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard description="(555) 123-4567" cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;