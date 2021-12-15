import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
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
	activeInputs,
	props,
}) => {
	const [crossed, setCrossed] = useState([])

	const wrapperRef = React.createRef()

	useEffect(() => {
		if (props) {
			const myColor = ReactDOM.findDOMNode(wrapperRef.current).parentNode
				.className

			let plusOnes = 0,
				redos = 0,
				yellowPoints = 0,
				blueListOfPoints = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56],
				bluePoints = 0,
				greenListOfPoints = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66],
				greenPoints = 0,
				orangePoints = 0,
				purplePoints = 0,
				foxes = 0

			console.log(myColor)
			switch (myColor) {
				case 'yellowA':
					if (
						crossed[0] &&
						crossed[5] &&
						crossed[10] &&
						crossed[15]
					) {
						plusOnes++
					}
					if (crossed[0] && crossed[4] && crossed[8]) {
						yellowPoints += 10
					}
					if (crossed[1] && crossed[5] && crossed[13]) {
						yellowPoints += 14
					}
					if (crossed[2] && crossed[10] && crossed[14]) {
						yellowPoints += 16
					}
					if (crossed[7] && crossed[11] && crossed[15]) {
						yellowPoints += 20
					}
					if (crossed[13] && crossed[14] && crossed[15]) {
						foxes += 1
					}
					if (props.points[myColor] !== yellowPoints) {
						props.setPoints({
							...props.points,
							[myColor]: yellowPoints,
						})
					}
					break
				case 'blueA':
					if (crossed[3] && crossed[7] && crossed[11]) {
						plusOnes++
					}
					if (crossed[4] && crossed[8]) {
						redos++
					}
					if (
						crossed[8] &&
						crossed[9] &&
						crossed[10] &&
						crossed[11]
					) {
						foxes += 1
					}

					bluePoints =
						blueListOfPoints[crossed.filter(Boolean).length - 1] ||
						0

					if (props.points[myColor] !== bluePoints) {
						console.log(props.points[myColor], bluePoints)
						props.setPoints({
							...props.points,
							[myColor]: bluePoints,
						})
					}
					break
				case 'greenA':
					if (crossed.length >= 4 && crossed[3]) {
						plusOnes = 1
						if (crossed.length >= 7 && crossed[6]) {
							foxes += 1
							if (crossed.length >= 10 && crossed[9]) {
								redos = 1
							}
						}
					}
					greenPoints =
						greenListOfPoints[crossed.filter(Boolean).length - 1] ||
						0
					if (props.points[myColor] !== greenPoints) {
						props.setPoints({
							...props.points,
							[myColor]: greenPoints,
						})
					}
					break
				case 'orangeA':
					if (crossed.length >= 3 && crossed[2]) {
						redos++
						if (crossed.length >= 6 && crossed[5]) {
							plusOnes++
							if (crossed.length >= 8 && crossed[7]) {
								foxes += 1
							}
						}
					}
					orangePoints = input.reduce(
						(prev, input) => prev + (input.points || 0),
						0
					)
					if (props.points[myColor] !== orangePoints) {
						console.log(props.points[myColor], orangePoints)
						props.setPoints({
							...props.points,
							[myColor]: orangePoints,
						})
					}

					break
				case 'purpleA':
					if (crossed.length >= 3 && crossed[2]) {
						redos++
						if (crossed.length >= 5 && crossed[4]) {
							plusOnes++
							if (crossed.length >= 7 && crossed[6]) {
								foxes += 1
								if (crossed.length >= 8 && crossed[7]) {
									redos++
									if (crossed.length >= 11 && crossed[10]) {
										plusOnes++
									}
								}
							}
						}
					}
					purplePoints = input.reduce(
						(prev, input) => prev + (input.points || 0),
						0
					)
					if (props.points[myColor] !== purplePoints) {
						console.log(props.points[myColor], purplePoints)
						props.setPoints({
							...props.points,
							[myColor]: purplePoints,
						})
					}
					break
				default:
					return
			}
			if (props.foxes[myColor] !== foxes) {
				props.setFoxes({
					...props.foxes,
					[myColor]: foxes,
				})
			}
			if (props.plusOnes[myColor] !== plusOnes) {
				props.setPlusOnes({ ...props.plusOnes, [myColor]: plusOnes })
			}
			if (props.redos[myColor] !== redos) {
				props.setRedos({ ...props.redos, [myColor]: redos })
			}
		}
	}, [wrapperRef, crossed, props, input])

	const renderedInput = input.map((singleInput, i) => {
		let isActive = !oneByOne || !i || crossed[i - 1]
		if (typeof activeInputs !== 'undefined') {
			isActive = i < activeInputs
		}

		return (
			<div key={i} className='input-container'>
				{smallerSign && i ? <div className='smaller-sign'></div> : null}

				<Input
					isBigger={isBigger}
					tooltip={tooltip}
					key={i}
					oneByOne={oneByOne}
					active={isActive}
					value={singleInput}
					input={singleInput}
					inputs={input}
					index={i}
					type={type}
					crossed={crossed}
					termChanged={setCrossed}
				/>
			</div>
		)
	})

	return (
		<div className='input-wrapper' ref={wrapperRef}>
			<Arrows direction='X' arrowsX={arrowsX} inputNum={input.length} />
			<Arrows direction='Y' arrowsY={arrowsY} inputNum={input.length} />
			<Arrows direction='Z' arrowsZ={arrowsZ} /> {renderedInput}
		</div>
	)
}

export default InputWrapper
