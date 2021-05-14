import React, { useRef, useState } from "react";
import CreatePostButton from "./CreatePostButton";
import { PhotographIcon, PlayIcon, XIcon } from "@heroicons/react/solid";
import {
    NewspaperIcon,
    CalendarIcon,
    PaperClipIcon,
} from "@heroicons/react/outline";
import getUser from "../utils/getuser";
import createPost from "../utils/post";

const CreatePost = () => {
    const user = getUser();
    const fileRef = useRef();
    const contentRef = useRef();
    const [photoFile, setPhotoFile] = useState(null);
    const [inputSpanSelected, setInputSpanSelected] = useState(false);

    function submitPost() {
        const content = contentRef?.current?.innerText;

        createPost({
            content,
            photoFile,
            user,
        });

        contentRef.current.innerText = "";
        setPhotoFile(null);
        fileRef.current.value = null;
    }

    function onPhotoUpload(event) {
        setPhotoFile(event.target.files[0]);
    }

    return (
        <div className="bg-gray-50 w-30rem min-h-36 mx-10 rounded-md border-2 border-solid border-gray-200">
            <div className="flex justify-around items-center h-1/2 w-full py-8 px-5 text-gray-700 relative">
                <img
                    src={user.photoURL}
                    height="50px"
                    width="50px"
                    className="rounded-full"
                    alt={user.displayName}
                />
                <span
                    className={
                        "py-3 px-6 min-h-12 ml-2 w-11/12 font-bold  outline-none border-2 border-solid border-gray-300 h-max-content resize block " +
                        (inputSpanSelected ? "rounded-md" : "rounded-full")
                    }
                    contentEditable
                    ref={contentRef}
                    onSelect={() => {
                        setInputSpanSelected(true);
                    }}
                    onBlur={() => {
                        setInputSpanSelected(false);
                    }}
                ></span>
                {!inputSpanSelected &&
                    contentRef?.current?.innerText?.length == 0 && (
                        <span className="text-gray-400 absolute left-24">
                            Start a post
                        </span>
                    )}
            </div>
            <div className="h-1/2 px-5 flex justify-around pb-5">
                <input
                    name="photoURL"
                    type="file"
                    className="hidden"
                    ref={fileRef}
                    onChange={onPhotoUpload}
                />
                <CreatePostButton
                    title={"Photo"}
                    Icon={PhotographIcon}
                    color="text-blue-300"
                    onClick={() => {
                        fileRef?.current.click();
                    }}
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

            <div className="px-5 pb-4 flex justify-around items-center">
                {photoFile && (
                    <div className="h-1/2 px-10 mb-2 flex items-center">
                        <PaperClipIcon className="h-8 text-gray-500" />{" "}
                        {photoFile.name}
                        <XIcon
                            className="h-4 text-red-500 cursor-pointer"
                            onClick={() => {
                                setPhotoFile(null);
                            }}
                        />
                    </div>
                )}
                <button
                    className="bg-blue-500 text-white text-base font-bold rounded-md px-4 py-2 hover:text-blue-500 hover:bg-blue-50 border-2 border-solid border-blue-500"
                    onClick={submitPost}
                >
                    Create Post
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
