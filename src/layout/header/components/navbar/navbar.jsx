import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="flex gap-[35px]">
            <Link className="font-normal leading-[125%] text-[16px] text-[#0d0e43] hover:text-accent" to={"/"}>Home</Link>
            <Link className="font-normal leading-[125%] text-[16px] text-[#0d0e43] hover:text-accent" to={"/pages"}>Pages</Link>
            <Link className="font-normal leading-[125%] text-[16px] text-[#0d0e43] hover:text-accent" to={"/products"}>Products</Link>
            <Link className="font-normal leading-[125%] text-[16px] text-[#0d0e43] hover:text-accent" to={"/blogs"}>Blog</Link>
            <Link className="font-normal leading-[125%] text-[16px] text-[#0d0e43] hover:text-accent" to={"/shop"}>Shop</Link>
            <Link className="font-normal leading-[125%] text-[16px] text-[#0d0e43] hover:text-accent" to={"/contact"}>Contact</Link>
        </nav>
    )
}