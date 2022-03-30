// commeent header

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function enterclicked () {
  // input
  const baseA = parseInt(document.getElementById('base-a').value)
  const baseB = parseInt(document.getElementById('base-b').value)
  const height = parseInt(document.getElementById('height').value)
  
  // process
  const area = (( baseA + baseB )/ 2 ) * height
  
  // output
  document.getElementById('area').innerHTML = '<p>Area is: ' + area + ' cm²</p>'
}
