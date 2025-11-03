import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { HiAdjustments } from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import axios from 'axios';
import '@splidejs/react-splide/css';
import { useDispatch, useSelector } from 'react-redux';
import { setfiltershow, setShownav, resproduct } from '../slices/NavSlice';
import Filter from './Filter';

export default function Home() {
    const dispatch = useDispatch();
    const { filtershow, product } = useSelector((state) => state.Nav);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                let res = await axios.get('https://mocki.io/v1/a85b273a-b7d8-4a08-8ccd-c1191b1a6fd6')
                dispatch(resproduct((res.data)))
                console.log(res.data)
            } catch (error) {
                console.log("axios error", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        dispatch(setShownav(false))

    }, [dispatch])

    let shirts = product.filter((item => item.category === "shirts"));
    let dresses = product.filter((item => item.category === "dresses"));
    let hoodies = product.filter((item => item.category === "hoodies"))


    return (
        <div className='main_home'>

            {filtershow && <Filter />}
            <div className='search_input_div'>
                <input className='search_input_home' placeholder='search you fav.....' />
            </div>
            <div className='circle_main_div'>
                <div className='circle_div'>
                    <div className="square">
                        <img src='/images/shirt.webp' alt='ring' />
                    </div>
                    <h2 className='square_text'>Shirts</h2>
                </div>
                <div className='circle_div'>
                    <div className="square">
                        <img src='/images/pants.webp' alt='ring' />
                    </div>
                    <h2 className='square_text'>Pants</h2>
                </div>
                <div className='circle_div'>
                    <div className="square">
                        <img src='/images/t-shirts.webp' alt='ring' />
                    </div>
                    <h2 className='square_text'>t-shirts</h2>
                </div>
                <div className='circle_div'>
                    <div className="square">
                        <img src='/images/hoodies.webp' alt='ring' />
                    </div>
                    <h2 className='square_text'>hoodies</h2>
                </div>
            </div>
            <div className='banner_main_div'>
                <div>
                    <Splide aria-label="My Favorite Images"
                        options={{
                            type: 'loop',          // makes it infinite
                            autoplay: true,        // enables auto slide
                            interval: 2000,        // time between slides (in ms)
                            speed: 500,           // transition speed (in ms)
                            pauseOnHover: true,    // pauses when hovering
                            arrows: false,         // hides prev/next arrows
                            pagination: true,      // shows dots
                            perPage: 1,
                            pauseOnFocus: true,
                            rewind: true,      // one image at a time
                        }}
                    >
                        <SplideSlide>
                            <div className='ban_slide'>
                                <img src="/images/shirt.webp" alt='image1' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='ban_slide'>
                                <img src='/images/t-shirts.webp' alt="image2" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='ban_slide'>
                                <img src='/images/hoodies.webp' alt="image2" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='ban_slide'>
                                <img src='/images/t-shirts.webp' alt="image2" />
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            <div className="poster_main">
                <h2>Trending Collection</h2>
                <div className='posters'>
                    <img src='./images/1.png' alt='poster 1' className='poster_img' />
                </div>
                <div className='posters'>
                    <img src='./images/2.png' alt='poster 1' className='poster_img' />
                </div>
                <div className='posters'>
                    <img src='./images/3.png' alt='poster 1' className='poster_img' />
                </div>
            </div>


            <div className='mostly_main_div'>
                <div className='mostly_text_filter'>
                    <h2 className='mostly_text'>Mostly Bought</h2>
                    <HiAdjustments onClick={() => dispatch(setfiltershow(true))} size={28} className='filter_icon' />
                </div>
                <div className='mostly_div'>
                    <h6 className='shirts_text'>Shirts</h6>
                    {loading && <h2>Loading....</h2>}
                    <div className='categeroius_scroller'>
                        {shirts && shirts.slice(0, 6).map((item) => (
                            <div className='mostly_content_div' key={item.id}>
                                <img className='mostly_images' src={item.image} alt={item.productName} />
                                <p className='mostly_name'>{item.name}</p>
                                <div className='price_div'>
                                    <h5 className='mostly_offerprice'>₹{item.price}</h5>
                                    <h4 className='mostly_price'>₹{item.offer_price}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='mostly_div'>
                    <h6 className='shirts_text'>Skirts</h6>
                    {loading && <h2>Loading....</h2>}
                    <div className='categeroius_scroller'>
                        {dresses && dresses.slice(0, 6).map((item) => (
                            <div className='mostly_content_div' key={item.id}>
                                <img className='mostly_images' src={item.image} alt={item.productName} />

                            </div>
                        ))}
                    </div>
                </div>

                <div className='mostly_div'>
                    <h6 className='shirts_text'>Hoodies</h6>
                    {loading && <h2>Loading....</h2>}
                    <div className='categeroius_scroller'>
                        {hoodies && hoodies.slice(0, 6).map((item) => (
                            <div className='mostly_content_div' key={item.id}>
                                <img className='mostly_images' src={item.image} alt={item.productName} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className='trending_main_div'>
                <div>
                    <h2 className='ourCollection_text'>Our Collection</h2>
                    <Splide aria-label="My Favorite Images"
                        options={{
                            type: 'loop',          // makes it infinite
                            autoplay: true,        // enables auto slide
                            interval: 2000,        // time between slides (in ms)
                            speed: 500,           // transition speed (in ms)
                            pauseOnHover: true,    // pauses when hovering
                            arrows: false,         // hides prev/next arrows
                            pagination: true,      // shows dots
                            perPage: 1,
                            pauseOnFocus: true,
                            rewind: true,      // one image at a time
                        }}
                    >
                        <SplideSlide>
                            <div className='poster_slide'>
                                <img src="/images/shirt.webp" alt='image1' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='poster_slide'>
                                <img src='/images/t-shirts.webp' alt="image2" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='poster_slide'>
                                <img src='/images/hoodies.webp' alt="image2" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='poster_slide'>
                                <img src='/images/t-shirts.webp' alt="image2" />
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            <div className='mostly_div'>
                <h6 className='shirts_text'>More products</h6>
                {loading && <h2>Loading....</h2>}
                <div className='categeroius_scroller'>
                    {product && product.slice(0, 6).map((item) => (
                        <div className='mostly_content_div' key={item.id}>
                            <img className='mostly_images' src={item.image} alt={item.productName} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='footer_div'>
                <div className='faq_div'>
                    <h2>FAQ</h2>
                    <p>Is there cash on devilery availble</p>
                    <p>Return policy</p>
                    <p>How we trust you</p>
                    <p>How much gold is mixed in jewellery</p>
                </div>
                <div className='followHome_main'>
                    <h2>Contact-us</h2>
                    <p>Marih enterprices</p>
                    <p>machinaabhiram@gmail.com</p>
                    <p>91+ 00000 00000</p>
                    <p>Bhimavaram,mavullama gudi temple</p>

                    <div className='home_follow_us'>
                        <FaInstagram size={22} />
                        <p>Instagram</p>
                        <FaYoutube size={22} />
                        <p>Youtube</p>
                        <FaFacebookF size={22} />
                        <p>Facebook</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
