document.addEventListener('DOMContentLoaded', function(){
  const triangleLengths = document.getElementById('triangle');
  triangleLengths.addEventListener('submit', (e) => {
  let sideA = parseInt(document.getElementById('side-a').value);
  let sideB = parseInt(document.getElementById('side-b').value);
  let sideC = parseInt(document.getElementById('side-c').value);

  const equilateral = document.getElementById('equilateral');
  const isosceles = document.getElementById('isosceles');
  const scalene = document.getElementById('scalene');
  const notATriangle = document.getElementById('not-a-triangle');

  let triangleSum = sideA + sideB + sideC;

  if ((sideA + sideB) <= sideC || (sideC + sideA) <= sideB || (sideB + sideC)<= sideA) {
    $(notATriangle).show();
  }
  else if (sideA === sideB || sideC === sideA || sideB ===sideC) {
    $(isosceles).show();
    //console.log("isosceles")
  }
  else if (sideA !== sideB && sideB !== sideC) {
    $(scalene).show();
  }
  else if ( sideA === sideB && sideB === sideC) {
  $(equilateral).show();
  }
  triangleLengths.reset();
  e.preventDefault(); 
  });
});