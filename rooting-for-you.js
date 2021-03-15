function judgeVegetable(vegetables, metric) {
  let winner = vegetables[0];
  for(let i = 1; i < vegetables.length; i++) {
    let veggies = vegetables[i];
    if(veggies[metric] > winner[metric]) {
      winner = veggies;
    }
  }  
    return winner.submitter;
} 

f
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'

judgeVegetable(vegetables, metric)