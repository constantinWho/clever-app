import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const BasicTable = ({ props, pointsCount }) => {
	function createData(color, score) {
		return { color, score }
	}
	const foxesCount = Object.values(props.foxes).reduce((pv, cv) => pv + cv, 0)
	let foxesObj = Object.values(props.points)
	let minValue = Math.min(...foxesObj)
	let foxesScore = minValue * foxesCount

	const foxCalc =
		foxesCount === 0 ? 0 : `${foxesCount} * ${minValue} = ${foxesScore}`

	const rows = [
		createData('Yellow', props.points.yellowA),
		createData('Blue', props.points.blueA),
		createData('Green', props.points.greenA),
		createData('Orange', props.points.orangeA),
		createData('Purple', props.points.purpleA),
		createData('Fox', foxCalc),
		createData('Result', foxesScore + pointsCount),
	]

	return (
		<TableContainer component={Paper}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell sx={{ bgcolor: '#7F8C8D' }}>Color</TableCell>
						<TableCell sx={{ bgcolor: '#BDC3C7' }} align='left'>
							Points
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow
							key={row.color}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
									color: '#ECF0F1',
								},
								'&:last-child td': {
									bgcolor: '#34495E',
								},
								'&:last-child th': {
									bgcolor: '#2C3E50',
								},
								'&:first-child td': {
									bgcolor: '#F1C40F',
								},
								'&:first-child th': {
									bgcolor: '#F39C12',
								},
								'&:nth-child(2) td': {
									bgcolor: '#3498DB',
								},
								'&:nth-child(2) th': {
									bgcolor: '#2980B9',
								},
								'&:nth-child(3) td': {
									bgcolor: '#2ECC71',
								},
								'&:nth-child(3) th': {
									bgcolor: '#27AE60',
								},
								'&:nth-child(4) td': {
									bgcolor: '#E67E22',
								},
								'&:nth-child(4) th': {
									bgcolor: '#D35400',
								},
								'&:nth-child(5) td': {
									bgcolor: '#9B59B6',
								},
								'&:nth-child(5) th': {
									bgcolor: '#8E44AD',
								},
								'&:nth-child(6) td': {
									bgcolor: '#E74C3C',
								},
								'&:nth-child(6) th': {
									bgcolor: '#C0392B',
								},
							}}>
							<TableCell component='th' scope='row'>
								{row.color}
							</TableCell>
							<TableCell align='left'>{row.score}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default BasicTable
