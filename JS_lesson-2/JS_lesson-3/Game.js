   
   
   window.onload = function()
{
    //game = new Game();
    acting = new Matrix(10, 10);
    acting.create();
    snake = new Snake(66,'Up');    
    snake.randomeat();
    snake.create();
    x = confirm("Начать игру?")
    if(x){       
       $('body').append('<div id = schet>Счет игры: '+snake.lensnake+'</div>')
       $('body').append('<div>Для паузы нажмите Enter</div>')
       $('body').append('<div>Змейка ускоряется по мере роста</div>') 
    game_loop = setInterval(snake.move, 700);
   }
}
	  