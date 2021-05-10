import React from "react";

const HeaderItem = ({ title, Icon }) => {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 text-gray-600">
            <Icon className="h-7 mb-1 group-hover:text-black" />
            <p className="hidden lg:block tracking-widest text-xs">{title}</p>
        </div>
    );
};

export default HeaderItem;
