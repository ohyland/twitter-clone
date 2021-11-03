import { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import database from "../firebase";

import TweetBox from "./TweetBox";
import TwitterPost from "./TwitterPost";

import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import { StarPurple500 } from "@mui/icons-material/";

const theme = createTheme();

const useStyles = makeStyles({
	feed: {
		borderRight: `1px solid ${theme.palette.grey[200]}`,
		flex: "0.5",
		overflowY: "scroll",
	},
	feedHeader: {
		alignItems: "center",
		backgroundColor: "white",
		borderBottom: `1px solid ${theme.palette.grey[200]}`,
		display: "flex",
		fontWeight: "bolder",
		height: "53px",
		justifyContent: "space-between",
		padding: theme.spacing(0, 2),
		position: "sticky",
		top: 0,
		zIndex: 100,
	},
});

const Feed = () => {
	const classes = useStyles();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		database
			.collection("posts")
			.onSnapshot((snapshot) =>
				setPosts(snapshot.docs.map((doc) => doc.data()))
			);
	}, []);

	const handleDeleteClick = (tweetMessage) => {
		const removeItem = posts.filter((post) => {
			return post.tweet !== tweetMessage;
		});

		setPosts(removeItem);
	};

	return (
		<main className={classes.feed}>
			<div className={classes.feedHeader}>
				<Typography variant="h6">Home</Typography>
				<StarPurple500 />
			</div>
			<TweetBox />
			<FlipMove>
				{posts.map(
					({
						avatar,
						displayName,
						favourite,
						image,
						userName,
						tweet,
						timeStamp,
						verified,
					}) => (
						<TwitterPost
							key={tweet}
							avatar={avatar}
							displayName={displayName}
							favourite={favourite}
							image={image}
							userName={userName}
							tweet={tweet}
							timeStamp={timeStamp}
							verified={verified}
							handleDeleteClick={handleDeleteClick}
						/>
					)
				)}
			</FlipMove>
		</main>
	);
};

export default Feed;
