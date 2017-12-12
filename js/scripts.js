Client = function(name, county, size, energy) {
  this.name = name;
  this.county = county;
  this.size = size;
  this.energy = energy;
}

var dogOne = {
  name: "Charlie",
  age: 1,
  walk: 2,
  play: 1,
  size: "small",
};

var dogTwo = {
  name: "Wishbone",
  age: 4,
  walk: 4,
  play: 2,
  size: "medium",
};

var dogThree = {
  name: "Pepper",
  age: 7,
  walk: 4,
  play: 3,
  size: "medium",
};

var dogFour = {
  name: "MJ",
  age: 2,
  walk: 6,
  play: 2,
  size: "large",
};


$(document).ready(function() {
$("#clientInfo").submit(function(event) {
  event.preventDefault();
  var name = $("#name").val();
  var county = $("#county").val();
  var size = $("#size").val();
  var energy = $("#energy").val();
  var newClient = new Client(name, county, size, energy);
  console.log(newClient);
  console.log(dogOne);
  console.log(dogTwo);
  console.log(dogThree);
  console.log(dogFour);
  });
});
