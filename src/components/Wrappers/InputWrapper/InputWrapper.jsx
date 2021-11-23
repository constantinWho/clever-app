import { useState, useRef } from 'react'
import Arrows from './Arrows/Arrows'
import Input from './Input/Input'
import './InputWrapper.css'

const InputWrapper = ({
	input,
	oneByOne,
	smallerSign,
	arrowsX,
	arrowsY,
	arrowsZ,
	type,
	tooltip,
	isBigger,
}) => {
	const [crossed, setCrossed] = useState([])
	const [previousP, setPreviousP] = useState([])

	let inputBox = false
	const renderedInput = input.map((input, i) => {
		inputBox = (
			<Input
				prevInputBox={inputBox}
				isBigger={isBigger}
				previousP={previousP}
				setPreviousP={setPreviousP}
				tooltip={tooltip}
				key={i}
				oneByOne={oneByOne}
				active={!oneByOne || !i || crossed[i - 1]}
				value={input}
				input={input}
				index={i}
				type={type}
				crossed={crossed}
				termChanged={setCrossed}
			/>
		)
		return (
			<div key={i} className='input-container'>
				{smallerSign && i ? <div className='smaller-sign'></div> : null}
				{inputBox}
			</div>
		)
	})

	console.log(useRef())

	return (
		<div className='input-wrapper'>
			<Arrows direction='X' arrowsX={arrowsX} inputNum={input.length} />
			<Arrows direction='Y' arrowsY={arrowsY} inputNum={input.length} />
			<Arrows direction='Z' arrowsZ={arrowsZ} /> {renderedInput}
		</div>
	)
}

export default InputWrapper
