import { useState, forwardRef } from "react";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Typography, IconButton, CardMedia } from "@material-ui/core";
import { Avatar, Menu, MenuItem, ListItemIcon } from "@mui/material";
import {
	ChatBubbleOutlineRounded as ChatBubbleOutlineRoundedIcon,
	Delete as DeleteIcon,
	Favorite as FavoriteIcon,
	FavoriteBorder as FavoriteBorderIcon,
	IosShareRounded as IosShareRoundedIcon,
	MoreHoriz as MoreHorizIcon,
	RepeatRounded as RepeatRoundedIcon,
	Verified as VerifiedIcon,
} from "@mui/icons-material/";
const theme = createTheme();
const useStyles = makeStyles({
	twitterPost: {
		borderBottom: `1px solid ${theme.palette.grey[200]}`,
		display: "flex",
		padding: theme.spacing(1.5),
		"& .MuiTypography-root": {
			fontSize: "15px",
			margin: theme.spacing(0, 0, 0.5, 0.5),
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
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	footer: {
		alignItems: "centre",
		display: "flex",
		justifyContent: "space-between",
		" & .MuiIconButton-root": {
			padding: theme.spacing(1),
		},
		"& .heartIconButton": {
			"&:hover": {
				backgroundColor: "pink",
				"& svg": {
					fill: "red",
				},
			},
		},
		"& .heartIcon": {
			fill: "red",
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

const TwitterPost = forwardRef(
	(
		{
			avatar,
			displayName,
			favourite,
			image,
			timeStamp,
			tweet,
			userName,
			verified,
			handleDeleteClick,
		},
		ref
	) => {
		const classes = useStyles();
		const [anchorEl, setAnchorEl] = useState(null);
		const open = Boolean(anchorEl);

		const handleClick = (e) => {
			setAnchorEl(e.currentTarget);
		};

		const handleClose = () => {
			setAnchorEl(null);
		};

		return (
			<article className={classes.twitterPost} ref={ref}>
				<Avatar alt="Olivia Hyland" className="avatar" src={avatar} />
				<div className={classes.content}>
					<div className={classes.header}>
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
						<IconButton size="small" onClick={handleClick}>
							<MoreHorizIcon fontSize="small" />
						</IconButton>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={(handleClose, () => handleDeleteClick(tweet))}>
								<ListItemIcon>
									<DeleteIcon fontSize="small" />
								</ListItemIcon>
								Delete
							</MenuItem>
						</Menu>
					</div>
					<Typography>{tweet}</Typography>
					{image && <CardMedia component="img" image={image} />}
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

						<IconButton className="heartIconButton">
							{favourite ? (
								<FavoriteIcon fontSize="small" className="heartIcon" />
							) : (
								<FavoriteBorderIcon fontSize="small" />
							)}
						</IconButton>
					</div>
				</div>
			</article>
		);
	}
);
export default TwitterPost;
