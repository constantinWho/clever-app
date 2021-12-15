import InputWrapper from '../Wrappers/InputWrapper/InputWrapper'
import BonusWrapper from '../Wrappers/BonusWrapper/BonusWrapper'
import PointsWrapper from '../Wrappers/PointsWrapper/PointsWrapper'
import './YellowArea.css'

const YellowArea = props => {
	const input = [
		{
			value: 3,
		},
		{
			value: 6,
		},
		{
			value: 5,
		},
		{
			crossed: true,
			disabled: true,
		},
		{
			value: 2,
		},
		{
			value: 1,
		},
		{
			crossed: true,
			disabled: true,
		},
		{
			value: 5,
		},
		{
			value: 1,
		},
		{
			crossed: true,
			disabled: true,
		},
		{
			value: 2,
		},
		{
			value: 4,
		},
		{
			crossed: true,
			disabled: true,
		},
		{
			value: 3,
		},
		{
			value: 4,
		},
		{
			value: 6,
		},
	]
	const bonus = [
		{
			type: 'col',
			styleSheet: 'blue',
			value: 'X',
		},
		{
			type: 'col',
			styleSheet: 'orange',
			value: 4,
		},
		{
			type: 'col',
			styleSheet: 'green',
			value: 'X',
		},
		{
			type: 'col',
			styleSheet: 'fox',
			value: 'FOX',
		},
		{
			type: 'col',
			styleSheet: 'plus-one',
			value: '+1',
		},
	]
	const points = [
		{
			value: 10,
		},
		{
			value: 14,
		},
		{
			value: 16,
		},
		{
			value: 20,
		},
	]

	return (
		<div className='yellowA'>
			<InputWrapper
				props={props}
				color='yellow'
				input={input}
				arrowsX={true}
				arrowsY={true}
				arrowsZ={true}
			/>
			<BonusWrapper bonus={bonus} />
			<PointsWrapper points={points} />
		</div>
	)
}
export default YellowArea
