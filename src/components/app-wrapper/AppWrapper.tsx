import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ModalForm from "../modal-form/ModalForm";
import DataTable from "../table/DataTable";
import styles from './appWrapper.module.css'

function AppWrapper() {
	
	return (
		<Container maxWidth="md" className={styles.wrap}>
			<Grid item xs={10}>
				<DataTable/>
			</Grid>
				<ModalForm/>
		</Container>
	
	);
}

export default AppWrapper;
