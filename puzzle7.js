// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

 
function goDown(total){
  var count = 0;
  while (count < total){
    down();
    count++;
  }
}
 
 
function goRight(total){
  var count = 0;
  while (count < total){
    right();
    count++;
    }
}
 
 
function goLeft(total){
  var count = 0;
  while (count < total){
    left();
    count++;
    }
}
 
function goUp(total){
  var count = 0;
  while (count < total){
    up();
    count++;
    }
}
 
while (getColor()!= "red") {
  down();
}
goRight(2);

while (getColor()!= "red") {
  up();
}
while (getColor()!= "red") {
  down();
}
goRight(2);
while (getColor()!= "red") {
  down();
}
goRight(2);
while (getColor()!= "red") {
  up();
}
goRight(2);
while (getColor()!= "red") {
  down();
}
goRight(1);
