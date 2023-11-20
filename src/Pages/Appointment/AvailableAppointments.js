import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {

    // Fetching data from appointmentOptions.json file
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h4 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div >
    );
};

export default AvailableAppointments;