import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export let theme = createTheme({
	palette: {
		primary: {
			main: "#1DA1F2",
			light: "#e1f3ff",
			dark: "#0f91e1",
		},
	},
});

theme = createTheme(theme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.common.white,
				},
			},
		},
	},
});

const useStyles = makeStyles({
	app: {
		alignItems: "stretch",
		display: "flex",
		height: "100vh",
	},
});

function App() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.app}>
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</ThemeProvider>
	);
}

export default App;
