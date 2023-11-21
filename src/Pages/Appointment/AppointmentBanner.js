import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';

// For calender component
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #00B4A2;
  }
`;

const AppointmentBanner = ({ date, setDate }) => {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-10">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />

        {/* For calender component */}
        <div>
          <style>{css}</style>
          <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: 'my-selected',
              today: 'my-today'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;