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
                <h2 className='text-3xl'>Stay Connected with us</h2>
            </div>
            <div class="form-control m-auto p-5">
                <input type="text" placeholder="Email Address" class="input input-bordered my-5" />
                <input type="text" placeholder="Subject" class="input input-bordered " />
                <textarea class="textarea textarea-bordered my-5" placeholder="Your Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactForm;