// length x width
function calculateRectangleArea(length, width) {
  let recArea = length * width;
  if( recArea <= 0) {
    return undefined;
  } else {
    return recArea;
  }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined 

// length x height / 2
function calculateTriangleArea(base, height) {
  let triArea = base * height / 2;
  if( triArea <= 0) {
    return undefined;
  } else {
    return triArea;
  }
} 
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined 
// π x radius2
function calculateCircleArea(radius) {
  if(radius < 0) {
    return undefined;
  } else {
    return  Math.PI * radius * radius;
  }

}
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined 