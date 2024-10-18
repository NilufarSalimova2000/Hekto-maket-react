import React from "react";
import { useParams } from "react-router-dom";
import { leaProducts } from "../../data/data";
import Star from "../../assets/star.svg";
import { NotFound } from "../not-found";

export const ProductDetail = () => {
    const { id } = useParams();
    const product = leaProducts.find((item) => item.id == parseInt(id));

    if (!product) {
        return <NotFound />;
    }


    return (
        <div>
            <div className="py-[100px] bg-[#f6f5ff]">
                <div className="container">
                    <h2 className="font-bold text-[36px] text-[#101750] mb-[9px]">Product Details</h2>
                    <p className="font-medium text-[16px] text-[#000]">Home . Pages . <span className="text-accent">Product Details</span></p>
                </div>
            </div>
            <div className="py-[121px]">
                <div className="container">
                    {product && (
                        <div className="p-[13px] rounded-[2px] shadow-xl flex">
                            <div className="flex">
                                <div className="">
                                    <div className="bg-[#c4c4c4] mb-[11px]">
                                        <img className="w-[151px]" src={product.img} alt="imag" />
                                    </div>
                                    <div className="bg-[#c4c4c4] mb-[11px]">
                                        <img className="w-[151px]" src={product.img} alt="imag" />
                                    </div>
                                    <div className="bg-[#c4c4c4]">
                                        <img className="w-[151px]" src={product.img} alt="imag" />
                                    </div>
                                </div>
                                <div className="h-[100%]">
                                    <img className="w-[375px]" src={product.img} alt="imag" />
                                </div>
                            </div>
                            <div className="py-[61px] px-[41px]">
                                <h2 className="font-semibold text-[36px] text-[#0d134e] mb-[13px]">{product.title}</h2>
                                <img className="mb-[14px]" src={Star} alt="icon" />
                                <div class="flex items-center gap-[10px] mb-[40px]">
                                    <p class="font-normal text-[16px] text-[#1a0b5b]">{product.count}</p>
                                    <p class="font-normal text-[16px] text-[#FB2448] line-through pt-[4px]">{product.sale}</p>
                                </div>
                                <p className="font-semibold text-[16px] text-[#a9acc6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}