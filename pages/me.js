import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";

const Me = () => {
    const user = useSelector((state) => state.auth.user);
    const router = useRouter();

    return <LoadingPage />;
};

export default Me;
