import InputWrapper from '../../Wrappers/InputWrapper/InputWrapper'
import BonusWrapper from '../../Wrappers/BonusWrapper/BonusWrapper'

const RedoCounter = () => {
	const bonus = [{ styleSheet: 'redo', value: 'REDO' }]
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
		<div className='redo'>
			<BonusWrapper className='bonus' bonus={bonus} />
			<InputWrapper className='input' input={input} />
		</div>
	)
}

export default RedoCounter
