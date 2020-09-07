class Form {

constructor(){



}

display(){

var title = createElement('h2');
title.html("CAR RACING GAME");
title.position(130,0);
var input=createInput("name");
input.position(130,160);
var button = createButton("play");
button.position(250,200);

button.mousePressed(function () {
    input.hide();
    button.hide();
    var name= input.value();
    playerCount+=1;
player.updateCount(playerCount);
player.update(name);

    var greeting=createElement('h3');
    greeting.html("HELLO "+name);
    greeting.position(130,160);

})
}



}