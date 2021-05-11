import React from "react";

const NewsItem = ({ heading, description }) => {
    return (
        <li className="text-base">
            <span className="font-bold text-gray-900">{heading}</span>
            <p className="text-gray-500 text-sm ml-6">{description}</p>
        </li>
    );
};

export default NewsItem;
