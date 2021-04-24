import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import toggleModal from "../../store/toggleModal";
import styles from './add-button.module.css'

export default function AddButton() {
	
	return (
		<div className={styles.addButton} onClick={() => toggleModal.toggleModalState()}>
			<Fab color="primary" aria-label="add">
				<AddIcon />
			</Fab>
		</div>
	);
}
