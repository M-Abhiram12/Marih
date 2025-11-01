import React from 'react'
import { useSelector } from 'react-redux'

export default function Reviews() {
    const { product } = useSelector((state) => state.Nav)
    return (
        <div>
            <div className='mostly_main_div'>
                <div className='mostly_div'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.name} />
                            <h4>Quality product and need to improve packing</h4>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}
