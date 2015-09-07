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

goDown(2);
var oddsquare = getColor();
getColor();
goDown(3);
goRight(2);
setColor(oddsquare);
goRight(2);
goUp(1);
