import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
// import { themeOptions } from "../theme";

const theme = createTheme();
const useStyles = makeStyles({
	sidebarOptions: {
		alignItems: "center",
		cursor: "pointer",
		display: "flex",
		padding: theme.spacing(1.2, 2.5, 1.2, 1.5),
		width: "fit-content",
		"&.active": {
			"& .MuiTypography-root": {
				fontWeight: "bolder",
			},
		},
		"& svg": {
			paddingRight: theme.spacing(2),
		},
		"&:hover": {
			backgroundColor: theme.palette.grey[300],
			borderRadius: theme.shape.borderRadius * 50,
			transition: "200ms ease-out",
		},
	},
});

const SidebarOptions = ({ active, icon, text }) => {
	const classes = useStyles();
	return (
		<>
			<div className={`${classes.sidebarOptions} ${active ? "active" : ""}`}>
				{icon}
				<Typography variant="h6">{text}</Typography>
			</div>
		</>
	);
};

export default SidebarOptions;
