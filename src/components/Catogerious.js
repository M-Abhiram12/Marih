import React from 'react';
import { HiAdjustments } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setfiltershow } from '../slices/NavSlice';
import Filter from './Filter';


export default function Catogerious() {
    const { product } = useSelector((state) => state.Nav)
    const dispatch = useDispatch();
    const filtershow = useSelector((state) => state.Nav.filtershow)
    return (
        <div>
            {filtershow && <Filter />}

            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Earrings</h2>
                    <HiAdjustments onClick={() => dispatch(setfiltershow(true))} size={28} className='filter_icon' />
                </div>

                <div className='mostly_div'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.name} />
                            <p className='mostly_name'>{item.name}</p>
                            <div className='price_div'>
                                <h5 className='mostly_offerprice'>₹{item.price}</h5>
                                <h3 className='mostly_price'>₹{item.offerPrice}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Necklacs</h2>
                    <HiAdjustments size={28} className='filter_icon' />
                </div>

                <div className='mostly_div'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.name} />
                            <p className='mostly_name'>{item.name}</p>
                            <div className='price_div'>
                                <h5 className='mostly_offerprice'>₹{item.price}</h5>
                                <h3 className='mostly_price'>₹{item.offerPrice}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Rings</h2>
                    <HiAdjustments size={28} className='filter_icon' />
                </div>

                <div className='mostly_div'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.name} />
                            <p className='mostly_name'>{item.name}</p>
                            <div className='price_div'>
                                <h5 className='mostly_offerprice'>₹{item.price}</h5>
                                <h3 className='mostly_price'>₹{item.offerPrice}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Earrings</h2>
                    <HiAdjustments onClick={() => dispatch(setfiltershow(true))} size={28} className='filter_icon' />
                </div>

                <div className='mostly_div'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.name} />
                            <p className='mostly_name'>{item.name}</p>
                            <div className='price_div'>
                                <h5 className='mostly_offerprice'>₹{item.price}</h5>
                                <h3 className='mostly_price'>₹{item.offerPrice}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Necklacs</h2>
                    <HiAdjustments size={28} className='filter_icon' />
                </div>

                <div className='mostly_div'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.name} />
                            <p className='mostly_name'>{item.name}</p>
                            <div className='price_div'>
                                <h5 className='mostly_offerprice'>₹{item.price}</h5>
                                <h3 className='mostly_price'>₹{item.offerPrice}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Rings</h2>
                    <HiAdjustments size={28} className='filter_icon' />
                </div>

                <div className='mostly_div'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.name} />
                            <p className='mostly_name'>{item.name}</p>
                            <div className='price_div'>
                                <h5 className='mostly_offerprice'>₹{item.price}</h5>
                                <h3 className='mostly_price'>₹{item.offerPrice}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}
