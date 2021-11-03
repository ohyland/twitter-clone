import { useState } from "react";
import TweetButton from "./TweetButton";
import database from "../firebase";

import { createTheme, styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { CropOriginal } from "@mui/icons-material/";
import Avatar from "@mui/material/Avatar";
import photo from "../images/avatar.jpg";
import { makeStyles } from "@mui/styles";

const theme = createTheme();
const useStyles = makeStyles({
	tweet: {
		display: "flex",
		alignItems: "flex-end",
	},
	tweetBox: {
		borderBottom: `1px solid ${theme.palette.grey[200]}`,
		height: "100px",
		padding: theme.spacing(1.5, 2),
		"& input": {
			border: "none",
			width: "100%",
			fontSize: "20px",
			fontWeight: "bold",
			marginLeft: theme.spacing(2),
			padding: theme.spacing(1),
		},
	},
	tweetButtonWrapper: {
		display: "flex",
		flex: 1,
		justifyContent: "space-between",
	},
});

const Input = styled("input")({
	display: "none",
});

const TweetBox = () => {
	const classes = useStyles();
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();
		database.collection("posts").add({
			avatar:
				"https://avatars.githubusercontent.com/u/52823456?s=400&u=1a40b8b9cc5511524e3be19e63d1b934d99ea7e0&v=4",
			displayName: "Olivia Hyland",
			tweet: tweetMessage,
			userName: "ohyland",
			verified: true,
			image: tweetImage,
			favourite: false,
		});
		setTweetMessage("");
		setTweetImage("");
	};

	return (
		<div className={classes.tweetBox}>
			<form>
				<div className={classes.tweet}>
					<Avatar alt="Olivia Hyland" src={photo} />

					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						type="text"
						value={tweetMessage}
						placeholder="What's Happening?"
					/>
				</div>
				<div className={classes.tweetButtonWrapper}>
					<div>
						<label htmlFor="icon-button-file">
							<Input
								value={tweetImage}
								accept="image/*"
								id="icon-button-file"
								type="file"
								onChange={(e) =>
									setTweetImage(
										"https://media0.giphy.com/media/ZubZqIeSsZ60t0ID9l/giphy.gif?cid=ecf05e4723fb2892aa4fb0fb40489537b53f021f17332f64&rid=giphy.gif&ct=g"
									)
								}
							/>
							<IconButton
								aria-label="upload picture"
								component="span"
								color="primary"
							>
								<CropOriginal />
							</IconButton>
						</label>
					</div>
					<TweetButton size="small" sendTweet={sendTweet} />
				</div>
			</form>
		</div>
	);
};

export default TweetBox;
