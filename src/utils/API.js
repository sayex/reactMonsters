
 export function getMonsters(){
  return fetch("https://www.dnd5eapi.co/api/monsters").then(data => data.json())
}

export function getMonster(id){
	return fetch(`https://www.dnd5eapi.co/api/monsters/${id}`).then(data => data.json())
}