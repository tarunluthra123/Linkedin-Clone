import React, { useState } from "react";
import CredentialInputBox from "../components/CredentialInputBox";
import Link from "next/link";
import { auth } from "../utils/firebase";
import { login } from "../redux/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const router = useRouter();

    function onChange(e) {
        e.preventDefault();
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [e.target.type]: e.target.value,
        }));
    }

    function createUser() {
        auth.createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
            .then(async (userCredentials) => {
                const user = userCredentials.user;
                console.log(user);
                dispatch(login(user));

                const currentUser = auth.currentUser;

                await currentUser.updateProfile({
                    displayName: credentials.name,
                });

                router.push("/home");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="pt-32 px-20 lg:px-40 xl:px-60 2xl:px-30%">
            <Link href="/">
                <img src="/blue-linkedin-logo.png" className="h-10 mx-auto" />
            </Link>
            <h3 className="text-black text-3xl mt-4">
                Make the most of your professional life
            </h3>

            <CredentialInputBox title="Name" type="text" onChange={onChange} />

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
                className="bg-blue-500 text-white text-xl w-full rounded-full px-6 py-4 hover:bg-blue-600 mt-5 focus:outline-none focus:ring"
                onClick={createUser}
            >
                Sign up
            </button>
            <button className="text-blue-500 bg-white text-xl w-full rounded-full px-44 py-4 font-bold flex items-center justify-center border-2 border-solid border-blue-500 mt-4 hover:bg-blue-100 focus:outline-none focus:ring">
                <img src="/google_logo.png" className="h-8 mx-3" />
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