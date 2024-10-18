import React from "react";
import icon from "../../../assets/product_icon.svg";

export const FeaturedProduct = ({img, title, info, count}) => {
    return (
        <div className="w-[270px]  text-center shadow-md hover:bg-[#2F1AC4] ease-in duration-300">
            <div className="bg-[#f6f7fb] pt-[46px] pb-[12px] ">
                <img className="mx-auto" src={img} alt="imag" />
            </div>
            <div className="py-[15px]">
                <h3 className="font-bold text-[18px] text-[#FB2E86] mb-[12px]">{title}</h3>
                <img className="mx-auto mb-[12px]" src={icon} alt="icon" />
                <p className="font-normal text-[14px] text-[#151875] mb-[12px]">{info}</p>
                <p className="font-normal text-[14px] text-[#151875] mb-[12px]">${count}</p>
            </div>
        </div>
    )
}