import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn bg-black uppercase text-white font-bold bg-gradient-to-primary from-secondary">{children}</button>
    );
};

export default PrimaryButton;