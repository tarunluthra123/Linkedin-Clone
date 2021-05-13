import React, { useEffect, useState } from "react";
import {
    ChatAltIcon,
    ShareIcon,
    ThumbUpIcon as ThumbUpIconOutline,
} from "@heroicons/react/outline";
import {
    LightBulbIcon,
    ThumbUpIcon as ThumbUpIconSolid,
} from "@heroicons/react/solid";
import CreatePostButton from "./CreatePostButton";
import Comment from "./Comment";
import getUser from "../utils/getuser";
import { storageRef } from "../utils/firebase";

const FeedPost = ({ post }) => {
    const { author, content, photoRef, time } = post;
    const user = getUser();
    const [photoURL, setPhotoUrl] = useState(null);

    function calculateTime() {
        const now = new Date().valueOf() / 1000;
        const diff = now - time.seconds;
        let hours = diff / (60 * 60);
        if (hours < 1) {
            hours = "Less than 1";
        } else {
            hours = Math.floor(hours);
        }
        return hours + "h ago";
    }

    function getImage() {
        storageRef
            .child(photoRef)
            .getDownloadURL()
            .then((url) => {
                setPhotoUrl(url);
            });
    }

    useEffect(() => {
        if (!photoURL) {
            getImage();
        }
    });

    const calculatedTimeDifference = calculateTime();

    return (
        <div className="flex flex-col bg-gray-50 w-30rem mx-10 rounded-md border-2 border-solid border-gray-200 my-3 p-5 h-auto">
            {/* User Info */}
            <span className="flex justify-around items-center">
                <img
                    src={"/jackjack.jpeg"}
                    // TODO: get author photo
                    height="50px"
                    width="50px"
                    className="rounded-full"
                />
                <span className="w-11/12 ml-3">
                    <h6 className="text-base font-bold text-black">
                        {author.displayName}
                    </h6>
                    <p className="truncate text-sm text-gray-500">
                        {author.description || "LinkedIn user"}
                    </p>
                    <span className="text-sm text-gray-500">
                        {calculatedTimeDifference}
                    </span>
                </span>
            </span>

            {/* Content */}
            <span className="text-black text-base">
                {content}
                <img src={photoURL} className="w-8/12 m-4" />
            </span>

            {/* Like and comment values */}
            <span className="w-60 flex justify-around items-center my-3">
                <ThumbUpIconSolid className="h-6 bg-blue-400 text-white rounded-full w-6 p-1" />
                <LightBulbIcon className="h-6 bg-yellow-300 text-white rounded-full w-6 p-1" />
                <p className="text-sm text-gray-500">224 likes • 23 comments</p>
            </span>

            <hr className="mx-2" />

            {/* Like, Comment, Share Buttons*/}
            <span className="flex my-2">
                <CreatePostButton
                    Icon={ThumbUpIconOutline}
                    title="Like"
                    color="text-gray-500"
                />

                <CreatePostButton
                    Icon={ChatAltIcon}
                    title="Comment"
                    color="text-gray-500"
                />

                <CreatePostButton
                    Icon={ShareIcon}
                    title="Share"
                    color="text-gray-500"
                />
            </span>

            {/* Add comment */}
            <span className="flex my-4">
                <img
                    src={user.photoURL}
                    width="50px"
                    className="rounded-full"
                    alt={user.displayName}
                />
                <input
                    type="text"
                    className="rounded-full border-2 border-solid border-gray-500 px-6 py-3 w-11/12 ml-3 outline-none"
                    placeholder="Add a comment..."
                />
            </span>

            {/* Comments Section */}
            <Comment
                author={{
                    name: "Monkey D. Luffy",
                    photoUrl: "/luffy.jpg",
                    about: "Mugiwara",
                }}
                content={`
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos enim iure laboriosam eum, veritatis similique minus consectetur blanditiis vero suscipit totam sunt est molestias perspiciatis pariatur maxime. Rerum nisi, aut doloremque at excepturi impedit reprehenderit perferendis sit reiciendis. Itaque, sequi?`}
            />
        </div>
    );
};

export default FeedPost;
