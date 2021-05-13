import { db } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { setFeed } from "../redux/feed";

export function getFeed() {
    const dispatch = useDispatch();
    const feed = useSelector((state) => state.feed.posts);

    if (feed.length > 0) return feed;

    db.collection("feedposts").onSnapshot((snapshot) => {
        const feed = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            feed.push({
                ...data,
                id: doc.id,
                time: data.time.toJSON(),
            });
        });

        dispatch(setFeed(feed));
    });

    return [];
}
