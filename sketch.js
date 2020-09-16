//create the variables for the ball
var database;
var canvas,backgroungImg;
var gameState = 0;
var playerCount;
var form,player,game;


function setup()
{
    //use the firebase database
    database = firebase.database();
    canvas = createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw()
{
    

}

