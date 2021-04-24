import React from 'react';
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
import styles from './table.module.css'
import usersList from "../../store/usersList";
import {observer} from "mobx-react-lite";
import {IUser} from "../../Interfaces";
import {Typography} from "@material-ui/core";


const DataTable = observer(() => {
		const users: IUser[] = usersList.users;
		
		return (
			<TableContainer component={Paper}>
				<Table className={styles.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">
								<Typography component='h4'>
									Elapsed time
								</Typography>
							</TableCell>
							<TableCell align="center">
								<Typography component={'h4'}>
									Name
								</Typography>
							</TableCell>
							<TableCell align="center">
								<Typography component={'h4'}>
									Status
								</Typography>
								</TableCell>
							<TableCell align="center">
								<Typography component={'h4'}>
									Change Status
								</Typography>
							</TableCell>
							<TableCell align="center">
								<Typography component={'h4'}>
									Delete
								</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map(({time, name, status, id}) => (
							<TableRow key={id}>
								<TableCell align="center">{time}</TableCell>
								<TableCell align="center">{name}</TableCell>
								<TableCell align="center">{status ? 'Active' : 'InActive'}</TableCell>
								<TableCell align="center">
									<Button
										color="primary"
										className={styles.button}
										onClick={() => usersList.changeStatus(id)}
									>
										<AutorenewIcon/>
									</Button>
								</TableCell>
								<TableCell align="center">
									<Button
										color="secondary"
										className={styles.button}
										onClick={() => usersList.removeUser(id)}
									>
										<DeleteIcon/>
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
)
export default DataTable;
