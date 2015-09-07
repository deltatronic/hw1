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


function iRight(total){
  var count = 0;
  while (count < total){
    right();
    count++;
    }
}

//function key to go left

function iLeft(total){
  var count = 0;
  while (count < total){
    left();
    count++;
    }
}

//function key to go up
function iUp(total){
  var count = 0;
  while (count < total){
    up();
    count++;
    }
}

//function key go down 
function iDown(total){
  var count = 0;
  while (count < total){
    down();
    count++;
    }
}



iRight(2);

if (getColor() == "blue") {
  iDown(1);
  iRight(2);
  
} else {
  
  
  iUp(1);
  iRight(2);
}

if (getColor() == "blue") {
  iDown(1);
  iRight(2);
  
} else {
  

  
  iUp(1);
  iRight(2);
}

if (getColor() == "blue") {
  iDown(1);
  iRight(3);
  
} else {
  
  
  iUp(1);
  iRight(3);
}
