var canvas = new fabric.Canvas('myCanvas');
player_x=20;
player_y=20;
block_width=40;
block_height=40;
var player_me="";
var block_nonliving="";
function playerupdate(){

    fabric.Image.fromURL("player.png",function(Img){
        player_me=Img;
    player_me.scaleToWidth(150);
    player_me.scaleToHeight(140);
    player_me.set({top:player_y,left:player_x});
    canvas.add(player_me);
    });
    
}

function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img){
        block_nonliving=Img;
        block_nonliving.scaleToWidth(150);
        block_nonliving.scaleToHeight(140);
        block_nonliving.set({top:player_y,left:player_x});
    canvas.add(block_nonliving);
    });
    

}
function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}
function left()
{
    if(player_x>=0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when left key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}