import React, { useState, useEffect } from "react";
import CredentialInputBox from "../components/CredentialInputBox";
import Link from "next/link";
import { auth, googleSignIn } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth";
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import { setCookie } from "nookies";
import { getUser } from "../utils/getuser";

const SignIn = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const user = getUser();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/home");
        }
    });

    if (user) {
        return <LoadingPage />;
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

                setCookie(null, "linkedin-user", JSON.stringify(user), {
                    maxAge: 60 * 60,
                });

                Router.push("/home");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    function signInGoogle() {
        googleSignIn()
            .then((result) => {
                const user = result.user;

                dispatch(login(user));
                setCookie(null, "linkedin-user", JSON.stringify(user), {
                    maxAge: 60 * 60,
                });

                router.push("/home");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    return (
        <div className="mx-32 md:mx-40 my-44 lg:px-40 xl:px-60 2xl:px-96">
            <Link href="/">
                <img
                    src="/linkedin_logo_blue.png"
                    alt="Linkedin"
                    height="20px"
                    className="h-8 mb-3 cursor-pointer"
                />
            </Link>
            <div className="bg-white h-auto shadow-xl p-7  rounded-md">
                <h2 className="text-black text-3xl font-bold lg:text-4xl">
                    Sign in
                </h2>
                <p className="text-gray-700 text-md lg:text-lg">
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

                    {errorMessage && (
                        <div className="h-auto w-full p-4  text-red-500 text-base font-bold rounded-md">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        className="bg-blue-500 text-white text-base xl:text-lg rounded-full px-8 py-5 w-full mt-5 focus:outline-none focus:ring hover:bg-blue-600"
                        onClick={submit}
                    >
                        Sign in
                    </button>

                    <button
                        className="text-blue-500 bg-white text-base xl:text-lg w-full rounded-full px-30% py-4 font-bold flex items-center justify-center border-2 border-solid border-blue-500 mt-4 hover:bg-blue-100 focus:outline-none focus:ring"
                        onClick={signInGoogle}
                    >
                        <img src="/google_logo.png" className="h-8 mx-3" />
                        Join with Google
                    </button>
                </div>
            </div>
            <div className="mt-10 text-center mx-auto text-black text-base lg:text-lg">
                New to Linkedin?{" "}
                <span className="font-bold text-blue-500">
                    <Link href="/signup">Join now</Link>
                </span>
            </div>
        </div>
    );
};

export default SignIn;
