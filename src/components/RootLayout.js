import React from 'react'
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Reports from './reports/Reports';
import MyCalendar from './mycalendar/MyCalendar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './RootLayout.css';


function RootLayout() {
    return (
        <div classname="rootlayout">
            <Navbar/>
            <div className='dynamic-outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
