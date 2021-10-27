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

	const displayName = "Sky News Breaking";
	const userName = "SkyNewsBreak";
	const tweet =
		"The Queen has carried out virtual audiences at Windsor Castle - her first official engagements in seven days since she was ordered to rest by doctors. For more on this and other news visit";
	const timeStamp = "Oct 25";
	const favourite = false;
	const verified = true;

	return (
		<main className={classes.feed}>
			<div className={classes.feedHeader}>
				<Typography variant="h6">Home</Typography>
				<StarPurple500 />
			</div>
			<TweetBox />
			<TwitterPost
				displayName={displayName}
				favourite={favourite}
				userName={userName}
				tweet={tweet}
				timeStamp={timeStamp}
				verified={verified}
			/>
		</main>
	);
};

export default Feed;
