import * as React from 'react'
import {
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	DialogActions,
} from '@mui/material'

const ResetAlert = ({ openReset, setOpenReset }) => {
	const handleReset = () => {
		setOpenReset(false)
		window.location.reload()
	}

	return (
		<div>
			<Dialog
				open={openReset}
				onClose={_ => setOpenReset(false)}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>
					Are you even sure?
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						If you confirm, your progress will be lost.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={_ => setOpenReset(false)} autoFocus>
						Cancel
					</Button>
					<Button onClick={handleReset}>Confirm</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default ResetAlert
