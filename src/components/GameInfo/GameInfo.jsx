import RoundCounter from './counters/RoundCounter'
import RedoCounter from './counters/RedoCounter'
import PlusOneCounter from './counters/PlusOneCounter'
import './GameInfo.css'

const GameInfo = () => {
	const round = [
		{
			value: 'REDO',
		},
		{
			value: '+1',
		},
		{
			value: 'REDO',
		},
		{
			value: 'X|6',
		},
		{
			value: '',
		},
		{
			value: '',
		},
	]

	return (
		<div className='game-info'>
			<RoundCounter round={round} />
			<RedoCounter />
			<PlusOneCounter />
		</div>
	)
}

export default GameInfo
