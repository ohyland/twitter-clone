import { TwitterTweetEmbed, TwitterOnAirButton } from "react-twitter-embed";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Input, Typography } from "@mui/material/";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles({
	widgets: {
		flex: "0.25",
		margin: theme.spacing(1),
		"& .MuiInput-root": {
			backgroundColor: `${theme.palette.grey[100]}`,
			borderRadius: "30px",
			padding: theme.spacing(1),
		},
		"& .widgetContainer": {
			backgroundColor: `${theme.palette.grey[100]}`,
			borderRadius: "20px",
			marginTop: theme.spacing(1),
			padding: theme.spacing(1, 2),
			"& .MuiTypography-root": {
				fontWeight: "bolder",
			},
		},
	},
});

const Widgets = () => {
	const classes = useStyles();
	return (
		<div className={classes.widgets}>
			<div className="widgetsInput">
				<Input
					disableUnderline
					fullWidth
					type="text"
					startAdornment={
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					}
					placeholder="Seach Twitter"
				/>
			</div>
			<div className="widgetContainer">
				<Typography component="h2" variant="h6">
					What's happening
				</Typography>
				<TwitterTweetEmbed
					optins={{ height: "200px" }}
					tweetId={"1453265153466765314"}
				/>
			</div>
			<div className="widgetContainer">
				<Typography component="h2" variant="h6">
					Who to follow
				</Typography>
				<TwitterOnAirButton id={"560070183650213889"} />
			</div>
		</div>
	);
};

export default Widgets;
