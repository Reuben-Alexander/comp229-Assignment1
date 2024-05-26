// File name: Layout.jsx, Name: Reuben Alexander, Student ID: 301269903, Date: 2024-05-25
import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <header>
                <img src="bonus/logo.png" alt="logo" width="120" height="120"/>
                <h1>Reubens's Portfolio</h1>
            </header>
            <nav>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ol>
            </nav>
        </>

    );
}
