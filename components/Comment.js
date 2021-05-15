import React from "react";

const Comment = ({ comment }) => {
    const { author, content } = comment;
    return (
        <div className="flex">
            <img
                src={author.photoURL || "/user_avatar.png"}
                alt={author.displayName}
                height="50px"
                width="50px"
                className="rounded-full h-12 mr-4"
            />
            <div className="mb-5">
                <div className="bg-gray-200 rounded-tr-lg rounded-b-lg text-base text-black px-4 py-3">
                    <h6 className="text-base font-bold text-black">
                        {author.displayName}
                    </h6>
                    <p className="truncate text-sm text-gray-500 mb-2">
                        {author.description || "LinkedIn User"}
                    </p>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Comment;
