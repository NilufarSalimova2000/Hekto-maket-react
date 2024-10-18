import React from "react";
import Imag from "../../assets/not_found.svg";

export const NotFound = () => {
    return (
        <div className="container">
            <div className="text-center py-[100px] flex flex-col items-center justify-center">
                <img src={Imag} alt="imag" />
                <h2>Sizning so'rovingiz bo'yicha hech narsa topilmadi</h2>
            </div>
        </div>
    )
}