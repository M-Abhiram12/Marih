import React from 'react';
import { HiOutlineChevronRight } from "react-icons/hi2";
import { FaHome, FaQuestionCircle, FaPhoneAlt, FaBoxOpen, FaTruck

} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const menuItems = [
    { id: 1, name: "Orders", icon: <FaHome className='icon_profile' /> },
    { id: 2, name: "Address", icon: <FaQuestionCircle className='icon_profile' /> },
    { id: 3, name: "Track order", icon: <FaPhoneAlt className='icon_profile' />, path: "orderstatus" },
    { id: 4, name: "contact", icon: <FaBoxOpen className='icon_profile' />,path:"contact" },
    { id: 5, name: "help center", icon: <FaTruck className='icon_profile' /> }
  ];
  const navigator = useNavigate();

  return (
    <div>
      <div className='Profile_div'>

        {menuItems.map((item) => (
          <div key={item.id} className='profile_pages'>
            <div className='profile_name_icon' onClick={() => { navigator(item.path) }}>
              <div >{item.icon}</div>
              <p className='profile_p'>{item.name}</p>
            </div>
            <HiOutlineChevronRight size={32} />
          </div>
        ))}
      </div>
    </div>
  )
}
