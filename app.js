console.log("Hello console");

// Tis there but not assigend a value yet.
var name = null;
// var name; <-- poor coding, just messy.

// fn handle name
function returnName() {
 	name = 'Max';
	return name;
}

/*
switch (expression) {
  case expression:

    break;
  default:

}

if (expression) {
  // do somehing
} else if (something) {

} else {
  something
}
*/



function getData (data) {
	console.log('the data is ' + data + ' grabbed from ' + returnName() +"'s brain");
}

//console.log(getData(1), "Ok done?", 200);


function randomNumber () {
	return Math.floor(Math.random() * 100 + 1);
}

var random = randomNumber();


console.log(random);


var data = {
  fruits: {
    1: 'Raspberries',
    2: 'Strawberries'
  },
  extra: {
    1: 'yoghurt',
    2: 'syrup'
  }
};




console.table(data);
