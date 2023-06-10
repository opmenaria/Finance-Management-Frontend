import React, { useState } from 'react';
import {
    FaBars,
    FaMoneyBillWave,
    FaShoppingBag
} from "react-icons/fa";
import { GiExpense, GiRapidshareArrow } from "react-icons/gi"
import { MdDashboardCustomize } from "react-icons/md"
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <MdDashboardCustomize />
        },
        {
            path: "/income",
            name: "Incomes ",
            icon: <FaMoneyBillWave />
        },
        {
            path: "/Expense",
            name: "Expenses",
            icon: <GiExpense />
        },
        {
            path: "/Investment",
            name: "InvestMent",
            icon: <GiRapidshareArrow />
        },
        {
            path: "/Budget",
            name: "Budget",
            icon: <FaShoppingBag />
        }
    ]
    return (
        <div className=" fixed  bg-black h-screen mt-14">
            <div className="sidebar  text-white flex flex-col pl-2 pt16">
                <div className="flex text-center items-center justify-between my-2">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="text-lg mr-3 text-orange-400 text-left">Finance Management</h1>
                    <FaBars
                        onClick={toggle} className='mr-3 w-auto  text-xl' />
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link text-md flex items-center space-x-3 my-2" activeclassname="active">
                        <div className="icon text-cyan-500 ">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text active:text-blue-200">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};
export default Sidebar;




