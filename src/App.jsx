import { useEffect, useState } from 'react';
import { getMonsters } from './utils/API';
import './App.css';
import MonsterCard from './components/monsterCard';
import MonsterDetail from './components/MonsterDetail';

function App() {
	const [monsters, setMonsters] = useState([]);

	async function pageLoad() {
		const data = await getMonsters();
		setMonsters(data.results);
	}

	useEffect(() => {
		pageLoad();
	}, []);
	return (
		<>
			<MonsterDetail id={'aboleth'} />
			{monsters === undefined ? <h1>Loading...</h1> : monsters.map((monster) => <MonsterCard key={monster.index} monster={monster} />)}
		</>
	);
}

export default App;
