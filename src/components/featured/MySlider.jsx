import React from "react";
import Slider from 'react-slick';

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const MySlider = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    };

    const slides = [slide_one, slide_two, slide_three];

    return (
        <div className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            <Slider
                {...settings}
            >
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div className="carrousel_image"
                            style={{
                                background: `url(${slide})`,
                                height: `${window.innerHeight}px`
                            }}
                        >
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
 
export default MySlider;