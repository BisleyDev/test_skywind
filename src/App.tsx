import React, {useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import DataTable from "./components/Table";
import AddButton from "./components/AddButton";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ModalForm from "./components/ModalForm";



const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'center',
			marginTop: theme.spacing(5)
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	}),
);


function App() {
	const classes = useStyles();
	
	return (
		<Container maxWidth="lg" className={classes.root}>
			<Grid item xs={10}>
				<DataTable/>
				<AddButton/>
			</Grid>
			<ModalForm/>
		</Container>
	
	);
}

export default App;
