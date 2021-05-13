import { db, storageRef, timestamp } from "./firebase";

async function uploadPhoto(photoFile) {
    const photoRef = storageRef.child(photoFile.name);
    const response = await photoRef
        .put(photoFile, {
            contentType: "image/jpeg",
        })
        .then((snapshot) => {
            return photoRef;
        })
        .catch((error) => {
            return error;
        });
    return response;
}

export default async function createPost(
    { content, photoFile, user } = { content: "", photoFile: null, user: {} }
) {
    if (photoFile) {
        var photoRef = await uploadPhoto(photoFile);
    }

    const author = {
        displayName: user.displayName,
        description: user.description || "",
        uid: user.uid,
        photoURL: user.photoURL,
    };

    const time = new timestamp();

    const newPost = {
        author,
        content,
        time,
    };

    if (photoRef) {
        newPost.photoRef = photoRef.fullPath;
    }

    try {
        const newFeedPostRef = db.collection("feedposts").doc();

        await newFeedPostRef.set(newPost);
    } catch (error) {
        console.error("Feedpost creation error = ", error);
    }

    return null;
}
