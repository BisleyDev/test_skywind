import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		table: {
			minWidth: 650,
		},
		button: {
			margin: theme.spacing(1),
		},
	}),
);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	return {name, calories, fat, carbs, protein};
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DataTable() {
	const classes = useStyles();
	
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Elapsed time</TableCell>
						<TableCell align="center">Name</TableCell>
						<TableCell align="center">Status</TableCell>
						<TableCell align="center">Change Status</TableCell>
						<TableCell align="center">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell align="center">00:00:00</TableCell>
							<TableCell align="center">Ivan</TableCell>
							<TableCell align="center">Active</TableCell>
							<TableCell align="center">
								<Button
									variant="contained"
									color="primary"
									className={classes.button}
									startIcon={<AutorenewIcon/>}
								>
								</Button>
							</TableCell>
							<TableCell align="center">
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}
									startIcon={<DeleteIcon/>}
								>
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
