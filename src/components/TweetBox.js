import TweetButton from "./TweetButton";

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
			flex: 1,
			fontSize: "20px",
			fontWeight: "bold",
			paddingLeft: theme.spacing(2),
		},
		"& form": {
			height: "100%",
			display: "flex",
			flexWrap: "wrap",
			alignContent: "space-between",
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
	return (
		<div className={classes.tweetBox}>
			<form>
				<div className={classes.tweet}>
					<Avatar alt="Olivia Hyland" src={photo} />

					<input type="text" placeholder="What's Happening?" />
				</div>
				<div className={classes.tweetButtonWrapper}>
					<div>
						<label htmlFor="icon-button-file">
							<Input accept="image/*" id="icon-button-file" type="file" />
							<IconButton
								aria-label="upload picture"
								component="span"
								color="primary"
							>
								<CropOriginal />
							</IconButton>
						</label>
					</div>
					<TweetButton size="small" />
				</div>
			</form>
		</div>
	);
};

export default TweetBox;
