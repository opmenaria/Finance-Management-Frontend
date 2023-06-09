import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/Income",
            name: "Income",
            icon: <FaUserAlt />
        },
        {
            path: "/Expense",
            name: "Expense",
            icon: <FaRegChartBar />
        },
        {
            path: "/Saving",
            name: "Saving",
            icon: <FaCommentAlt />
        },
        {
            path: "/Budget",
            name: "Budget",
            icon: <FaShoppingBag />
        },
        {
            path: "/Tax",
            name: "Tax",
            icon: <FaThList />
        }
    ]
    return (
        <div className="  bg-black h-screen">
            <div className="sidebar  text-white flex flex-col pl-2 pt-16">
                <div className="flex text-center items-center justify-between my-2">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="text-lg mr-3 text-orange-400 text-left">Finance Management</h1>
                    <FaBars
                        onClick={toggle} className='mr-3 w-auto  text-xl' />
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-md flex items-center space-x-3 my-2" activeclassName="active">
                            <div className="icon text-cyan-500">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};
export default Sidebar;




