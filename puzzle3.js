function goDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

function goRight(total) {
  var count = 0;
  while (count < total) {
    right();
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
up();
