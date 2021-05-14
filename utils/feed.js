import { db } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { setFeed } from "../redux/feed";

export function getFeed() {
    const dispatch = useDispatch();
    const feedposts = useSelector((state) => state.feed.posts);

    if (feedposts.length > 0) return feedposts;

    const unsubscribe = db
        .collection("feedposts")
        .orderBy("time", "desc")
        .onSnapshot((snapshot) => {
            const feed = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                feed.push({
                    ...data,
                    id: doc.id,
                    time: data.time.toJSON(),
                });
            });
            if (feedposts.length != feed.length) dispatch(setFeed(feed));
        });

    // unsubscribe();

    return [];
}
