import React from "react";
import Router from "next/router";

const HeaderItem = ({ title, Icon, redirect }) => {
    return (
        <div
            className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 text-gray-600"
            onClick={() => {
                redirect && Router.push(redirect);
            }}
        >
            <Icon className="h-7 mb-1 group-hover:text-black" />
            <p className="hidden lg:block tracking-widest text-xs">{title}</p>
        </div>
    );
};

export default HeaderItem;
