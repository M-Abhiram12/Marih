import React from 'react';
 import { TbCategory,TbHome ,TbUserCircle} from 'react-icons/tb';

export default function FooterMenu() {
    return (
        <>
            <div className='footer_main_div'>
                <div className='footermenu_div'>
                   <TbHome className='footer_home'/>
                    <TbCategory className='footer_categerious'/>
                    <TbUserCircle className='footer_user'/>
                </div>
            </div>
        </>
    )
}
