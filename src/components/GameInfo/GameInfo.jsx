import React from 'react'
import RoundCounter from './counters/RoundCounter'
import RedoCounter from './counters/RedoCounter'
import PlusOneCounter from './counters/PlusOneCounter'
import './GameInfo.css'

const GameInfo = ({ redos, plusOnes, setRedos, setPlusOnes }) => {
	const redosCount = Object.values(redos).reduce((pv, cv) => pv + cv, 0)
	const plusOneCount = Object.values(plusOnes).reduce((pv, cv) => pv + cv, 0)

	return (
		<div className='game-info'>
			<RoundCounter
				redos={redos}
				plusOnes={plusOnes}
				plusOnesCount={plusOneCount}
				redosCount={redosCount}
				setRedos={setRedos}
				setPlusOnes={setPlusOnes}
			/>
			<RedoCounter redos={redosCount} />
			<PlusOneCounter plusOnes={plusOneCount} />
		</div>
	)
}

export default GameInfo
