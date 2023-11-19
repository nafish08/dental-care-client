import React from 'react';

const BookingModal = ({ treatment }) => {

    const { name, slots } = treatment;

    return (
        <div>
            <input type='checkbox' id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className='modal-box'>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className='btn'>Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;