
            function Matrix(rows, cols){
                //this.containerId = containerId;
                this.ROWS = rows;
                this.COLS = cols;
                this.cells = [];
                this.mtx = $('tbody');
                this.mtx.html("");
                this.create = function(){ 
                    for(var r = 0; r < this.ROWS; r++){
                    this.cells[r] = [];
                    var row = document.createElement('tr');
                    this.mtx.append(row);
                    for(var c = 0; c < this.COLS; c++){
                        this.cells[r][c] = document.createElement('td');
                        row.appendChild(this.cells[r][c]);
                        }
                    }
                }
                  
            //функция включения/выключения ячейки
            //последний параметр необязательный. Если не указан, 
            //то переключает ячейку в противоположное состояние
            this.tx3SetCell = function mtx3SetCell(c,state){
                if(c){ //если найдена...
                    if(typeof state === 'undefined'){ //переключаем
                        c.classList.toggle("selected");
                    }else if(state){ //включаем
                        c.classList.add("selected");
                    }else{ //выключаем
                        c.classList.remove("selected");
                    }
                }
                return c;
            }
}
          
            
        