import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Typography, IconButton, CardMedia } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import {
	Verified as VerifiedIcon,
	FavoriteBorder as FavoriteBorderIcon,
	Favorite as FavoriteIcon,
	IosShareRounded as IosShareRoundedIcon,
	RepeatRounded as RepeatRoundedIcon,
	ChatBubbleOutlineRounded as ChatBubbleOutlineRoundedIcon,
} from "@mui/icons-material/";
const theme = createTheme();
const useStyles = makeStyles({
	twitterPost: {
		borderBottom: `1px solid ${theme.palette.grey[200]}`,
		display: "flex",
		padding: theme.spacing(1.5),
		"& .MuiTypography-root": {
			fontSize: "15px",
			marginBottom: theme.spacing(0.5),
		},
		"& .verifiedIcon": {
			paddingLeft: theme.spacing(0.3),
		},
		"& .names": {
			color: theme.palette.grey[600],
			display: "flex",
			fontSize: "15px",
		},
		"& .displayName": {
			color: "black",
			display: "flex",
			fontWeight: "bolder",
			paddingRight: theme.spacing(0.3),
		},
		"& .avatar": {
			marginRight: theme.spacing(2),
		},
		"& .MuiCardMedia-root": {
			margin: theme.spacing(1, 0),
			borderRadius: theme.spacing(1),
		},
	},
	content: {
		flex: "1",
	},
	footer: {
		alignItems: "centre",
		display: "flex",
		justifyContent: "space-between",
		" & .MuiIconButton-root": {
			padding: theme.spacing(1),
		},
		"& .heartIcon": {
			"&:hover": {
				backgroundColor: "pink",
				"& svg": {
					fill: "red",
				},
			},
		},
		"& .shareIcon, .chatBubbleIcon": {
			"&:hover": {
				backgroundColor: "#e8f4f8",
				"& svg": {
					fill: "#1DA1F2",
				},
			},
		},
		"& .retweetIcon": {
			"&:hover": {
				backgroundColor: "#e8f8e8",
				"& svg": {
					fill: "#4bc84b",
				},
			},
		},
	},
});

const TwitterPost = ({
	avatar,
	displayName,
	favourite,
	image,
	timeStamp,
	tweet,
	userName,
	verified,
}) => {
	const classes = useStyles();

	return (
		<article className={classes.twitterPost}>
			<Avatar alt="Olivia Hyland" className="avatar" src={avatar} />
			<div className={classes.content}>
				<Typography className="names">
					<span className="displayName">
						{displayName}
						{verified ? (
							<VerifiedIcon
								className="verifiedIcon"
								color="primary"
								fontSize="small"
							/>
						) : null}
					</span>{" "}
					@{userName} {timeStamp}
				</Typography>
				<Typography>{tweet}</Typography>
				<CardMedia component="img" image={image} alt="avatar" />
				<div className={classes.footer}>
					<IconButton className="chatBubbleIcon">
						<ChatBubbleOutlineRoundedIcon fontSize="small" />
					</IconButton>
					<IconButton className="retweetIcon">
						<RepeatRoundedIcon fontSize="small" />
					</IconButton>
					<IconButton className="shareIcon">
						<IosShareRoundedIcon fontSize="small" />
					</IconButton>

					<IconButton className="heartIcon">
						{favourite ? (
							<FavoriteIcon fontSize="small" color="red" />
						) : (
							<FavoriteBorderIcon fontSize="small" color="red" />
						)}
					</IconButton>
				</div>
			</div>
		</article>
	);
};

export default TwitterPost;
