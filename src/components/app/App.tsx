import React from 'react';
import AddButton from "../add-button/AddButton";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ModalForm from "../modal-form/ModalForm";
import DataTable from "../table/DataTable";
import styles from './app.module.css'

function App () {
	
	return (
		<Container maxWidth="md" className={styles.wrap}>
			<Grid item xs={10}>
				<DataTable/>
				<AddButton/>
			</Grid>
			<ModalForm/>
		</Container>
	
	);
}

export default App;
