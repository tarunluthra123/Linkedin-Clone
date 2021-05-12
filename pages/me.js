import React, { useEffect } from "react";
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Me = (props) => {
    const user = useSelector((state) => state.auth.user);
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
