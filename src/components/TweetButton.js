import { Button } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles({
	tweetButton: {
		"&.MuiButton-root": {
			backgroundColor: "#1DA1F2",
			borderRadius: theme.shape.borderRadius * 50,
			color: theme.palette.common.white,
			fontSize: "17px",
			fontWeight: "bolder",
			textTransform: "none",
			"&:hover": {
				backgroundColor: "#0f91e1",
			},
		},
	},
});

const TweetButton = ({ fullWidth, size, sendTweet }) => {
	const classes = useStyles();
	return (
		<Button
			className={classes.tweetButton}
			disableElevation
			fullWidth={fullWidth}
			onClick={sendTweet}
			size={size}
			variant="contained"
			type="submit"
		>
			Tweet
		</Button>
	);
};

export default TweetButton;
