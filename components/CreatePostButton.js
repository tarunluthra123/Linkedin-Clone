import React from "react";

const CreatePostButtons = ({ title, Icon, color }) => {
    return (
        <div className="flex items-center w-auto cursor-pointer hover:bg-gray-200 p-2">
            <Icon className={"h-8 mr-1 " + color} />
            <span className="font-bold text-gray-500">{title}</span>
        </div>
    );
};

export default CreatePostButtons;
