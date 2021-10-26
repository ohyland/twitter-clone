import TweetBox from "./TweetBox";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import { StarPurple500 } from "@mui/icons-material/";

const theme = createTheme();

const useStyles = makeStyles({
	feed: {
		borderRight: `1px solid ${theme.palette.grey[200]}`,
		flex: "0.4",
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
	return (
		<main className={classes.feed}>
			<div className={classes.feedHeader}>
				<Typography variant="h6">Home</Typography>
				<StarPurple500 />
			</div>
			<TweetBox />
		</main>
	);
};

export default Feed;
