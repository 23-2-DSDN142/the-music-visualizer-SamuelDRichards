
// vocal, drum, bass, and other are volumes ranging from 0 to 100

//background is 1500(width) x 800(height)

let x = -250; //adjust the postion of the fish on the x - axis
let y = 250; //adjust the postion of the fish on the y - axis


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



  fishnotevil(x, y, vocal)







  // if (bass > 70){
  //   ellipse(width/9, height/1.2 + map3, 30, 30)

  // } else {
  //   ellipse(width/9, height/1.2 , 30, 30)
  // }


  // if (bass > 70){
  //   ellipse(width/15, height/1.2 + map4, 30, 30)

  // } else {
  //   ellipse(width/15, height/1.2 , 30, 30)
  // }

  // if (bass > 70){
  //   ellipse(width/1.5, height/1.255 + map5, 100, 100)

  // } else {
  //   ellipse(width/1.5, height/1.255 , 100, 100)

  // }


  // if (bass > 70){
  //   ellipse(width/3, height/1.75 + map6, 500, 500)

  // } else {
  //   ellipse(width/3, height/1.75 , 500, 500)

  // }
}













function fishnotevil(x, y, vocal) { //the totally definitely not evil fish

  rotate(270)

  scale(2)



  strokeWeight(0); //I dont want most of the fish to have an outline

  fill(54, 79, 110); // setting the fill to that nice blue

  triangle(x - 70, y + 4, x - 90, y - 20, x - 87, y - 6); //top tail fin

  triangle(x - 70, y + 3, x - 87, y - 7, x - 90, y + 8); //bottom tail fin

  arc(x, y, 150, 60, 0, 180, CHORD); //body


  triangle(x - 50, y + .5, x - 44, y - 6, x - 42, y + .5); //read top body fin

  fill(0); //black fill for the eye
  circle(x + 50, y + 5, 5); //eye

  fill(54, 79, 110); //reseting the fill to the blue

  stroke(229, 216, 189); //setting th stroke color to a off white

  strokeWeight(1.5); //so that you can see the fin, mouth, and body line

  arc(x, y + 13, 98, 10, 0, 180); //body line





  fill(229, 216, 189) //white

  stroke(54, 79, 110) //blue

  // fill(229, 216, 189) // use for setting up fish
  // stroke(229, 216, 189)

  if (vocal > 30 && vocal < 50){

  fill(54, 79, 110) //reseting the fill to the blue

  triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y - 0)  //top of mouth

  triangle(x + 60, y + 15, x + 63, y + 15, x + 72, y + 10 ) //bottom of mouth


  fill(229, 216, 189) //white

   stroke(54, 79, 110) //blue

  arc(x + 74, y + 4, 15, 12, 100, 170);  //mouth 1
  }
  else{

    arc(x + 73, y + 5, 15, 5, 100, 170); //happy mouth

  }
  
  if (vocal >= 50 && vocal < 70){

  fill(54, 79, 110) //reseting the fill to the blue


  triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y - 0)  //top of mouth

  triangle(x + 60, y + 15, x + 63, y + 15, x + 72, y + 12 ) //bottom of mouth

  fill(229, 216, 189) //white

   stroke(54, 79, 110) //blue

    arc(x + 74, y + 4, 20, 16, 100, 170); // mouth 2
  }
 

  if (vocal >= 70 && vocal < 75) {
    fill(54, 79, 110) //reseting the fill to the blue

  triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y )  //top of mouth

  triangle(x + 55, y + 9, x + 59, y + 18, x + 70.5, y + 16.5 ) //bottom of mouth

  fill(229, 216, 189) //white

   stroke(54, 79, 110) //blue

    arc(x + 74, y + 4, 25, 25, 100, 170); // mouth 3
  }
    
  if (vocal >= 75) {

    fill(54, 79, 110) //reseting the fill to the blue

    triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y )  //top of mouth
  
    triangle(x + 52, y + 12, x + 50, y + 22, x + 69, y + 21 ) //bottom of mouth
  
    fill(229, 216, 189) //white
  
     stroke(54, 79, 110) //blue
    arc(x + 74, y + 4, 35, 35, 100, 170); // mouth 3
  }
  

  


  fill(54, 79, 110); //reseting the fill to the blue

  stroke(229, 216, 189); //setting th stroke color to a off white


  strokeWeight(1);
  triangle(x + 50, y + 10, x + 48, y + 15, x + 30, y + 18); //body fin



  //everything below is the hat


  noFill(); //no fill for the brim of the hat
  strokeWeight(2); //setting the stroke weight so the brim as some weight to it
  stroke(255, 72, 165); //pink color for the hat 

  arc(x + 52, y - 7, 15, 15, 35, 140); //brim of the hat

  fill(255, 72, 165); //pink color for the hat 

  triangle(x + 50, y - .5, x + 52, y - 8, x + 54, y - .5); //tringle of the hat


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
