var header= $(`.first`);
// var message= $(`message`)
var button= $(`.fortune`);

button.on("click", newFortune);

var message = $("#message");

var fortunes = ["You will get stuck in the subway doors",
"You will find love in 2 years",
"Youre going to the college of your dreams",
"The fortune you seek is in another ball",
"try again later",
"You think it's a secret, but they know",
"Dont pursue happiness,create it",
"Karlie will visit you in the near future.","watch your back",
"don't ride the elevator in the near future",
"don't worry about what you can't control","Be true to your heart",
"You may find $30 in the near future","The best is yet to come"]

function newFortune() {
  var randomNumber= Math.random()* 13
  var rounded = Math.floor(randomNumber);
  var fortune = fortunes[rounded];
  console.log(fortune)
  message.text(fortune);
}
