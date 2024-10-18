import React from "react";

export const ServiceCard = ({ img, title, info }) => {
    return (
        <div className="w-[270px] text-center px-[26px] pt-[56px] pb-[45px] shadow-md">
            <img className="mx-auto mb-[27px]" src={img}/>
                <h3 className="font-semibold text-[22px] text-[#1a0b5b] mb-[20px]">{title}</h3>
                <p className="font-bold text-[16px] text-[#BAB6CE] leading-[160%]">{info}</p>
        </div>
    )
}