const characters = [    	
	{ name: "Mario", life: 100, attack: 50 },
	{ name: "Luigi", life: 90, attack: 60 },    	
	{ name: "Peach", life: 80, attack: 70 }, 	
	{ name: "Toad", life: 70, attack: 80 },     
	{ name: "Bowser", life: 60, attack: 90 }  
];

/* MAP */
const ratioLifeAttack = character => character.life / character.attack;   
const ratios = characters.map(ratioLifeAttack);
console.log(ratios); 

/* FILTER */
const ratioSuperiorAUn = character => character.life / character.attack > 1; 
const charactersFilters = characters.filter(ratioSuperiorAny);
console.log(charactersFilters); 

/* REDUCE */
const sumLife = (accumulator, character) => accumulator + character.life;
const lifeTotal = characters.reduce(lifeSum, 0);
console.log(sumLife); 

/* PIPING */
const ratioLifeAttack = character => character.life / character.attack;
const filterHighRatio = character => ratioLifeAttack(character) > 1;
const charactersFilters = characters
	.map(ratioLifeAttack)
	.filter(filterHighRatio);
console.log(charactersFilters); 

const ratioLifeAttack = character => character.life / character.attack;
const sumRatios = (sum, ratio) => sum + ratio;
const averageRatios = characters
	.map(ratioLifeAttack)
	.reduce(sumRatios, 0) / characters.length;
console.log(averageRatios); 
