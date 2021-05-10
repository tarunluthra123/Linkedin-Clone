import React from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
    return (
        <div className="bg-lightgray h-screen">
            <Header />
            <main className="relative mt-20 pt-10">
                <ProfileCard />
            </main>
        </div>
    );
};

export default Home;
