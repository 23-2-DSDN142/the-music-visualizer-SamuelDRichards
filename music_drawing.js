let firstRun = true
let mountains;
let hills;
let lake;
let tree1;
let tree2;
let tree3;
let tree4;
let tree5;
let tree6;
let tree7;
let mic;
let speakerRight1;
let speakerRight2;
let speakerLeft1;
let speakerLeft2;
let speakerLeftnosie;
let speakerRightnosie;
let bassforspeakers = 0
let x = -100; //adjust the postion of the fish on the x - axis
let y = 500; //adjust the postion of the fish on the y - axis
// vocal, drum, bass, and other are volumes ranging from 0 to 100
//background is 1500(width) x 800(height)
function draw_one_frame(words, vocal, drum, bass, other,counter) {
  angleMode(DEGREES);

  if(firstRun){

    rectMode(CENTER);

    mountains = loadImage('pt3_image_0.png')

    hills = loadImage('pt3_image_1.png')

    lake = loadImage('pt3_image_2.png')

    tree1 = loadImage('tree_1.png')

    tree2 = loadImage('tree_2.png')

    tree3 = loadImage('tree_3.png')

    tree4 = loadImage('tree_4.png')

    tree5 = loadImage('tree_5.png')

    tree6 = loadImage('tree_6.png')

    tree7 = loadImage('tree_7.png')
    

    mic = loadImage('pt3_image_4.png')


    speakerRight1 = loadImage('speaker_right_1.png')

    speakerRight2 = loadImage('speaker_right_2.png')

    speakerLeft1 = loadImage('speaker_left_1.png')

    speakerLeft2 = loadImage('speaker_left_2.png')

    speakerLeftnosie = loadImage('speaker_left_nosie.png')

    speakerRightnosie = loadImage('speaker_right_nosie.png')

    

    firstRun = false

  }
  background(180)


  image(mountains, 0, 0)

  image(hills, 0, 0)

  image(lake, 0, 0)

  image(mic, 0, 0)

  speakers(bass)

  tree(drum)

push()
  fishnotevil(x, y, vocal)
pop()

}


function speakers(bass) {

  image(speakerRight1, 0, 0)

  image(speakerLeft1, 0, 0)
 
  if(bass = 75){
    bassforspeakers +++ 1
  }

  if(bassforspeakers === 3){
  image(speakerRight2, 0, 0)
  mage(speakerLeft1, 0, 0)
  bassforspeakers  === 0
  }
}

function tree(drum) {
  if (drum <= 40){
    image(tree1, 0, 0)
  }
  if (drum >= 40 && drum < 50){
    image(tree2, 0, 0)
  }
  if (drum >= 50 && drum < 60){
    image(tree3, 0, 0)
  }
  if (drum >= 60 && drum < 70){
    image(tree4, 0, 0)
  }
  if (drum >= 70 && drum < 80){
    image(tree5, 0, 0)
  }
  if (drum >= 80 && drum < 90){
    image(tree6, 0, 0)
  }
  if (drum >= 90 && drum <= 100){
    image(tree7, 0, 0)
  }
}

function fishnotevil(x, y, vocal) { //the totally definitely not evil fish

  rotate(295)

  scale(2)


  fill(54, 79, 110); //reseting the fill to the blue

  stroke(229, 216, 189); //setting th stroke color to a off white

  strokeWeight(1);
  triangle(x + 55, y + 10, x + 44, y + 13, x + 33, y + 40); //body fin

  

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



  if(vocal <= 50){


    fill(54, 79, 110); //reseting the fill to the blue

    stroke(229, 216, 189); //setting th stroke color to a off white
  
    strokeWeight(1.5); //so that you can see the fin, mouth, and body line

    arc(x + 72, y + 5, 15, 5, 100, 170); //happy mouth

    stroke(54, 79, 110)
    }


  if (vocal > 50 && vocal < 65){

  fill(54, 79, 110) //reseting the fill to the blue

  triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y - 0)  //top of mouth

  triangle(x + 60, y + 15, x + 63, y + 15, x + 72, y + 10 ) //bottom of mouth


  //  fill(4,142,131) //pond 
   fill(229, 216, 189) //white

   stroke(54, 79, 110) //blue

  arc(x + 74, y + 4, 15, 12, 100, 170);  //mouth 1
  }
  
  if (vocal >= 65 && vocal < 75){

  fill(54, 79, 110) //reseting the fill to the blue


  triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y - 0)  //top of mouth

  triangle(x + 60, y + 15, x + 63, y + 15, x + 72, y + 12 ) //bottom of mouth

  fill(229, 216, 189) //white
  // fill(4,142,131) //pond 

    arc(x + 74, y + 4, 20, 16, 100, 170); // mouth 2
  }
 

  if (vocal >= 75 && vocal < 85) {
    fill(54, 79, 110) //reseting the fill to the blue

  triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y )  //top of mouth

  triangle(x + 55, y + 9, x + 59, y + 18, x + 70.5, y + 16.5 ) //bottom of mouth

  fill(229, 216, 189) //white
  // fill(4,142,131) //pond 

    arc(x + 74, y + 4, 25, 25, 100, 170); // mouth 3
  }
    
  if (vocal >= 85) {

    fill(54, 79, 110) //reseting the fill to the blue

    triangle(x + 58, y + 2, x + 65, y + 2, x + 75, y )  //top of mouth
  
    triangle(x + 52, y + 12, x + 50, y + 22, x + 69, y + 21 ) //bottom of mouth
  
    fill(229, 216, 189) //white
    // fill(4,142,131) //pond 
  
    arc(x + 74, y + 4, 35, 35, 100, 170); // mouth 3
  }
  

  


  fill(54, 79, 110); //reseting the fill to the blue

  stroke(229, 216, 189); //setting th stroke color to a off white

  strokeWeight(1);
  triangle(x + 55, y + 10, x + 44, y + 13, x + 38, y + 37); //body fin



  //everything below is the hat


  noFill(); //no fill for the brim of the hat
  strokeWeight(2); //setting the stroke weight so the brim as some weight to it
  stroke(255, 72, 165); //pink color for the hat 

  arc(x + 52, y - 7, 15, 15, 35, 140); //brim of the hat

  fill(255, 72, 165); //pink color for the hat 

  triangle(x + 50, y - .5, x + 52, y - 8, x + 54, y - .5); //tringle of the hat


}
