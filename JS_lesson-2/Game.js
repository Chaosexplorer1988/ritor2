   
   function Game(status){
    
    var that = this;
   this.appleColor = function (){

    var r=Math.floor(Math.random() * (256));

    var g=Math.floor(Math.random() * (256));

    var b=Math.floor(Math.random() * (256));

    return 'rgb' + '(' + r +',' + g + ',' + b +')'; 
    
   }
   this.schet = 5;
   this.status = status;
   this.gamelvl = function(){
    if(that.status == "Win")
    that.schet+=5;
    that.status = "Go";
    }
   //  if(snake.lensnake > 5)this.status = "Win";
  //   if(snake.lensnake > 10)this.status = "Win";
 // for(var i lvl = 1, res = 5; i<res)
 
   }   
 
 
// Game.prototype.status
   window.onload = function()
{    
    game = new Game("PAUSE");
    acting = new Matrix(10, 10);
    acting.create();
    snake = new Snake(66,'Up');
        
    snake.randomeat();
    snake.create();
    //x = confirm("Начать игру?")
    //if(x){       
       $('body').append('<div id = schet>Счет игры: '+snake.lensnake+'</div>')
       $('body').append('<div>Для начала игры или паузы нажмите Enter</div>')
       $('body').append('<div>Змейка ускоряется по мере роста</div>') 
    game_loop = setInterval(snake.move, 700);
   //}
}
	  