const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]
function chooseStations(stations) {
  const goodStations = [];

  for (let type of stations) {
 
    let capacity = type[1];

    if(capacity >= 20 && (type[2] === 'school' || type[2] === 'community centre')) {
      goodStations.push(type[0]);
    
    }
  }
  return goodStations;
}
console.log(chooseStations(stations)); 