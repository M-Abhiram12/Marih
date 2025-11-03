import React from 'react';
import { TbCategory, TbHome, TbUserCircle } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function FooterMenu() {
    return (
        <>
            <div className='footer_main_div'>
                <div className='footermenu_div'>
                    <Link to="/"> <TbHome size={26} className='footer_home' /></Link>
                    <Link to="catogerious"><TbCategory size={30} className='footer_categerious' /></Link>
                    <Link to="profile"> <TbUserCircle size={26} className='footer_user' /></Link>
                </div>
            </div>
        </>
    )
}
