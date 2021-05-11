import React from "react";
import { ThumbUpIcon as ThumbUpIconSolid } from "@heroicons/react/solid";

const Comment = ({ author, content }) => {
    return (
        <div className="flex">
            <img
                src={author.photoUrl}
                alt={author.name}
                height="50px"
                width="50px"
                className="rounded-full h-12 mr-4"
            />
            <div className="">
                <div className="bg-gray-200 rounded-tr-lg rounded-b-lg text-base text-black px-4 py-3">
                    <h6 className="text-base font-bold text-black">
                        {author.name}
                    </h6>
                    <p className="truncate text-sm text-gray-500 mb-2">
                        {author.about}
                    </p>
                    {content}
                </div>
                <div className="flex px-4 py-3 w-1/4 justify-around items-center">
                    <span className="hover:bg-gray-300 p-0.5 cursor-pointer rounded-md">
                        Like
                    </span>
                    •{" "}
                    <ThumbUpIconSolid className="h-5 bg-blue-400 text-white rounded-full w-5 p-0.5" />{" "}
                    1
                </div>
            </div>
        </div>
    );
};

export default Comment;
