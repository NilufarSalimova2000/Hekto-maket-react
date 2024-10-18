import React from "react";
import Slider from "react-slick";
import imag1 from "../../assets/banner_img1.png";

export const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="w-[1300px] mx-auto">
                <div className="flex items-center ">
                    <div>
                        <h2 className="font-bold leading-[175%] text-[16px] text-accent mb-[12px]">Best Furniture For Your Castle....</h2>
                        <h1 className="font-bold text-[53px] text-[#000] mb-[12px] max-w-[640px]">New Furniture Collection Trends in 2020</h1>
                        <p className="font-bold text-[16px] leading-[175%] text-subTextColor w-[600px] mb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                        <a class="font-bold text-[17px] text-[#FFFFFF] rounded-[2px] bg-[#FB2E86] py-[16px] px-[40px]" href="#">Shop Now</a>
                    </div>
                    <img src={imag1} alt="imag" />
                </div>
            </div>
            <div>
                <div className="flex items-center ">
                    <div>
                        <h2 className="font-bold leading-[175%] text-[16px] text-accent mb-[12px]">Best Furniture For Your Castle....</h2>
                        <h1 className="font-bold text-[53px] text-[#000] mb-[12px] max-w-[640px]">New Furniture Collection Trends in 2020</h1>
                        <p className="font-bold text-[16px] leading-[175%] text-subTextColor w-[600px] mb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                        <a class="font-bold text-[17px] text-[#FFFFFF] rounded-[2px] bg-[#FB2E86] py-[16px] px-[40px]" href="#">Shop Now</a>
                    </div>
                    <img src={imag1} alt="imag" />
                </div>
            </div>
            <div>
                <div className="flex items-center ">
                    <div>
                        <h2 className="font-bold leading-[175%] text-[16px] text-accent mb-[12px]">Best Furniture For Your Castle....</h2>
                        <h1 className="font-bold text-[53px] text-[#000] mb-[12px] max-w-[640px]">New Furniture Collection Trends in 2020</h1>
                        <p className="font-bold text-[16px] leading-[175%] text-subTextColor w-[600px] mb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                        <a class="font-bold text-[17px] text-[#FFFFFF] rounded-[2px] bg-[#FB2E86] py-[16px] px-[40px]" href="#">Shop Now</a>
                    </div>
                    <img src={imag1} alt="imag" />
                </div>
            </div>
        </Slider>

    )
}