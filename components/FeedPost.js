import { useEffect, useState, useRef } from "react";
import {
	ChatAltIcon,
	ShareIcon,
	ThumbUpIcon as ThumbUpIconOutline,
} from "@heroicons/react/outline";
import {
	ArrowCircleRightIcon,
	LightBulbIcon,
	ThumbUpIcon as ThumbUpIconSolid,
} from "@heroicons/react/solid";
import CreatePostButton from "./CreatePostButton";
import Comment from "./Comment";
import { getUser } from "../utils/getuser";
import { storageRef } from "../utils/firebase";
import addComment from "../utils/comment";

const FeedPost = ({ post }) => {
	const { author, content, photoRef, time, comments } = post;
	const user = getUser();
	const [photoURL, setPhotoUrl] = useState(null);
	const [text, setText] = useState("");

	function calculateTime() {
		if (time && time.seconds) {
			const now = new Date().valueOf() / 1000;
			const diff = now - time.seconds;
			let hours = diff / (60 * 60);
			if (hours < 1) {
				hours = "Less than 1";
			} else {
				hours = Math.floor(hours);
			}

			if (hours < 24 || hours == "Less than 1") {
				return hours + "h ago";
			}
			const days = Math.floor(hours / 24);
			if (days == 1) return "1 day ago";

			console.log({ days, hours });

			return days + " days ago";
		}
		return "Just now";
	}

	function getImage() {
		try {
			storageRef
				.child(photoRef)
				.getDownloadURL()
				.then((url) => {
					setPhotoUrl(url);
				});
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		if (photoRef) {
			getImage();
		}
	});

	function createComment() {
		const author = {
			uid: user.uid,
			photoURL: user.photoURL,
			displayName: user.displayName,
			description: user.description || "LinkedIn User",
		};
		const comment = {
			content: text,
			author,
			pid: post.id,
			prevComments: comments || [],
		};

		setText('')

		addComment(comment);
	}

	const calculatedTimeDifference = calculateTime();

	return (
		<div className="flex flex-col bg-gray-50 w-30rem mx-10 rounded-md border-2 border-solid border-gray-200 my-3 p-5 h-auto">
			{/* User Info */}
			<span className="flex justify-around items-center">
				<img
					src={author.photoURL || "/user_avatar.png"}
					height="50px"
					width="50px"
					className="rounded-full"
				/>
				<span className="w-11/12 ml-3">
					<h6 className="text-base font-bold text-black">
						{author.displayName}
					</h6>
					<p className="truncate text-sm text-gray-500">
						{author.description || "LinkedIn user"}
					</p>
					<span className="text-sm text-gray-500">
						{calculatedTimeDifference}
					</span>
				</span>
			</span>

			{/* Content */}
			<span className="text-black text-base">
				{content}
				<img src={photoURL} className="w-8/12 m-4" />
			</span>

			{/* Like and comment values */}
			<span className="w-60 flex justify-around items-center my-3">
				<ThumbUpIconSolid className="h-6 bg-blue-400 text-white rounded-full w-6 p-1" />
				<LightBulbIcon className="h-6 bg-yellow-300 text-white rounded-full w-6 p-1" />
				<p className="text-sm text-gray-500">224 likes • 23 comments</p>
			</span>

			<hr className="mx-2" />

			{/* Like, Comment, Share Buttons*/}
			<span className="flex my-2">
				<CreatePostButton
					Icon={ThumbUpIconOutline}
					title="Like"
					color="text-gray-500"
				/>

				<CreatePostButton
					Icon={ChatAltIcon}
					title="Comment"
					color="text-gray-500"
				/>

				<CreatePostButton
					Icon={ShareIcon}
					title="Share"
					color="text-gray-500"
				/>
			</span>

			{/* Add comment */}
			<span className="flex my-4 items-center">
				<img
					src={user.photoURL || "/user_avatar.png"}
					height="50px"
					width="50px"
					className="rounded-full h-12"
					alt={user.displayName}
				/>
				<textarea
					type="text"
					className="rounded-full border-2 border-solid border-gray-500 px-6 py-3 w-11/12 ml-3 outline-none resize h-14"
					placeholder="Add a comment..."
					row="1"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				{text.length > 0 && <button
					onClick={createComment}
					className="outline-none focus:outline-none"
				>
					<ArrowCircleRightIcon className="text-blue-500 h-12 mx-2" />
				</button>}
			</span>

			{/* Comments Section */}
			{comments &&
				comments.length > 0 &&
				comments
					.slice()
					.reverse()
					.map((comment) => {
						const parsedComment = JSON.parse(comment);
						return (
							<Comment
								key={parsedComment.id}
								comment={parsedComment}
							/>
						);
					})}
		</div>
	);
};

export default FeedPost;
