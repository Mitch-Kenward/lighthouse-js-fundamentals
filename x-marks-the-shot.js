const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let xPosition = 0;
  let yPosition = 0;

  for(let i = 0; i <= moves.length; i++) {
    if(moves[i] === 'north') {
      yPosition++;
    } else if(moves[i] === 'south') {
      yPosition--;
    } else if(moves[i] === 'east') {
      xPosition++;
    } else if(moves[i] === 'west') {
      xPosition--;
    }
  }
  return [xPosition, yPosition];
}
console.log(finalPosition(moves));