import { makeStyles } from "@mui/styles";
//import { createTheme } from "@mui/material/styles";

//const theme = createTheme();

const useStyles = makeStyles({
	widgets: {
		flex: "0.3",
	},
});

const Widgets = () => {
	const classes = useStyles();
	return (
		<div className={classes.widgets}>
			<h2>Widgets</h2>
		</div>
	);
};

export default Widgets;
