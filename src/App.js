import React, { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator/Calculator'
import BlueArea from './components/BlueArea/BlueArea'
import GameInfo from './components/GameInfo/GameInfo'
import GreenArea from './components/GreenArea/GreenArea'
import OrangeArea from './components/OrangeArea/OrangeArea'
import PurpleArea from './components/PurpleArea/PurpleArea'
import YellowArea from './components/YellowArea/YellowArea'

const App = () => {
	const [redos, setRedos] = useState({})
	const [plusOnes, setPlusOnes] = useState({})
	const [points, setPoints] = useState({})
	const [foxes, setFoxes] = useState({})

	const areaProps = {
		redos,
		setRedos,
		plusOnes,
		setPlusOnes,
		points,
		setPoints,
		foxes,
		setFoxes,
	}

	console.log('Points:', points)
	console.log('Foxes:', foxes)

	return (
		<div className='app'>
			<GameInfo {...areaProps} />
			<YellowArea {...areaProps} />
			<BlueArea {...areaProps} />
			<GreenArea {...areaProps} />
			<OrangeArea {...areaProps} />
			<PurpleArea {...areaProps} />
			<Calculator {...areaProps} />
		</div>
	)
}

export default App
