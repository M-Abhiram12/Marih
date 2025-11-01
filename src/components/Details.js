import React from 'react';
import { useDispatch } from "react-redux";
import { setdetailsbar } from '../slices/NavSlice';
import { HiOutlineChevronRight, HiXMark, HiArrowLeft } from "react-icons/hi2";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Details() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Catogerious", path: "Catogerious" },
    { id: 3, name: "Profile", path: 'profile' },
    { id: 4, name: "Track order", path: "orderstatus" },
    { id: 5, name: "Reviews", path: "reviews" },
    { id: 6, name: "Contact", path: 'contact' }
  ];

  return (
    <div>
      <div className='Details_div'>
        <div className='remove_Icon'>
          <div className='details_icon_remove'>
            <HiXMark size={36} onClick={() => dispatch(setdetailsbar(false))} />
          </div>
        </div>
        <div className='details_page_div'>
          <HiArrowLeft onClick={() => dispatch(setdetailsbar(false))} size={28} />
          <h2>Details</h2>
        </div>

        {menuItems.map((item) => (
          <div key={item.id} onClick={() => {
            navigator(item.path);
            dispatch(setdetailsbar(false));

          }} className='deatils_pages'>
            <p>{item.name}</p>
            <HiOutlineChevronRight size={32} />
          </div>
        ))}

        <div className='details_follow'>
          <div className='followHome_main'>
            <h2>Follow-us</h2>
            <a href='https://www.instagram.com/always___abhi/?hl=en' rel="noopener noreferrer"
              target='_blank' >
              <div className='home_follow_us'>
                <FaInstagram size={32} />
                <h2>Instagram</h2>
              </div>
            </a>
            <a href='https://www.youtube.com/shorts/a79IGt9hBsQ' rel="noopener noreferrer"
              target='_blank' >
              <div className='home_follow_us'>
                <FaYoutube size={32} />
                <h2>Youtube</h2>
              </div>
              </a>
                <a href='https://www.youtube.com/shorts/a79IGt9hBsQ' rel="noopener noreferrer"
              target='_blank' >
            <div className='home_follow_us'>
              <FaFacebookF size={32} />
              <h2>Facebook</h2>
            </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
