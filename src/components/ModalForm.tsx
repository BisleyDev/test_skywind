import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import toggleModal from "../store/toggleModal";
import {observer} from "mobx-react-lite";



const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		margin: {
			margin: theme.spacing(1),
		},
		addButton: {
			height: 'max-content'
		},
		wrapModal: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}

	}),
);


const ModalForm = observer(() => {
		const classes = useStyles();

		
		const body = (
			<div className={classes.paper}>
				<div className={classes.margin}>
					<Grid container spacing={2} alignItems="flex-end">
						<Grid item>
							<AccountCircle/>
						</Grid>
						<Grid item>
							<TextField id="input-with-icon-grid" label="Add new user"/>
						</Grid>
					</Grid>
				</div>
				<Button variant="contained" color="primary" className={classes.addButton}
						  onClick={toggleModal.toggleModalState}>
					Add
				</Button>
			
			</div>
		);
		
		return (
			<Modal
				className={classes.wrapModal}
				open={toggleModal.isOpen}
				onClose={toggleModal.toggleModalState}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		);
	}
)
export default ModalForm;