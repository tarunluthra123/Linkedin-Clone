import React from "react";

const ProfileCard = () => {
    return (
        <div className="flex flex-col relative w-64 ml-1 rounded-md overflow-hidden border-2 border-solid border-gray-200">
            <div className="h-12 bg-grayblue"></div>
            <img
                src="/jackjack.jpeg"
                className="rounded-full absolute top-5 left-24 border-2 border-white border-solid"
                height="72px"
                width="72px"
            />
            <div className="text-black h-32 pt-14 bg-gray-50">
                <h6 className="font-bold text-lg text-center">Tarun Luthra</h6>
                <p className="text-gray-500 text-center text-sm">
                    MERN Stack Developer
                </p>
            </div>
            <hr />
            <div className="bg-gray-50 px-5 py-5">
                <p className="text-sm font-bold text-gray-500">
                    Who viewed your profile
                    <span className="text-blue-600 font-bold pl-3">58</span>
                </p>
                <p className="text-sm font-bold text-gray-500 mt-1">
                    Views of your post
                    <span className="text-blue-600 font-bold pl-3">389</span>
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
