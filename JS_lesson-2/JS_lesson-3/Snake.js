function Snake(position, course){    
 
    this.len = $('td');
    this.eat = 0;
    this.position = position;
    this.course = course;
    this.snakemove;
    this.s = [];
    this.lensnake = 0;
    this.speed = 0;
    var that = this;
    this.appleColor = function (){

    var r=Math.floor(Math.random() * (256));

    var g=Math.floor(Math.random() * (256));

    var b=Math.floor(Math.random() * (256));

    return 'rgb' + '(' + r +',' + g + ',' + b +')';

}

    

    //Добавляем еду в случайную позицию
    this.randomeat = function(){      
       var r = Math.floor(Math.random() * this.len.length);
            
       $('td').eq(r).css({'background-color': this.appleColor()});
       that.eat = r;
       for(i=0;i<that.s.length; i++){
        if((this.s[i] == that.eat)){
            this.randomeat();
          
        }
       }  
    }

//     рисуем змею
    this.create = function(){
    //    if(this.position == this.eat)snake.randomeat();
      $('td').eq(this.position).css('background', 'lightgreen');        
    }
    
    //Движение змеи
    this.move = function(){
        
        if(that.course != "Enter"){
        $('td').eq(that.s[that.lensnake]).css('background', '');
        
    for(var i = that.lensnake; i>0; i--){                
    that.s[i] = that.s[i-1];
    }
    }
 

if(that.lensnake == 0){
       $('td').eq(that.position).css('background', '');
       }
        //Переключение направления движения
        switch(that.course)
        {   
            
            case 'Up':                     
              that.position -= 10;
              if(that.position<0){
                alert('Вы проиграли');
                location.reload();
            }            
             break;
             
             case 'Left':
             that.position-=1;
             if((that.position<that.len) || (that.position%acting.ROWS == (acting.COLS - 1))){
            alert('Вы проиграли');
            location.reload();
            }       
            break;
             case 'Down':
            that.position+=10;
          if(that.position > acting.ROWS*acting.COLS){
            alert('Вы проиграли');
            location.reload();
            }
             break;
            
            case 'Right':
            that.position+=1;
           if((that.position > acting.ROWS*acting.COLS) || (that.position%acting.COLS == 0)){
            alert('Вы проиграли');
            location.reload();
            }
            break;
                       
}
           if(that.position == that.eat){
          // alert('Вы сьели еду');
            
            that.lensnake++;
            that.speed +=30; 
              $('#schet').html('Счет игры: '+ that.lensnake);                       
            that.randomeat();
             clearInterval(game_loop);
             game_loop = setInterval(snake.move, 500-that.speed);           
            } 
           
            that.s[0] = that.position;
            
            $('td').eq(that.position).css('background', 'lightgreen');
            
            for(i=1; i<=that.lensnake; i++ ){                
            $('td').eq(that.s[i]).css('background', 'lightblue');            
            }
            
            for(i=0; i<$('td[style="background: lightblue;"]').length; i++){
            if($('td[style="background: lightblue;"]')[i] == $('td').eq(that.position)[0] ){
                alert('Вы проиграли');
            location.reload();
            }
            }          
         
}
}
document.onkeydown = function(e){
     
    if(e.keyIdentifier == "Up"){        
        snake.course = "Up";        
       // snake.move()
                             
    }
    if(e.keyIdentifier == "Left"){
        snake.course = "Left";
        //snake.move()
    }
    if(e.keyIdentifier == "Down"){        
        snake.course = "Down";
       // snake.move()
    }
    if(e.keyIdentifier == "Right"){
        snake.course = "Right";
        //snake.move()
    }
    if(e.keyIdentifier == "Enter"){
         snake.course = "Enter";
        //game.status("PAUSE");
    }
    
}
