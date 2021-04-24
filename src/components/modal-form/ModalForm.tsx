import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import usersList from "../../store/usersList";
import {observer} from "mobx-react-lite";
import styles from './modal-form.module.css'
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";


const ModalForm: React.FC = observer(() => {
		const [name, setName] = useState<string>('')
		const [isValid, setValid] = useState<boolean>(true)
		const [isVisible, setVisible] = useState(false)
		
		
		function addUser() {
			console.log("function addUser")
			if (name.length > 3) {
				setValid(true)
				setVisible(prev=>!prev)
				usersList.addUser(name)
				setName('')
			} else {
				setValid(false)
			}
		}
		
		return (
			<>
				<div className={styles.callModalBtn}>
					<Fab color="primary" aria-label="add" onClick={() => setVisible(prev=>!prev)}>
						<AddIcon/>
					</Fab>
				</div>
				<Modal
					className={styles.wrapModal}
					open={isVisible}
					onClose={() => setVisible(prev=>!prev)}
				>
					<div className={styles.paper}>
						<div className={styles.margin}>
							<Grid container spacing={2} alignItems="flex-end">
								<Grid item>
									<AccountCircle/>
								</Grid>
								<Grid item>
									<TextField
										error={!isValid}
										id="input-with-icon-grid"
										label="Add new user"
										onChange={e => setName(e.target.value)}
										helperText={!isValid ? "Name must be more than 3 letters" : ''}
									/>
								</Grid>
							</Grid>
						</div>
						<Button
							variant="contained"
							color="primary"
							className={styles.addButton}
							onClick={addUser}
						>
							Add
						</Button>
					</div>
				</Modal>
			</>
		);
	}
)
export default ModalForm;