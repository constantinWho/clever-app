import InputWrapper from '../Wrappers/InputWrapper/InputWrapper'
import BonusWrapper from '../Wrappers/BonusWrapper/BonusWrapper'
import PointsWrapper from '../Wrappers/PointsWrapper/PointsWrapper'
import './BlueArea.css'
import React from 'react'

const BlueArea = () => {
	const input = [
		{
			disabled: true,
			dice: true,
		},
		{
			value: 2,
		},
		{
			value: 3,
		},
		{
			value: 4,
		},
		{
			value: 5,
		},
		{
			value: 6,
		},
		{
			value: 7,
		},
		{
			value: 8,
		},
		{
			value: 9,
		},
		{
			value: 10,
		},
		{
			value: 11,
		},
		{
			value: 12,
		},
	]
	const bonus = {
		col: [
			{
				type: 'col',
				styleSheet: 'orange',
				value: 5,
			},
			{
				type: 'col',
				styleSheet: 'yellow',
				value: 'X',
			},
			{
				type: 'col',
				styleSheet: 'fox',
				value: 'FOX',
			},
		],
		row: [
			{
				type: 'row',
				styleSheet: 'redo',
				value: 'REDO',
			},
			{
				type: 'row',
				styleSheet: 'green',
				value: 'X',
			},
			{
				type: 'row',
				styleSheet: 'purple',
				value: 6,
			},
			{
				type: 'row',
				styleSheet: 'plus-one',
				value: '+1',
			},
		],
	}
	const points = [
		{
			value: 1,
		},
		{
			value: 2,
		},
		{
			value: 4,
		},
		{
			value: 7,
		},
		{
			value: 11,
		},
		{
			value: 16,
		},
		{
			value: 22,
		},
		{
			value: 29,
		},
		{
			value: 37,
		},
		{
			value: 46,
		},
		{
			value: 56,
		},
	]

	return (
		<div className='blue-area'>
			<PointsWrapper points={points} />
			<InputWrapper input={input} arrowsX arrowsY />
			<BonusWrapper bonus={bonus.col} />
			<BonusWrapper bonus={bonus.row} />
		</div>
	)
}

export default BlueArea
