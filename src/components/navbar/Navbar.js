import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDays,faGauge,faChartSimple} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/mycalendar">MyCalendar</Link>
                        <Link className='nav-link' to="/widgets">Widgets</Link>
                    </li>
                </ul>
            </div>
            <div className='sidebar'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/calendar"><FontAwesomeIcon icon={faCalendarDays} />  Calendar</Link>
                        <Link className='nav-link' to="/dashboard"><FontAwesomeIcon icon={faGauge} />  Dashboard</Link>
                        <Link className='nav-link' to="/reports"><FontAwesomeIcon icon={faChartSimple} />  reports</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
