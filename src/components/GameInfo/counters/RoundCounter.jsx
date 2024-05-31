import React from 'react'
import { useState, useEffect } from 'react'
import BonusWrapper from '../../Wrappers/BonusWrapper/BonusWrapper'

const RoundCounter = ({ redos, plusOnes, setRedos, setPlusOnes }) => {
	const bonus = [
		[{ styleSheet: 'redo', value: 'REDO' }],
		[{ styleSheet: '+1', value: '+1' }],
		[{ styleSheet: 'redo', value: 'REDO' }],
		[
			{ value: 'X', styleSheet: 'left' },
			{ value: 6, styleSheet: 'right' },
		],
		[],
		[],
	]

	const [counter, setCounter] = useState(1)

	useEffect(() => {
		let myRedos = 0,
			myPlusOnes = 0
		if (counter >= 1) {
			myRedos++
			if (counter >= 2) {
				myPlusOnes++
				if (counter >= 3) {
					myRedos++
				}
			}
		}
		if (redos?.gameInfo !== myRedos) {
			setRedos({ ...redos, gameInfo: myRedos })
		}
		if (plusOnes?.gameInfo !== myPlusOnes) {
			setPlusOnes({ ...plusOnes, gameInfo: myPlusOnes })
		}
	}, [counter, redos, plusOnes, setPlusOnes, setRedos])

	return (
		<div className='round'>
			<div className='round-counter'>
				<button onClick={() => setCounter(counter + 1)}>
					{counter === 7 ? (
						setCounter(1)
					) : (
						<span className='actual-round'>{counter}</span>
					)}
				</button>
				<span className='players'>
					{counter <= 4 ? '(4P)' : counter <= 5 ? '(3P)' : '(1P,2P)'}
				</span>
			</div>
			<div className='actual-bonus'>
				<BonusWrapper className='bonus' bonus={bonus[counter - 1]} />
			</div>
		</div>
	)
}

export default RoundCounter
