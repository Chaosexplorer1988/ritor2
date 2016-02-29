//
// Класс матрицы.
//

function Matrix(containerId, rows, cols)
{
    this.containerId = containerId;
    this.rows = rows;
    this.cols = cols;    
    this.create = function()
    {
    var matrix = document.getElementById(this.containerId);
	var n = this.rows * this.cols;	
	
	for (var i = 0; i < n; i++)
	{
		var div = document.createElement('div');	
        div.id = i;
		matrix.appendChild(div);
	} 
        
    }
	
}
//Класс змея
function Snake(position, course){    
    //Первоначальная позиция змеи
    this.position = [position];
    //Направление змеи
    this.course = course; 
      
    this.arr = [];
     
    var that = this;
    
    //Добавляем еду в случайную позицию
    this.randomeat = function(){
       var divMatrixChildren = document.body.children[0].children;
       var randDivMatrixChildren = Math.floor(Math.random() * divMatrixChildren.length); 
       var x = document.body.children[0];
       var z = x.children[randDivMatrixChildren].style.backgroundColor = 'red'; 
    }
    // рисуем змею
    this.create = function(){
    var x = document.getElementById(this.position);    
    x.style.backgroundColor = 'lightblue';  
    }
    //Текущие координаты еды
    this.eat = function(){
         var x = document.body.children[0];      
   for(var i = 0; i < x.children.length; i++ ){
    var y = document.getElementById(i);
    
    if(y.style.backgroundColor == 'red'){
       that.e = y.id;
        
    }
    }
    }     
    //Движение змеи
    this.move = function(){
        //Проверка выхода за рамки поля
        if((that.position[0]>0) && (that.position[0]<(acting.rows*acting.cols) && (that.position[0] != that.e))){
          for(var i = 0; i<that.position.length; i++){
        x = document.body.children[0].children[that.position[i]];
        x.style.backgroundColor = '';        
        }
        snake.eat();        
        }
        
        //Переключение направления движения
        switch(that.course)
        {
			case 'Up':          
             
              that.position[0]-=20; 
                             
               
              // console.log(that.position);                        
              //for(i = 1, zx = 20; i<that.position.length; i++ , zx+=20){
//                
//             that.position[i]= that.position[0]+zx;
//             y = document.getElementById(that.position[i])             
//            y.style.backgroundColor = 'lightblue'
             
    //         }
            // console.log(that.position)
            if(that.position[0]<0){
                alert('Вы проиграли');
                location.reload();
            }else{
               
            x = document.getElementById(that.position[0])
            x.style.backgroundColor = 'lightblue'
            if(that.position.length>1){
            that.position[1] = that.arr;
            x = document.getElementById(that.position[1])
            x.style.backgroundColor = 'lightblue'
            }
            }            
				break;
                
            case 'Left':
            that.position[0]-=1;
             for(i=1, zx = 1; i<that.position.length; i++, zx++){
             that.position[i]=that.position[0]+zx;
             y = document.getElementById(that.position[i])             
            y.style.backgroundColor = 'lightblue'             
             }
            if((that.position[0]<0) || (that.position[0]%acting.cols == (acting.cols - 1))){
            alert('Вы проиграли');
            location.reload();
            }
            x = document.body.children[0].children[that.position[0]];
            x.style.backgroundColor = 'lightblue';
            break;
            
            case 'Down':
            that.position[0]+=20;
            for(i=1, zx = 20; i<that.position.length; i++, zx+=20){
             that.position[i]=that.position[0]-zx;
             y = document.getElementById(that.position[i])             
            y.style.backgroundColor = 'lightblue'             
             }
           
            if(that.position[0] > (acting.rows*acting.cols)){
            alert('Вы проиграли');
            location.reload();
            }else{
            x = document.body.children[0].children[that.position[0]];
            x.style.backgroundColor = 'lightblue';}
            break;
            
            case 'Right':
            that.position[0]+=1;
           for(i=1, zx = 1; i<that.position.length; i++, zx++){
             that.position[i]=that.position[0]-zx;
             y = document.getElementById(that.position[i])             
            y.style.backgroundColor = 'lightblue'             
             }
            if((that.position[0] > acting.rows*acting.cols) || (that.position[0]%acting.cols == 0)){
            alert('Вы проиграли');
            location.reload();
            }else{
            x = document.body.children[0].children[that.position[0]];
            x.style.backgroundColor = 'lightblue';}
            break;              
		}        
        if(that.position[0] == that.e){
           alert('Вы сьели еду');
            that.position.push(that.position);
                         
            snake.randomeat();            
            }
            
            that.arr = that.position[0];
          //tt();
          //console.log(tt());  
        }
   
    }


// Общий вывод при загрузке
   window.onload = function()
{
    acting = new Matrix("mtx3")
    acting = new Matrix('matrix', 20, 20);
    acting.create();
    snake = new Snake(250, 'Up');
    snake.create();
    snake.randomeat();
    snake.eat();
    setInterval(snake.move, 500);
    //snake.move
}	  

//Обработчик нажатий
document.onkeydown = function(e){
      
    if(e.keyIdentifier == "Up"){        
        snake.course = "Up";
        //snake.move();
                
    }
    if(e.keyIdentifier == "Left"){
        snake.course = "Left";
        //snake.move();
    }
    if(e.keyIdentifier == "Down"){
        
        snake.course = "Down";
        //snake.move();
    }
    if(e.keyIdentifier == "Right"){
        snake.course = "Right";
        //snake.move();     
    }   

}

   
    
    
    
    
    