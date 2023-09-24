
// vocal, drum, bass, and other are volumes ranging from 0 to 100

//background is 1500(width) x 800(height)


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)

  angleMode(DEGREES);

let map1 = map(vocal, 0, 100, 200, 600)
let map2 = map(vocal, 0, 100, 100, 300) 

let map3 = map(bass, 0, 100, 100, -50)

let map4 = map(bass, 0, 100, 300, -130)

let map5 = map(bass, 0, 100, 80, -35)

let map6 = map(bass, 0, 100, 20, -10)

  fill(255, 204, 0)

  // rect(width/1.9 , height/8.5 , 100, 200 )
  // rect(width/2.5 , height/8.5 , 100, 200 )

  // ellipse(width/2 , height/1.8 , map1, map2)



  if (bass > 70){
    ellipse(width/9, height/1.2 + map3, 30, 30)

  } else {
    ellipse(width/9, height/1.2 , 30, 30)
  }


  if (bass > 70){
    ellipse(width/15, height/1.2 + map4, 30, 30)

  } else {
    ellipse(width/15, height/1.2 , 30, 30)
  }

  if (bass > 70){
    ellipse(width/1.5, height/1.255 + map5, 100, 100)

  } else {
    ellipse(width/1.5, height/1.255 , 100, 100)

  }


  if (bass > 70){
    ellipse(width/3, height/1.75 + map6, 500, 500)

  } else {
    ellipse(width/3, height/1.75 , 500, 500)

  }
}













function fishnotevil(x, y, face_be_happy, fin) { //the totally definitely not evil fish



  strokeWeight(0); //I dont want most of the fish to have an outline

  fill(54, 79, 110); // setting the fill to that nice blue

  triangle(x - 70, y + 4, x - 90, y - 20, x - 87, y - 6); //top tail fin

  triangle(x - 70, y + 3, x - 87, y - 7, x - 90, y + 8); //bottom tail fin

  arc(x, y, 150, 60, 0, 180, CHORD); //body


  triangle(x - 50, y + .5, x - 44, y - 6, x - 42, y + .5); //read top body fin

  fill(0); //black fill for the eye
  circle(x + 60, y + 5, 5); //eye

  fill(54, 79, 110); //reseting the fill to the blue

  stroke(229, 216, 189); //setting th stroke color to a off white

  strokeWeight(1.5); //so that you can see the fin, mouth, and body line

  arc(x, y + 13, 98, 10, 0, 180); //body line

  if (face_be_happy >= 1) {
    arc(x + 60, y + 13, 10, 10, 100, 170); //happy mouth
  } else {
    arc(x + 63, y + 13, 10, 5, 180, 350); //sad mouth
  }



  if (fin >= 1) { //if statment to make the fin show up or not 
    strokeWeight(1);

    triangle(x + 50, y + 10, x + 48, y + 15, x + 30, y + 18); //body fin
  }



  //everything below is the hat


  noFill(); //no fill for the brim of the hat
  strokeWeight(2); //setting the stroke weight so the brim as some weight to it
  stroke(255, 72, 165); //pink color for the hat 

  arc(x + 57, y - 7, 15, 15, 35, 140); //brim of the hat

  fill(255, 72, 165); //pink color for the hat 

  triangle(x + 55, y - .5, x + 57, y - 8, x + 59, y - .5); //tringle of the hat

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
