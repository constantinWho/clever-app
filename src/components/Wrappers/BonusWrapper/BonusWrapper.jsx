import './BonusWrapper.css'
import shortid from 'shortid'
import Bonus from './Bonus/Bonus'

const BonusArea = ({ bonus }) => {
	let customClass =
		bonus.length >= 4 || bonus.length === 2
			? 'bonus-wrapper-col'
			: 'bonus-wrapper-row'

	const renderedBonus = bonus.map((bonus, i) => (
		<Bonus
			styleSheet={bonus.styleSheet}
			value={bonus.value}
			key={shortid.generate()}
			index={i}
		/>
	))

	return <div className={customClass}>{renderedBonus}</div>
}

export default BonusArea
