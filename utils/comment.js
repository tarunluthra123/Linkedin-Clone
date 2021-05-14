import { db } from "./firebase";

function randomIdGenerator() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

export default async function addComment({
    author,
    content,
    pid,
    prevComments,
}) {
    console.log({ author, content, pid, prevComments });
    const feedpostRef = db.collection("feedposts").doc(pid);
    const newComment = JSON.stringify({
        author,
        content,
        id: randomIdGenerator(),
    });
    return feedpostRef.update({
        comments: [...prevComments, newComment],
    });
}
