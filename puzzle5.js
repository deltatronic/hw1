
function goRight(total){
  var count = 0;
  while (count < total){
    right();
    count = count + 1;
    }
}

//function key to go left

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

function goDown(total){
  var count = 0;
  while (count < total){
    down();
    count = count + 1;
    }
}



goRight(2);

if (getColor() == "blue") {
  goDown(1);
  goRight(2);
  
} else {
  
  
  goUp(1);
  goRight(2);
}

if (getColor() == "blue") {
  goDown(1);
  goRight(2);
  
} else {
  

  
  goUp(1);
  goRight(2);
}

if (getColor() == "blue") {
  goDown(1);
  goRight(3);
  
} else {
  
  
  goUp(1);
  goRight(3);
}
