import React from "react";

export const LeatestProduct = ({ img, title, count, sale }) => {
    return (
        <div className="w-[360px]">
            <div class="bg-[#f7f7f7] pt-[33px] pb-[8px]">
                <img class="mx-auto w-[223px] h-[229px]" src={img} />
            </div>
            <div class="pt-[15px] bg-[#fff] flex items-center justify-between">
                <h3 class="font-normal text-[16px] text-[#1a0b5b] border-b-solid border-b-[2px] border-[#EEEFFB] pb-[4px]">{title}</h3>
                <div class="flex items-center gap-[10px]">
                    <p class="font-normal text-[14px] text-[#1a0b5b]">{count}</p>
                    <p class="font-normal text-[12px] text-[#FB2448] line-through pt-[4px]">{sale}</p>
                </div>
            </div>
        </div>
    )
}