// File name: Home.jsx, Name: Reuben Alexander, Student ID: 301269903, Date: 2024-05-25
import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
     return <>
          <div className="start">
               <h2>Welcome to my portfolio!</h2>
               <p>My name is Reuben Alexander and you're currently at the very beginning of my portfolio!
                    <br />The goal of this site is to make it easy to learn about who I am and what I can do.
                    <br />Feel free to explore the navigation bar on top, or click the link below to learn more about me!
               </p>
               <br />
               <button><Link to="/about">About Me</Link></button>
          </div>
     </>
}
