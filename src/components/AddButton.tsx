import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import toggleModal from "../store/toggleModal";


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				position: 'absolute',
				bottom: theme.spacing(2),
				right: theme.spacing(2),
			},
		},
		extendedIcon: {
			marginRight: theme.spacing(1),
		},
	}),
);

export default function AddButton() {
	const classes = useStyles();
	
	return (
		<div className={classes.root} onClick={toggleModal.toggleModalState}>
			<Fab color="primary" aria-label="add">
				<AddIcon />
			</Fab>
		</div>
	);
}
