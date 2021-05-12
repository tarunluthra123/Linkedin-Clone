import React, { useState } from "react";
import CredentialInputBox from "../components/CredentialInputBox";
import Link from "next/link";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

const SignIn = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    if (user) {
        Router.push("/home");
        return;
    }

    function onChange(e) {
        e.preventDefault();
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [e.target.type]: e.target.value,
        }));
    }

    function submit() {
        auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(login(user));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="mx-40 my-44 lg:px-40 xl:px-60 2xl:px-96">
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
                <div className="mt-4">
                    <CredentialInputBox
                        title="Email"
                        type="email"
                        onChange={onChange}
                    />
                    <CredentialInputBox
                        title="Password"
                        type="password"
                        onChange={onChange}
                    />
                    <button
                        className="bg-blue-500 text-white text-base rounded-full px-8 py-3 w-full mt-5"
                        onClick={submit}
                    >
                        Sign in
                    </button>
                </div>
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
