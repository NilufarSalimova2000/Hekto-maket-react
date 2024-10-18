import React from "react";
import { EmailIcon } from "../../assets/icons/email-icon";
import { TelIcon } from "../../assets/icons/tel-icon";
import { UserIcon } from "../../assets/icons/user-icon";
import { LikeIcon } from "../../assets/icons/like-icon";
import { CartIcon } from "../../assets/icons/cart-icon";
import { SearchIcon } from "../../assets/icons/search-icon";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Navbar } from "./components/navbar";

export const Header = () => {
    return (
        <header>
            <div className="bg-violet py-[15px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-[48px]">
                            <div className="flex gap-[10px] items-center">
                                <button className="">
                                    <EmailIcon />
                                </button>
                                <a className="font-semibold text-[16px] text-[#f1f1f1]" href="#">mhhasanul@gmail.com</a>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <button className="">
                                    <TelIcon />
                                </button>
                                <a className="font-semibold text-[16px] text-[#f1f1f1]" href="#">(12345)67890</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <select className="border-none bg-transparent font-semibold text-[16px] text-[#f1f1f1] outline-none"
                                name="select" id="select">
                                <option value="English">English</option>
                                <option value="uzbek">Uzbek</option>
                            </select>
                            <select className="border-none bg-transparent font-semibold text-[16px] text-[#f1f1f1] outline-none"
                                name="select" id="select">
                                <option value="English">USD</option>
                                <option value="uzbek">EURO</option>
                            </select>
                            <Link to={"/profile"} className="font-semibold text-[16px] text-[#f1f1f1] flex items-center gap-[3px]">Login
                                <button className="ml-[3px]">
                                    <UserIcon />
                                </button>
                            </Link>
                            <Link className="font-semibold text-[16px] text-[#f1f1f1] flex items-center gap-[3px]">Wishlist
                                <button>
                                    <LikeIcon />
                                </button>
                            </Link>
                            <button>
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[19px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Link to={"/"}>
                            <img src={Logo} alt="logo" />
                        </Link>
                        <Navbar />
                        <form className="flex">
                            <input className="w-[266px] h-[40px] border-solid border-[2px] border-[#e7e6ef] px-[15px] outline-[#FB2E86]"
                                type="text"/>
                            <button className="w-[51px] h-[40px] bg-[#FB2E86] py-[8px] px-[13px]" href="#">
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}