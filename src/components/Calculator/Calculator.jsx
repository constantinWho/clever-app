import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import BasicTable from './BasicTable'
import ResetAlert from './ResetAlert'
import './Calculator.css'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '50%',
	boxShadow: 24,
}

const Calculator = props => {
	const [openReset, setOpenReset] = React.useState(false)
	const [openResults, setOpenResults] = React.useState(false)
	const pointsCount = Object.values(props.points).reduce(
		(pv, cv) => pv + cv,
		0
	)

	return (
		<Stack className='calculator'>
			<Button variant='contained' onClick={_ => setOpenReset(true)}>
				Reset
			</Button>
			<Button
				variant='contained'
				color='success'
				onClick={_ => setOpenResults(true)}>
				Calculate my points
			</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={openResults}
				onClose={_ => setOpenResults(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={openResults}>
					<Box sx={style}>
						<BasicTable pointsCount={pointsCount} props={props} />
					</Box>
				</Fade>
			</Modal>
			<ResetAlert openReset={openReset} setOpenReset={setOpenReset} />
		</Stack>
	)
}

export default Calculator
