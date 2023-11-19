import React from 'react';
import treatment from '../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">Welcome to a realm of exceptional dental care tailored to your preferences. At our practice, we redefine the dental experience, putting your needs and comfort at the forefront. Our dedicated team is committed to providing personalized, patient-centric services, ensuring your journey to optimal oral health aligns seamlessly with your individual preferences. Discover a dental oasis where your concerns are heard, and your smile is nurtured with expertise and compassion. Experience exceptional dental care that revolves around you – because your satisfaction is our priority.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-primary from-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;