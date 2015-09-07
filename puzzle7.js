
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
