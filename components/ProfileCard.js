import React from "react";
import getUser from "../utils/getuser";

const ProfileCard = () => {
    const user = getUser();

    return (
        <div className="flex-shrink-0 flex flex-col relative w-64 ml-1 rounded-md overflow-hidden border-2 border-solid border-gray-200 profile-card">
            <div className="h-12 bg-grayblue"></div>
            <span className="absolute flex items-center justify-center mt-5 center w-full h-auto">
                <img
                    src={user.photoURL}
                    className="rounded-full border-2 border-white border-solid"
                    height="72px"
                    width="72px"
                    alt={user.displayName}
                />
            </span>
            <div className="text-black h-32 pt-14 bg-gray-50">
                <h6 className="font-bold text-lg text-center">
                    {user.displayName}
                </h6>
                <p className="text-gray-500 text-center text-sm">
                    {user.about || "LinkedIn User"}
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
