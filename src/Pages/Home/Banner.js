import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import heroBg from '../../assets/images/heroBg.jpg';


const Banner = () => {
    return (
        // <div className="hero min-h-screen">
        //     <div className=" text-center">
        //         <h1 className="text-5xl font-bold">Your Gateway to Personalized Patient Care</h1>
        //         <p className="py-6">Welcome to our doctor's portal, where innovation meets compassion. Experience a seamless blend of cutting-edge technology and personalized care, ensuring a healthier and happier tomorrow for you and your loved ones. Your well-being is our priority, and our dedicated team of healthcare professionals is here to provide comprehensive and convenient medical services tailored to your unique needs.</p>
        //         <PrimaryButton>Get Started</PrimaryButton>
        //     </div>
        <div class="min-h-screen flex mb-20" style={{
            background: `url(${heroBg})`,
            backgroundSize: 'cover',
        }}>
            <div class="hero-content text-left lg:ml-10 text-slate-700">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Your Gateway to Personalized Patient Care</h1>
                    <p class="mb-5">Welcome to our doctor's portal, where innovation meets compassion. Experience a seamless blend of cutting-edge technology and personalized care, ensuring a healthier and happier tomorrow for you and your loved ones. Your well-being is our priority, and our dedicated team of healthcare professionals is here to provide comprehensive and convenient medical services tailored to your unique needs.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Banner;