import React from 'react'
import './Points.css'

const Points = ({ value }) => {
	return (
		<div className='points'>
			<p>{value}</p>
		</div>
	)
}

export default Points
