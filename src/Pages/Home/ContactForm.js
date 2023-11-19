import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactForm = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='p-5'>
            <div className='text-center'>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay Connected with us</h2>
            </div>
            <div className="form-control lg:w-1/2 m-auto p-5">
                <input type="text" placeholder="Email Address" className="input input-bordered my-5" />
                <input type="text" placeholder="Subject" className="input input-bordered " />
                <textarea className="textarea textarea-bordered my-5" placeholder="Your Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactForm;