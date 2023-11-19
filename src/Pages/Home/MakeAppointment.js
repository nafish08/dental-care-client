import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center p-5'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-5'>
                    Streamline your dental care journey with our hassle-free appointment system. Schedule your visit effortlessly, choosing a time that suits your busy lifestyle. Our user-friendly online booking platform puts control in your hands, allowing you to secure an appointment with just a few clicks. Experience the convenience of timely reminders and easy rescheduling options, ensuring your dental needs are met with efficiency and flexibility. At our practice, appointments are not just dates on a calendar; they are tailored moments designed to prioritize your oral health and well-being.
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;