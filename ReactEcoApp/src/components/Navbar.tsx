import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { LuGithub } from 'react-icons/lu';
import './Navbar.scss';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Navbar = () => {
  const {darkMode, toggle} = useContext(DarkModeContext);
  return (
    <nav id="app-nav" className="shadow-2xl p-5 flex gap-2 bg-green-400 text-green-950 dark:bg-green-900 dark:text-green-100">
        
      
        <div className="flex flex-row">
        <NavLink className="rounded-lg p-2" to="/">
        <IoHomeOutline aria-description="Home" />
        </NavLink>
        <NavLink className="rounded-lg p-2" to="/about">About</NavLink>
        <NavLink className="rounded-lg p-2" to="/posts">Posts</NavLink>
        </div>
       
       
        <div className="flex-1"></div>
        <div className="hidden sm:flex items-center">
        <NavLink className="rounded-lg p-2" to="/login">Login</NavLink>
        <NavLink className="rounded-lg p-2" to="/register">Register</NavLink>
        <button onClick={toggle} className="rounded-lg p-2">
          {darkMode ? "🌞" : "🌚"}
        </button>
       <a href= "https://github.com/itamarherr" className='px-2'>
       <LuGithub className="" aria-description="github"/>
       </a>
        
        </div>
      
    </nav>
  );
};

export default Navbar