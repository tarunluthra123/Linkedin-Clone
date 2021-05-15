import React, { useEffect } from "react";
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import Header from "../components/Header";
import {getUser}from "../utils/getuser";

const Me = (props) => {
    const user = getUser();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/signin");
        }
    }, [user]);

    if (!user) {
        return <LoadingPage />;
    }

    return (
        <div className="h-screen w-full">
            <Header />
            <main className="mt-20 pt-10 w-auto flex flex-wrap justify-around px-1 h-screen mx-auto xl:px-80 xl:flex-nowrap">
                Me
            </main>
        </div>
    );
};

export default Me;
