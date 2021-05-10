import React from "react";
import Image from "next/image";
import {
    SearchIcon,
    HomeIcon,
    BriefcaseIcon,
    BellIcon,
    ChatIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <div className="h-20 bg-white flex justify-between px-8 sm:px-10 md:px-28 lg:px-36 2xl:px-60 z-10 fixed w-screen top-0">
            <div className="flex items-center justify-evenly min-w-10/100 focus-within:w-2/4 ">
                <img
                    src={"/linkedin_logo.png"}
                    className="min-h-6 max-h-10"
                    layout="fixed"
                />
                <div className="hidden lg:inline h-12 mx-2 xl:ml-5 relative rounded-md shadow-sm focus-within:w-52 focus-within:w-30vw focus-within:scale-100 transition-duration-100 transition-all  ease-out">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-black w-full">
                        <SearchIcon className="h-4 mb-1" />
                    </div>
                    <input
                        type="text"
                        className="h-full block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md outline-none bg-blue-50 
                        "
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="flex justify-evenly items-center lg:min-w-70/100 xl:min-w-60/100">
                <div className="lg:hidden">
                    <HeaderItem Icon={SearchIcon} title={"Search"} />
                </div>
                <HeaderItem Icon={HomeIcon} title="Home" />
                <HeaderItem Icon={UsersIcon} title="My Network" />
                <HeaderItem Icon={BriefcaseIcon} title="Jobs" />
                <HeaderItem Icon={ChatIcon} title="Messaging" />
                <HeaderItem Icon={BellIcon} title="Notification" />
                <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 text-gray-600">
                    <img
                        src={"/jackjack.jpeg"}
                        height="40"
                        width="40"
                        className="rounded-full"
                    />
                    <p className="hidden lg:block tracking-widest text-xs">
                        Me
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
