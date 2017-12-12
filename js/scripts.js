Client = function(name, county, size, energy) {
  this.name = name;
  this.county = county;
  this.size = size;
  this.energy = energy;
}


Client.prototype.pickDog = function() {
  if (this.county === "1") {
    return dogOne.name;
  } else if (this.county === "2") {
    return dogTwo.name;
  } else if (this.county === "3") {
    return dogThree.name;
  } else if (this.county === "4") {
    return dogFour.name;
  }
}
var dogOne = {
  name: "Charlie",
  age: 1,
  walk: 2,
  play: 1,
  size: "small",
  county: "Multnomah County"
};

var dogTwo = {
  name: "Wishbone",
  age: 4,
  walk: 4,
  play: 2,
  size: "medium",
  county: "Washington County"
};

var dogThree = {
  name: "Pepper",
  age: 7,
  walk: 4,
  play: 3,
  size: "medium",
  county: "Clackamas County"
};

var dogFour = {
  name: "MJ",
  age: 2,
  walk: 6,
  play: 2,
  size: "large",
  county: ["The Shire"]
};

$(document).ready(function() {
$("#clientInfo").submit(function(event) {
  event.preventDefault();
  var name = $("#name").val();
  var county = $("#county").val();
  var size = $("#size").val();
  var energy = $("#energy").val();
  var newClient = new Client(name, county, size, energy);

  $("ul#dogs").append("<li>" + newClient.pickDog() + "</li>");
  });
});
