import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactForm = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='p-5 my-5 text-center'>
            <h3 className='text-xl font-bold text-primary'>Contact Us</h3>
            <h2 className='text-3xl text-white'>Stay connected with us</h2>
            <form class="card-body mx-auto my-5 lg:w-1/2">
                <div class="form-control mb-5">
                    <input type="email" placeholder="Email Address" class="input input-bordered" required />
                </div>
                <div class="form-control mb-5">
                    <input type="password" placeholder="Subject" class="input input-bordered" required />
                </div>
                <div className='form-control mb-5'>
                    <textarea class="textarea h-28" placeholder="Your Message"></textarea>
                </div>
                <div class="form-control mx-auto mt-6 w-1/4">
                    <button class="btn bg-primary text-white uppercase">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;