/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

const seleccionado = document.querySelectorAll("#genero");
for
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = function() {
      var newNode = document.createElement("img");
      var oldsrc=this.src;
      var parts=oldsrc.split("/");
      newNode.src="images/" + parts[parts.length-1];
      newNode.style="border:solid 3px black;";
      newNode.className='bigImg';
      this.parentNode.appendChild(newNode);
      console.log(this.src);
    

//const seleccionado = document.querySelector('input[name="genero"]:checked').value;
//const renglon = document.querySelector(seleccionado);

console.log(seleccionado);

