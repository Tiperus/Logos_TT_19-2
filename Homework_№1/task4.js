
let main_height;
let main_width;
let bgcolor;
let scd_height;
let scd_width;
let background;
let span;
 let name = prompt('What is your name');
  main_height = prompt ('Write the height of the first block')
 main_width = prompt ('Write the width of the first block')
  bgcolor = prompt ('Write the background color')
 scd_height = prompt ('Write the height of the second block')
  scd_width = prompt ('Write the width of the second block')
  background = prompt ('Share the link for background')
document.write(`<section style="height:${main_height}px; width:${main_width}px; background-color:${bgcolor}; position: absolute; left:50%; display:flex; align-items:center; flex-direction:column; justify-content:center; text-align:center; flex-wrap:wrap; white-space:pre-wrap"><div style="width:${scd_height}px; height:${scd_width}px; background:url(${background});"></div><h2 style="">Welcome,  ${name} </h2></section>`)
