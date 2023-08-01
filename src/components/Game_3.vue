<template>
    <div 
        class="wrapper-game"
        ref="game" 
        tabindex="0" 
        @click="startGame"
        @keydown.down="choiceDirectionDown"
        @keydown.up="choiceDirectionUp"
        @keydown.left="choiceDirectionLeft"
        @keydown.right="choiceDirectionRight"
    >
    <div 
        class="cell" 
        v-for="sell in coordinates"
        :key="`${sell.X}${sell.Y}`"

    >
        <div 
            class="snake"
            v-if="showSnake(sell.X, sell.Y)"
        >
        </div>
    </div>
  </div>
  <div class="ex"></div>
</template>

<script>
const sizeSquare = 10
export default {
data(){
    return{
        coordinates:[],
        down: false,
        right: false,
        left: false,
        up: false,
        snake:[{x:0, y:0}, {x:0, y:1}],
        interval:null,
    }
},
methods:{
    choiceDirectionDown(){
        if(this.up){ this.down = false; return}
        this.left = false
        this.right = false
        this.down = true
       
    },
    choiceDirectionUp(){
        if(this.down){ this.up = false ; return}
        this.left = false
        this.right = false
        this.up = true
        
    },
    choiceDirectionLeft(){
        if(this.right){ this.left = false ; return}
        this.up = false
        this.down = false
        this.left = true
      
    },
    choiceDirectionRight(){
        if(this.left){ this.right = false ; return}
        this.down = false
        this.up = false
        this.right = true 
    },
    startGame(){
       
       let self = this
       this.interval = setInterval(function(){
     
     
           if(self.up){self.goUp()}
           if(self.down){self.goDown()}
           if(self.left){self.goLeft()}
           if(self.right){self.goRight()}          
           
       }, 2000)
   },
    goDown(){
        const pieceOfSnake = {
            x: this.snake[this.snake.length - 1].x,
            y: this.snake[this.snake.length - 1].y + 1,
        }
        // if(this.eatTail(pieceOfSnake.x, pieceOfSnake.y)){
        //     return  clearInterval(this.interval)
        // }
        // console.log(this.$refs.img, ' image')
        // this.fakeSnake.push(pieceOfSnake)
        // this.fakeSnake.shift()
        // if(this.eatTail){
        //     return  clearInterval(this.interval)
        // }
        this.snake.push(pieceOfSnake)
        this.snake.shift()
      
       
    },
    goUp(){
        const pieceOfSnake = {
            x: this.snake[this.snake.length - 1].x,
            y: this.snake[this.snake.length - 1].y - sizeSquare,
            width: sizeSquare,
            height: sizeSquare,
            fill: "red",
        }
        if(this.eatTail(pieceOfSnake.x, pieceOfSnake.y)){
            return  clearInterval(this.interval)
        }
        // this.fakeSnake.push(pieceOfSnake)
        // this.fakeSnake.shift()
        // if(this.eatTail){
        //     return  clearInterval(this.interval)
        // }

        this.snake.push(pieceOfSnake)
        this.snake.shift()
    },
    goLeft(){
        const pieceOfSnake = {
            x: this.snake[this.snake.length - 1].x - sizeSquare,
            y: this.snake[this.snake.length - 1].y,
            width: sizeSquare,
            height: sizeSquare,
            fill: "red",
        }
        if(this.eatTail(pieceOfSnake.x, pieceOfSnake.y)){
            return  clearInterval(this.interval)
        }
        // this.fakeSnake.push(pieceOfSnake)
        // this.fakeSnake.shift()
        // if(this.eatTail){
        //     return  clearInterval(this.interval)
        // }

        this.snake.push(pieceOfSnake)
        this.snake.shift()
    },
    goRight(){                
        const pieceOfSnake = {
            x: this.snake[this.snake.length - 1].x + 1,
            y: this.snake[this.snake.length - 1].y,
            width: sizeSquare,
            height: sizeSquare,
            fill: "red",
        }
        if(this.eatTail(pieceOfSnake.x, pieceOfSnake.y)){
            return  clearInterval(this.interval)
        }
        // this.fakeSnake.push(pieceOfSnake)
        // this.fakeSnake.shift()
        // if(this.eatTail){
        //     return  clearInterval(this.interval)
        // }

        this.snake.push(pieceOfSnake)
        this.snake.shift()
    },
    setCoordinates(){
        for(let y = 0; y < 30; y++){
            for(let x = 0; x < 30; x++){
                this.coordinates.push({X:x, Y:y})
            }
        }
    },
    showSnake(x, y){
        for(let i = 0; i < this.snake.length; i++){
            if(this.snake[i].x === x && this.snake[i].y === y){
                return true
            }
        }
         
    }
},
mounted(){
    this.setCoordinates()
    this.$refs.game.focus()
}
}
</script>

<style lang="scss" scoped>
 .wrapper-game{
    width: 600px;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(30, 1fr);
    grid-template-rows: repeat(30, 1fr);
    margin: 0 auto;
    
    margin-top: 100px;
    .cell{
        background-color: aqua;
        border: 0.5px solid black;
        width: 20px;
        height: 20px;
    }
    .snake{
        background-color: red;
        width: 20px;
        height: 20px;
    }
 }
 .ex{
    width: 500px;
    height: 300px;
    margin-top: 100px;
 }
</style>