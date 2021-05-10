import React from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import CreatePost from "../components/CreatePost";

const Home = () => {
    return (
        <div className="bg-lightgray h-screen">
            <Header />
            <main className="mt-20 pt-10 flex justify-around w-screen">
                <ProfileCard />

                {/* Feed */}
                <section className="flex-shrink-0">
                    <CreatePost />
                </section>

                {/* News */}
                <section className="flex-shrink-0">News here</section>
            </main>
        </div>
    );
};

export default Home;
