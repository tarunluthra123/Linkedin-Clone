import { db } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { setFeed } from "../redux/feed";

export function getFeed(dispatch) {
    db.collection("feedposts")
        .orderBy("time", "desc")
        .onSnapshot((snapshot) => {
            const feed = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                if (data && data.time) {
                    feed.push({
                        ...data,
                        id: doc.id,
                        time: data.time.toJSON(),
                    });
                }
            });
            dispatch(setFeed(feed));
        });
}
