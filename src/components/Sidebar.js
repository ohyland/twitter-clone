import SidebarOptions from "./SidebarOptions";
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

const Sidebar = () => {
	return (
		<nav>
			<Twitter color="primary" />
			<SidebarOptions active={true} icon={<HomeRounded />} text="Home" />
			<SidebarOptions icon={<SearchRounded />} text="Explore" />
			<SidebarOptions
				icon={<NotificationsNoneRounded />}
				text="Notifications"
			/>
			<SidebarOptions icon={<MailOutlineRounded />} text="Messages" />
			<SidebarOptions icon={<BookmarkBorderRounded />} text="Bookmarks" />
			<SidebarOptions icon={<NotesRounded />} text="Lists" />
			<SidebarOptions icon={<PersonOutlineRounded />} text="Profile" />
			<SidebarOptions icon={<MoreHorizSharp />} text="More" />
		</nav>
	);
};

export default Sidebar;
