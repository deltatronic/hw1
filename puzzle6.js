
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
 

 

goRight(1);										
 
if (getColor() == "blue") {	  									
	goDown(3);
} else {										 	
	goUp(3);
	
}

if (getColor() == "blue") {
  goRight(1);
  goDown(1);
  goUp(1);
} else {										 	
	goLeft(1);
	goUp(1);
  goDown(1);
}
