import React, { useEffect, useReducer, useRef } from 'react';
import { HiXMark, HiArrowLeft } from 'react-icons/hi2';
import { setShownav } from '../slices/NavSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
  const dispatch = useDispatch();
  const referance = useRef()
  const { product } = useSelector((state) => state.Nav)
  function previous() {
    window.history.back()
  }
  
  useEffect(()=> {
    referance.current.focus();
  },[])

  return (
    <div>
      <div className='search_page_div'>
        <HiArrowLeft onClick={() => { previous(); dispatch(setShownav(false)) }} size={34} />
        <input className='search_input' ref={referance}  placeholder='search you fav.....' />
        <HiXMark size={28} />
      </div>
      <div className='mostly_main_div'>
        <div className='mostly_text_filter'>
        </div>
        <div className='mostly_div'>
          {product && product.map((item) => (
            <div className='category_shirts' key={item.id}>
              <img className='category_images' src={item.image} alt={item.name} />
              <p className='mostly_name'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
