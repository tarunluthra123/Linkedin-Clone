import React, { useEffect } from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import CreatePost from "../components/CreatePost";
import News from "../components/News";
import FeedPost from "../components/FeedPost";
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import { getUser } from "../utils/getuser";
import { getFeed } from "../utils/feed";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const user = getUser();
	const router = useRouter();
	const feed = useSelector((state) => state.feed.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!user) {
			router.push("/signin");
		} else {
			getFeed(dispatch);
		}
	}, []);

	if (!user) {
		return <LoadingPage />;
	}

	return (
		<div className="h-screen w-full">
			<Header />
			<main className="mt-20 pt-10 w-auto flex flex-wrap justify-around px-1 h-screen mx-auto xl:px-80 xl:flex-nowrap">
				{/* Profile card */}
				<section className="flex-shrink-0 order-1">
					<ProfileCard />
				</section>

				{/* Feed */}
				<section className="flex-shrink-0 order-3 xl:order-2 xl:mt-0 mt-5">
					<CreatePost />
					{feed &&
						feed.length > 0 &&
						feed.map((post) => (
							<FeedPost key={post.id} post={post} />
						))}
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
