function goDown(total){
  var count = 0;
  while (count < total){
    down();
    count = count + 1;
  }
}
 
 
function goRight(total){
  var count = 0;
  while (count < total){
    right();
    count = count + 1;
    }
}
 
 
function goLeft(total){
  var count = 0;
  while (count < total){
    left();
    count = count + 1;
    }
}
 
function goUp(total){
  var count = 0;
  while (count < total){
    up();
    count = count + 1;
    }
}


function directionDown(total) {
  var count = 0;
  while (count < total){
    down();
    count = count + 1;
  }
  right();
  if (remainingDots() > 0){
  goRight(1);
  }
 
}
 

 
function directionUp(total) {
  var count = 0;
  while (count < total){
    up();
    count = count + 1;
  }
  right();
  if (remainingDots() > 0){
  goRight(1);
  }
}
 
  

function zigzag(total){
  var count = 0;
  while (count < total){
  directionUp(7);
  directionDown(7);
  count = count + 1;
  }
}
    
directionDown(8);
zigzag(2);
