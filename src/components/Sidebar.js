import SidebarOptions from "./SidebarOptions";
import TweetButton from "./TweetButton";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import {
	BookmarkBorderRounded,
	HomeRounded,
	MailOutlineRounded,
	MoreHorizSharp,
	NotesRounded,
	NotificationsNoneRounded,
	PersonOutlineRounded,
	SearchRounded,
	Twitter,
} from "@mui/icons-material/";

const theme = createTheme();
const useStyles = makeStyles({
	sidebar: {
		borderRight: `1px solid ${theme.palette.grey[200]}`,
		flex: "0.3",
		padding: theme.spacing(0, 1.5),
		"& .twitterIcon": {
			padding: theme.spacing(1),
			cursor: "pointer",
			"&:hover": {
				backgroundColor: "#e1f3ff",
				borderRadius: theme.shape.borderRadius * 50,
				transition: "200ms ease-out",
			},
		},
	},
});

const Sidebar = () => {
	const classes = useStyles();
	const iconSize = "large";
	const handleClick = () => {
		console.log("TWEET");
	};

	return (
		<nav className={classes.sidebar}>
			<Twitter className="twitterIcon" fontSize={iconSize} color="primary" />

			<SidebarOptions
				active={true}
				icon={<HomeRounded fontSize={iconSize} />}
				text="Home"
			/>
			<SidebarOptions
				icon={<SearchRounded fontSize={iconSize} />}
				text="Explore"
			/>
			<SidebarOptions
				icon={<NotificationsNoneRounded fontSize={iconSize} />}
				text="Notifications"
			/>
			<SidebarOptions
				icon={<MailOutlineRounded fontSize={iconSize} />}
				text="Messages"
			/>
			<SidebarOptions
				icon={<BookmarkBorderRounded fontSize={iconSize} />}
				text="Bookmarks"
			/>
			<SidebarOptions
				icon={<NotesRounded fontSize={iconSize} />}
				text="Lists"
			/>
			<SidebarOptions
				icon={<PersonOutlineRounded fontSize={iconSize} />}
				text="Profile"
			/>
			<SidebarOptions
				icon={<MoreHorizSharp fontSize={iconSize} />}
				text="More"
			/>

			<TweetButton size="large" fullWidth={true} handleClick={handleClick} />
		</nav>
	);
};

export default Sidebar;
