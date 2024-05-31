import React from 'react'
import InputWrapper from '../../Wrappers/InputWrapper/InputWrapper'
import BonusWrapper from '../../Wrappers/BonusWrapper/BonusWrapper'

const PlusOneCounter = ({ plusOnes }) => {
	const bonus = [{ styleSheet: '+1', value: '+1' }]
	const input = [
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
	]

	return (
		<div className='plus-one'>
			<BonusWrapper className='bonus' bonus={bonus} />
			<InputWrapper
				activeInputs={plusOnes}
				className='input'
				input={input}
			/>
		</div>
	)
}

export default PlusOneCounter
