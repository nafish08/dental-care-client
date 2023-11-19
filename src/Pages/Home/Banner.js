import React from 'react';
import chair from '../../assets/images/chair.png';


const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your Gateway to Personalized Patient Care</h1>
                    <p className="py-6">Welcome to our doctor's portal, where innovation meets compassion. Experience a seamless blend of cutting-edge technology and personalized care, ensuring a healthier and happier tomorrow for you and your loved ones. Your well-being is our priority, and our dedicated team of healthcare professionals is here to provide comprehensive and convenient medical services tailored to your unique needs.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-primary from-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;