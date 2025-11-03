import React from 'react';
import { HiAdjustments } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setfiltershow } from '../slices/NavSlice';
import Filter from './Filter';


export default function Catogerious() {
    const { product} = useSelector((state) => state.Nav);
    const dispatch = useDispatch();
    const filtershow = useSelector((state) => state.Nav.filtershow);
     
    return (
        <div>
            {filtershow && <Filter />}
            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>All products</h2>
                    <HiAdjustments onClick={() => dispatch(setfiltershow(true))} size={28} className='filter_icon' />
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
               <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>shirts</h2>
                    <HiAdjustments onClick={() => dispatch(setfiltershow(true))} size={28} className='filter_icon' />
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
               <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Hoodies</h2>
                    <HiAdjustments onClick={() => dispatch(setfiltershow(true))} size={28} className='filter_icon' />
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
