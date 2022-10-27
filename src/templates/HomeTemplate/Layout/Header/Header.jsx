import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-opacity-40 bg-black text-white fixed w-full z-10">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                       <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="#" className='' />
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                     
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white" activeClassName='border-b-2 border-white'>Trang chủ</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink  rel="noopener noreferrer" to="/contact"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white" activeClassName='border-b-2 border-white'>Liên hệ </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/news" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white" activeClassName='border-b-2 border-white'>Tin tức</NavLink>
                        </li>
                      
                    
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="self-center px-8 py-3 rounded">Sign in</button>
                        <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 text-white">Sign up</button>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

        </div>
    )
}

export default Header