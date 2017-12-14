Client = function(name, age, county, energy) {
  this.name = name;
  this.age = age;
  this.county = county;
  this.energy = energy;
}

Dog = function(name, size, county, energy) {
  this.name = name;
  this.size = size;
  this.county = county;
  this.energy = energy;
}

Client.prototype.info = function() {
  return "Name: " + this.name + " Age: " + this.age + " County: " + this.county;
}
Dog.prototype.info2 = function() {
  return "Name: " + this.name + " Size: " + this.size + " County: " + this.county;
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
  $("#enter").click(function() {
    $(".page1").hide();
    $(".page1b").fadeIn();
  });

  $("#dog-form").click(function() {
    $(".page1b").hide();
    $("#page2b").fadeIn();
  });

  $("#client-form").click(function() {
    $(".page1b").hide();
    $("#page2a").fadeIn();
  });

$("#clientInfo").submit(function(event) {
  event.preventDefault();

  $("#page2b").hide();
  var name = $("#name2b").val();
  var age = $("#age2b").val();
  var county = $("#county2b").val();
  var energy = $("#energy2b").val();
  var newClient = new Client(name, age, county, energy);
  var person = newClient.info();

  $("p#personObject").text(person);
  $("ol.unstyled").append("<li>" + multOne.name + "</li>");
  $("ol.unstyled").append("<li>" + multTwo.name + "</li>");
  $("ol.unstyled").append("<li>" + multThree.name + "</li>");
  $("ol.unstyled").append("<li>" + washOne.name + "</li>");
  $(".walkers").show();
  });

$("#dogInfo").submit(function(event) {
  event.preventDefault();

  $("#page2a").hide();
  var name = $("#name2a").val();
  var size = $("#size2a").val();
  var county = $("#county2a").val();
  var energy = $("#energy2a").val();
  var newDog = new Dog(name, size, county, energy);
  var doggy = newDog.info2();

  $("#dogos").show();
  $("p#dogObject").text(doggy);
  $("ol#unstyled2").append("<li>" + multOne.name + "</li>");
  $("ol#unstyled2").append("<li>" + multTwo.name + "</li>");
  $("ol#unstyled2").append("<li>" + multThree.name + "</li>");
  $("ol#unstyled2").append("<li>" + washOne.name + "</li>");


  });
});
