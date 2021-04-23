import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();
	
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

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
		}
	}),
);

export default function ModalForm() {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);
	
	const handleOpen = () => {
		setOpen(prev=> !prev);
	};
	
	const body = (
		<div style={modalStyle} className={classes.paper}>
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
			<Button variant="contained" color="primary" className={classes.addButton} onClick={handleOpen}>
				Add
			</Button>
		
		</div>
	);
	
	return (
		<div>
			<button type="button" onClick={handleOpen}>
				Open Modal
			</button>
			<Modal
				open={open}
				onClose={handleOpen}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}
