import React from "react";
import CredentialInputBox from "../components/CredentialInputBox";
import Link from "next/link";

const Signup = () => {
    return (
        <div className="pt-32 px-20">
            <img src="/blue-linkedin-logo.png" className="h-10 mx-auto" />
            <h3 className="text-black text-3xl mt-4">
                Make the most of your professional life
            </h3>

            <CredentialInputBox title={"Email"} type="email" />
            <CredentialInputBox title="Password" type="password" />

            <button className="bg-blue-500 text-white text-xl w-full rounded-full px-6 py-4 hover:bg-blue-600 mt-5">
                Sign up
            </button>
            <button className="text-blue-500 bg-white text-xl w-full rounded-full px-44 py-4 font-bold flex items-center justify-around border-2 border-solid border-blue-500 mt-4 hover:bg-blue-100">
                <img src="/google_logo.png" className="h-8" />
                Join with Google
            </button>

            <div className="text-center text-black text-lg mt-10">
                Already on LinkedIn?{" "}
                <span className="font-bold text-blue-500">
                    <Link href="/signin">Sign in</Link>
                </span>
            </div>
        </div>
    );
};

export default Signup;
