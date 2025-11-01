import React from 'react';
import { FiSearch, FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import Details from './Details';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setdetailsbar, setShownav } from '../slices/NavSlice';

export default function Nav() {
    const deatailsShow = useSelector((state) => state.Nav.detailsbarShow);
    const { shownav } = useSelector((state) => state.Nav);
    const dispatch = useDispatch();
    return (
        <div className={shownav ? "main_header_hide" : "main_header"}>
            {deatailsShow && ( <Details /> )}
            <nav className='header_div'>
                <div>
                    <FiMenu size={32} className='menu_icon' onClick={() => dispatch(setdetailsbar(true))} />
                </div>
                <Link to="/" className='home_link'>Glimzy</Link>
                <div className='header_icon_div'>
                    <Link to="search"><FiSearch onClick={() => dispatch(setShownav(true))} size={28} className='search_icon' /></Link>
                    <Link to="profile"> <FiUser size={28} className='user_icon' /></Link>
                    <Link to="cart"> <FiShoppingCart size={28} className='cart_icon' /></Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
