import PropTypes from 'prop-types';
const MonsterCard = ({ monster }) => {
	return (
		<div className="card" data-url={monster.url}>
			<h2>{monster.name}</h2>
		</div>
	);
};

// MonsterCard.propTypes = {
// 	monster: propTypes.object
// };

MonsterCard.propTypes = {
	monster: PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string
	})
};

export default MonsterCard;
