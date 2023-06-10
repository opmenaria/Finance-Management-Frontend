import React, { useState } from 'react';
import styled from "styled-components";
import {
    FaBars,
    FaMoneyBillWave,
    FaShoppingBag
} from "react-icons/fa";
import { GiExpense, GiRapidshareArrow } from "react-icons/gi"
import { MdDashboardCustomize } from "react-icons/md"
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children, loggedIn, mail }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard ?",
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
        <div className=" fixed  bg-black h-screen ">
            <div className="sidebar  text-white flex flex-col pl-2 pt-16">
                <div className="flex text-center items-center justify-between my-2">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="text-lg mr-3 text-orange-400 text-left">Finance Management</h1>
                    <FaBars
                        onClick={toggle} className='mr-3 w-auto  text-xl' />
                </div>
                {loggedIn || mail ?
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-md flex items-center space-x-3 my-2" activeclassname="active">
                            <div className="icon text-cyan-500 ">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    )) : (
                        <AlertStyled>
                            Please Login first to check in!!
                        </AlertStyled>
                    )
                }
            </div>
            <main>{children}</main>
        </div>
    );
}; const AlertStyled = styled.div`
background-color: #f8d7da;
color: #721c24;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #f5c6cb;
border-radius: 4px;
`;
export default Sidebar;




