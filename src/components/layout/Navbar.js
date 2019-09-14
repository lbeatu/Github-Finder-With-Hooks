import React from 'react'
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
const  Navbar =(probs) =>{
    
    
  
    // dont works  probs on react version 16.2.3 
    
        return (
            <nav className="navbar bg-success">               
               <h1> 
                   <i className='fab fa-github'/> Github Finder                  
               </h1>
               <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
               </ul>
               
            </nav>
        )
  
}/*
Navbar.defaultProbs={
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

Navbar.propTypes= {
        title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired

    };*/
export default Navbar
