import React from 'react';
import { useDispatch } from "react-redux";
import { setfiltershow } from '../slices/NavSlice';
import { HiOutlineChevronRight, HiXMark, HiArrowLeft } from "react-icons/hi2";

export default function Filter() {
    const dispatch = useDispatch();

    return (
        <div>
            <div className='filter_div'>
                <div className='remove_Icon'>
                    <HiXMark size={36} onClick={() => dispatch(setfiltershow(false))} />
                </div>

                <div className='details_page_div'>
                    <HiArrowLeft onClick={() => dispatch(setfiltershow(false))} size={28} />
                    <h2>Filter</h2>
                </div>

                <div className='deatils_pages'>
                    <div className='profile_name_icon'>
                        <p className='profile_p'>Price</p>
                    </div>
                    <HiOutlineChevronRight size={32} />
                </div>

                <div className='deatils_pages'>
                    <div className='profile_name_icon'>
                        <p className='profile_p'>Catogeroy</p>
                    </div>
                    <HiOutlineChevronRight size={32} />
                </div>
                <button>Apply</button>
            </div>

        </div>
    )
}
