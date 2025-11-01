import React from 'react';
import { HiXMark, HiArrowLeft } from 'react-icons/hi2';
import { setShownav } from '../slices/NavSlice';
import { useDispatch } from 'react-redux';

export default function Search() {
  const dispatch = useDispatch();
  function previous() {
    window.history.back()
  }

  return (
    <div>
      <div className='search_page_div'>
        <HiArrowLeft onClick={() => {previous();  dispatch(setShownav(false))}} size={34} />
        <input className='search_input' placeholder='search you fav.....' />
        <HiXMark  size={28}/>
      </div>
    </div>
  )
}
