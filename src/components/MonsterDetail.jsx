import { useEffect, useState } from 'react';
import { getMonster } from '../utils/API';
import PropTypes from 'prop-types';

const MonsterDetail = ({ id }) => {
	const [monster, setMonster] = useState({});

	useEffect(() => {
		getMonster(id).then((data) => setMonster(data));
	}, []);

	return (
		<>
			{monster.image === undefined ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>{monster.name}</h1>
					<p>{monster.size}</p>
					<p>{monster.type}</p>
					<p>{monster.alignment}</p>
					{/* <p>{monster.armor_class}</p> */}
					<p>{monster.hit_points}</p>
					{/* <p>{monster.speed}</p> */}
					<img src={`https://www.dnd5eapi.co${monster.image}`} alt="image of monster" />
				</div>
			)}
		</>
	);
};

MonsterDetail.propTypes = {
	id: PropTypes.string
};

export default MonsterDetail;
