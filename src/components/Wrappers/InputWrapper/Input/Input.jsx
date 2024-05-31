import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import './Input.css'

const Input = ({
	index,
	input,
	inputs,
	active,
	crossed,
	termChanged,
	tooltip,
	oneByOne,
	isBigger,
	prevInputBox,
}) => {
	const [term, setTerm] = useState(input.value)
	const [points, setPoints] = useState(false)
	const [tooltipIsOpen, setTooltipIsOpen] = useState(false)

	useMemo(() => {
		if (tooltip) {
			window.addEventListener('mouseup', _ => {
				setTooltipIsOpen(false)
			})
		}
	}, [tooltip])

	const pointsHandler = event => {
		setTooltipIsOpen(false)
		let p = +event.target.textContent
		switch (input.value) {
			case 'x2':
				p *= 2
				break
			case 'x3':
				p *= 3
				break
			default:
		}

		let previousP = index ? inputs[index - 1].points : 0
		if (p > previousP || previousP === 6 || !isBigger) {
			setPoints(p)
			setTerm('X')
			let crossedCopy = crossed.slice(0)
			crossedCopy[index] = !crossedCopy[index]
			termChanged(crossedCopy)
		}
	}

	useEffect(
		_ => {
			inputs[index].points = points
		},
		[points, inputs, index]
	)

	const tooltipElements = index => {
		const choices = [1, 2, 3, 4, 5, 6]

		const renderedChoices = choices.map(choice => (
			<div
				className='tooltip-button'
				onClick={pointsHandler}
				data-crossed={input.crossed ? true : null}
				key={choice}
				value={choice}>
				{choice}
			</div>
		))

		return <div className='tooltip-container'>{renderedChoices}</div>
	}

	const selectTerm = input.dice ? (
		<svg width='100%' height='100%' viewBox='0 0 640 512' version='1.1'>
			<path
				className='dice-front'
				d='M433.63,189.3 L258.7,14.37 C239.54,-4.79 208.47,-4.79 189.31,14.37 L14.37,189.3 C-4.79,208.46 -4.79,239.53 14.37,258.69 L189.3,433.63 C208.46,452.79 239.53,452.79 258.69,433.63 L433.63,258.7 C452.79,239.53 452.79,208.46 433.63,189.3 L433.63,189.3 Z M96,248 C82.75,248 72,237.25 72,224 C72,210.74 82.75,200 96,200 C109.25,200 120,210.74 120,224 C120,237.25 109.25,248 96,248 L96,248 Z M224,376 C210.75,376 200,365.25 200,352 C200,338.74 210.75,328 224,328 C237.25,328 248,338.74 248,352 C248,365.25 237.25,376 224,376 L224,376 Z M224,248 C210.75,248 200,237.25 200,224 C200,210.74 210.75,200 224,200 C237.25,200 248,210.74 248,224 C248,237.25 237.25,248 224,248 L224,248 Z M224,120 C210.75,120 200,109.25 200,96 C200,82.74 210.75,72 224,72 C237.25,72 248,82.74 248,96 C248,109.25 237.25,120 224,120 L224,120 Z M352,248 C338.75,248 328,237.25 328,224 C328,210.74 338.75,200 352,200 C365.25,200 376,210.74 376,224 C376,237.25 365.25,248 352,248 L352,248 Z'
				id='front'></path>
			<path
				className='dice-back'
				d='M592,192 L473.26,192 C485.95,221.59 480.38,257.2 456.26,281.32 L320,417.58 L320,464 C320,490.51 341.49,512 368,512 L592,512 C618.51,512 640,490.51 640,464 L640,240 C640,213.49 618.51,192 592,192 L592,192 Z M480,376 C466.75,376 456,365.25 456,352 C456,338.74 466.75,328 480,328 C493.25,328 504,338.74 504,352 C504,365.25 493.25,376 480,376 L480,376 Z'
				id='back'></path>
		</svg>
	) : input.crossed ? (
		'X'
	) : points ? (
		points
	) : (
		term
	)

	const isClickable = _ => {
		// oneByOne: you can't check a further input before the most left one
		// crossed: state of an input, crossed[index + 1] = input after THIS input
		// term: is 'X' when crossed, something else if not

		// only allow this click, if:
		// - this is NOT a oneByOne block (yellow or blue)
		// - the next input is NOT crossed (you can always undo the last input)
		// - this input is not crossed yet (crossing is allowed, uncrossing is not always)

		return (
			(!tooltip || term === 'X') &&
			(!oneByOne || !crossed[index + 1] || term !== 'X')
		)
	}

	const onClick = () => {
		if (isClickable()) {
			setPoints(false)
			setTerm(term === 'X' ? input.value : 'X')
			let crossedCopy = crossed.slice(0)
			crossedCopy[index] = !crossedCopy[index]
			termChanged(crossedCopy)

			console.log(crossedCopy)
		} else if (tooltip) {
			setTooltipIsOpen(true)
		}
	}

	const inputButton = () => {
		return (
			<button
				onClick={onClick}
				className={term === 'X' ? 'input selected' : 'input'}
				data-index={index}
				data-crossed={input.crossed ? true : null}
				disabled={!active || input.disabled ? true : null}
				data-has-image={input.dice ? true : null}>
				{selectTerm}
			</button>
		)
	}

	// console.log({ active: !active, input: input.disabled })

	const tooltipCheck = () => {
		if (tooltip && !crossed[index] && !tooltip[index] && active) {
			return (
				<Tooltip
					classes={{ tooltip: 'input-tooltip' }}
					data-crossed={input.crossed ? true : null}
					open={tooltipIsOpen}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					title={tooltipElements(index)}
					arrow>
					<span className={tooltipIsOpen ? 'active-button' : ''}>
						{inputButton()}
					</span>
				</Tooltip>
			)
		} else {
			return inputButton()
		}
	}
	return <div>{tooltipCheck()}</div>
}

export default Input
