import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    const menuItems = <>

        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='about'>ABOUT</NavLink></li>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='skill'>SKILL</NavLink></li>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='portfolio'>PORTFOLIO</NavLink></li>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='contact'>CONTACT</NavLink></li>
    </>;
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar">
                    <div className="flex-1 px-2 mx-2 font-bold text-2xl ml-14"><Link className='text-white' to='/'>ABUJAKARIA<span className='text-accent'>CSE</span></Link></div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal mr-14 text-white">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 drw">
                    {
                        menuItems
                    }

                </ul>

            </div>
        </div>
    );
};

export default Navbar;