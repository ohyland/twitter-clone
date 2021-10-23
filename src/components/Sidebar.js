import SidebarOptions from "./SidebarOptions";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import {
	Twitter,
	HomeRounded,
	SearchRounded,
	NotificationsNoneRounded,
	MailOutlineRounded,
	BookmarkBorderRounded,
	NotesRounded,
	PersonOutlineRounded,
	MoreHorizSharp,
} from "@mui/icons-material/";

const theme = createTheme();

const useStyles = makeStyles({
	nav: {
		"& .MuiButton-root": {
			backgroundColor: theme.palette.primary.main,
			borderRadius: theme.shape.borderRadius * 50,
			fontSize: "17px",
			fontWeight: "bolder",
			padding: theme.spacing(1.5),
			textTransform: "none",
		},
	},
});

const Sidebar = () => {
	const classes = useStyles();
	const iconSize = "large";
	return (
		<nav className={classes.nav}>
			<Twitter fontSize={iconSize} color="primary" />

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

			<Button
				onClick={() => console.log("Tweet!")}
				disableElevation
				fullWidth
				variant="contained"
				size="large"
			>
				Tweet
			</Button>
		</nav>
	);
};

export default Sidebar;
