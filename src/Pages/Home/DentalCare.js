import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Welcome to a realm of exceptional dental care tailored to your preferences. At our practice, we redefine the dental experience, putting your needs and comfort at the forefront. Our dedicated team is committed to providing personalized, patient-centric services, ensuring your journey to optimal oral health aligns seamlessly with your individual preferences. Discover a dental oasis where your concerns are heard, and your smile is nurtured with expertise and compassion. Experience exceptional dental care that revolves around you – because your satisfaction is our priority.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;