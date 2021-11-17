import InputWrapper from '../../Wrappers/InputWrapper/InputWrapper'

const PlusOneCounter = () => {
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
			<p className='bonus'>+1</p>
			<InputWrapper className='input' input={input} />
		</div>
	)
}

export default PlusOneCounter
