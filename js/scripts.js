document.addEventListener('DOMContentLoaded', function(){
  const triangleLengths = document.getElementById('triangle');
  triangleLengths.addEventListener('submit', (e) => {
  let sideA = parseInt(document.getElementById('side-a').value);
  let sideB = parseInt(document.getElementById('side-b').value);
  let sideC = parseInt(document.getElementById('side-c').value);

  const equilateral = document.getElementById('equilateral');
  const isoceles = document.getElementById('isosceles');
  const scalene = document.getElementById('scalene');
  const notATriangle = document.getElementById('not-a-triangle');

  let triangleSum = sideA + sideB + sideC;

  if ( sideA === sideB && sideB === sideC) {
    console.log('equilateral')}
  else if (sideA === sideB || sideC === sideA || sideB ===sideC) {
    console.log("isoceles")}
  else if (sideA !== sideB && sideB !== sideC) {
    console.log("scalene")}
  else if ((sideA + sideB) <= sideC || (sideC + sideA) <= sideB || (sideB + sideC)<= sideA)
    {console.log("Not a triangle")}

  e.preventDefault(); 
  });
});