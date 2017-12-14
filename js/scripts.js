Client = function(name, county, size, energy) {
  this.name = name;
  this.county = county;
  this.size = size;
  this.energy = energy;
}


Client.prototype.pickDog = function() {
  if (this.county === "1") {
    $("#dogs").append("<li>" + multOne.name + "</li>");
    $("#dogs").append("<li>" + multTwo.name + "</li>");
    $("#dogs").append("<li>" + multThree.name + "</li>");
  }
  //  else if (this.county === "2") {
  //   return dogTwo.name;
  // } else if (this.county === "3") {
  //   return dogThree.name;
  // } else if (this.county === "4") {
  //   return dogFour.name;
  // }
}
var multOne = {
  name: "Charlie",
  age: 1,
  walk: 2,
  play: 1,
  size: "small",
  county: "Multnomah County"
};

var multTwo = {
  name: "Buster",
  age: 1,
  walk: 2,
  play: 1,
  size: "small",
  county: "Multnomah County"
};

var multThree = {
  name: "Lolita",
  age: 1,
  walk: 2,
  play: 1,
  size: "small",
  county: "Multnomah County"
};

var washOne = {
  name: "Wishbone",
  age: 4,
  walk: 4,
  play: 2,
  size: "medium",
  county: "Washington County"
};

var washTwo = {
  name: "Pepper",
  age: 4,
  walk: 4,
  play: 2,
  size: "medium",
  county: "Washington County"
};

var washThree = {
  name: "Turquoise",
  age: 4,
  walk: 4,
  play: 2,
  size: "medium",
  county: "Washington County"
};

var clackOne = {
  name: "Pizza",
  age: 7,
  walk: 4,
  play: 3,
  size: "medium",
  county: "Clackamas County"
};

var clackTwo = {
  name: "MJ",
  age: 2,
  walk: 6,
  play: 2,
  size: "large",
  county: ["Clackamas County"]
};

var  clackThree = {
  name: "Drum-Stick",
  age: 4,
  walk: 4,
  play: 2,
  size: "medium",
  county: "Clackamas County"
};

$(document).ready(function() {
$("#clientInfo").submit(function(event) {
  event.preventDefault();
  var name = $("#name").val();
  var county = $("#county").val();
  var size = $("#size").val();
  var energy = $("#energy").val();
  var newClient = new Client(name, county, size, energy);

  newClient.pickDog();
  $("li").click(function() {
    $(this).slideUp();
  })

  });
});
