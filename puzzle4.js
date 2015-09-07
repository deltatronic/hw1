function goDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
goDown(4);
right();
var oddsquare = getColor();
getColor();
down();
setColor(oddsquare);
right();
right();
right();
up();
var boxie = getColor();
getColor();
down();
setColor(boxie);
right();
right();
