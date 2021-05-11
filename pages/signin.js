import React from "react";
import CredentialInputBox from "../components/CredentialInputBox";
import Link from "next/link";

const SignIn = (props) => {
    return (
        <div className="mx-44 my-44 ">
            <Link href="/">
                <img
                    src="/blue-linkedin-logo.png"
                    alt="Linkedin"
                    height="20px"
                    className="h-8 mb-3 cursor-pointer"
                />
            </Link>
            <div className="bg-white h-auto shadow-xl p-7  rounded-md">
                <h2 className="text-black text-3xl font-bold">Sign in</h2>
                <p className="text-gray-700 text-md">
                    Stay updated on your professional world
                </p>
                <form className="mt-4">
                    <CredentialInputBox title="Email or Phone" type="text" />
                    <CredentialInputBox title="Password" type="password" />
                    <button className="bg-blue-500 text-white text-base rounded-full px-8 py-3 w-full mt-5">
                        Sign in
                    </button>
                </form>
            </div>
            <div className="mt-10 text-center mx-auto text-black text-base">
                New to Linkedin?{" "}
                <span className="font-bold text-blue-500">
                    <Link href="/signup">Join now</Link>
                </span>
            </div>
        </div>
    );
};

export default SignIn;
