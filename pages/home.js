import React from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import CreatePost from "../components/CreatePost";
import News from "../components/News";
import FeedPost from "../components/FeedPost";

const Home = () => {
    return (
        <div className="h-screen w-full">
            <Header />
            <main className="mt-20 pt-10 w-auto flex flex-wrap justify-around px-1 h-screen mx-auto xl:px-80 xl:flex-nowrap">
                {/* Profile card */}
                <section className="flex-shrink-0 order-1">
                    <ProfileCard />
                </section>

                {/* Feed */}
                <section className="flex-shrink-0 order-3 xl:order-2">
                    <CreatePost />
                    <FeedPost />
                </section>

                {/* News */}
                <section className="flex-shrink-0 order-2 xl:order-3">
                    <News />
                </section>
            </main>
        </div>
    );
};

export default Home;
