import React from "react";
import CreatePostButton from "./CreatePostButton";
import { PhotographIcon, PlayIcon } from "@heroicons/react/solid";
import { NewspaperIcon, CalendarIcon } from "@heroicons/react/outline";
import getUser from "../utils/getuser";

const CreatePost = () => {
    const user = getUser();

    return (
        <div className="bg-gray-50 w-30rem h-36 mx-10 rounded-md border-2 border-solid border-gray-200">
            <div className="flex justify-around items-center h-1/2 w-full py-10 px-5 text-gray-700">
                <img
                    src={user.photoURL}
                    height="50px"
                    width="50px"
                    className="rounded-full"
                    alt={user.displayName}
                />
                <input
                    className="rounded-full py-3 px-6 h-12 ml-2 w-11/12 font-bold text-gray-700 outline-none border-2 border-solid border-gray-300"
                    placeholder="Start a post"
                    type="text"
                />
            </div>
            <div className="h-1/2 px-5 flex justify-around pb-5">
                <CreatePostButton
                    title={"Photo"}
                    Icon={PhotographIcon}
                    color="text-blue-300"
                />
                <CreatePostButton
                    title={"Video"}
                    Icon={PlayIcon}
                    color="text-green-500"
                />
                <CreatePostButton
                    title={"Event"}
                    Icon={CalendarIcon}
                    color="text-yellow-500"
                />
                <CreatePostButton
                    title={"Write article"}
                    Icon={NewspaperIcon}
                    color="text-red-300"
                />
            </div>
        </div>
    );
};

export default CreatePost;
