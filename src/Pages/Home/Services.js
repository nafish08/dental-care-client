import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Enhance your dental defense with our fluoride treatment, a quick and effective solution for strengthening enamel, preventing decay, and ensuring a resilient smile.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Bid farewell to discomfort! Our expert cavity filling services seamlessly restore your teeth to their natural strength, ensuring lasting oral health and a pain-free, confident grin.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Unveil a brighter, confident you! Our professional teeth whitening services offer a dazzling transformation, erasing stains and discoloration to reveal a radiant, pearly-white smile.',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;