
// vocal, drum, bass, and other are volumes ranging from 0 to 100

//background is 1500(width) x 800(height)


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)


let map1 = map(vocal, 0, 100, 200, 600)
let map2 = map(vocal, 0, 100, 100, 300) 

let map3 = map(bass, 0, 100, 100, -50)

let map4 = map(bass, 0, 100, 300, -130)


  fill(255, 204, 0)

  rect(width/1.9 , height/8.5 , 100, 200 )
  rect(width/2.5 , height/8.5 , 100, 200 )

  ellipse(width/2 , height/1.8 , map1, map2)



  if (bass > 70){
    ellipse(width/9, height/2 + map3, 30, 30)

  } else {
    ellipse(width/9, height/2 , 30, 30)
  }


  if (bass > 70){
    ellipse(width/15, height/2 + map4, 30, 30)

  } else {
    ellipse(width/15, height/2 , 30, 30)
  }



}




























  // textFont('Helvetica'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
