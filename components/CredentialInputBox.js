import React, { useState } from "react";

const CredentialInputBox = ({ title, type }) => {
    return (
        <div className="w-full h-14 text-gray-400 my-5 relative group  sign-in-form-input p-0">
            <input
                type={type}
                id={title}
                className="w-full outline-none text-black pl-4 pt-2 h-16 rounded-md border-2 border-gray-400 border-solid mt-0"
            />
            <label
                for={title}
                className="cursor-none absolute transition-all transition-duration-100 ease-in-out left-4 top-4 text-base"
            >
                {title}
            </label>
        </div>
    );
};

export default CredentialInputBox;
