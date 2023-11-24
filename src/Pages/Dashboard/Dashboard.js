import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col items-center justify-center'>
                <h2 className='text-5xl text-red-700'>Dashboard</h2>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className='btn btn-neutral drawer-button lg:hidden'>Open Drawer</label>
            </div>
            <div className='drawer-side'>
                <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay'></label>
                <ul className='menu p-4 w-80 min-h-full bg-neutral-700 text-base-content'>
                    <li><a>Service</a></li>
                    <li><a>Service</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;