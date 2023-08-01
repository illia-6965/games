<!-- <template>
  <div class="wrapper-game" @click="context">
    <canvas ref="canvas" style="width: 608px; height: 608px;"></canvas>
    
   
  </div>
  <div style="width: 500px; height: 500px;"></div>
</template> -->
<template>
    <div class="wrapper-game "  ref="modal" tabindex="0" @click="startGame"
    
    @keydown.down="choiceDirectionDown"
    @keydown.up="choiceDirectionUp"
    @keydown.left="choiceDirectionLeft"
    @keydown.right="choiceDirectionRight"
    > 
   
  <v-stage :config="configKonva" >
    <v-layer>
        
        <v-rect
            v-for="(snakeSlice, index) in newSnake"
            :key="`${snakeSlice.x}${snakeSlice.y}`"
            :config="snakeSlice"
            >
            <v-rect 
                v-if="index === newSnake.length - 1"
                :config="snakeEyes"
            />
        </v-rect>
      <v-rect 
       :config="food"
      />
    </v-layer>
  </v-stage>
</div>
</template>
<!-- <script>
export default {
    data(){
        return{
        
        }
    },
    methods:{
    context(){
       
        this.canvas.fillStyle = "red";
this.canvas.fillRect(16, 24, 14, 7);

    // this.canvas.fillStyle = "red";
    // this.canvas.fillRect(10, 10, 32, 22);
    //   this.canvas.rect(20, 20, 50, 100);
    //   this.canvas.stroke(); 
    //    this.canvas.fillReck(10, 10, 32, 32)
        // this.ground.src = '../assets/images/1562688808.png'
        // this.canvas.drawImage(this.ground, 0, 0)
    },

 },
 mounted(){
//     var c = this.$refs.canvas;
//   var ctx = c.getContext("2d");    
//   this.canvas = ctx;
    this.canvas = this.$refs.canvas.getContext('2d')
   
 }
}
</script> -->

<script>
const sizeSquare = 32
export default {

  data() {
    return {

    configKonva: {
        width: 608,
        height: 608,
    },
    snakeEyes:{
        absolutePosition:{
            x: 64,
            y:64,
        },
        width: 10,
        height: 10,
        fill: "white",
    },
    food: {
        x: Math.floor(Math.random() * 17 + 1) * sizeSquare,
        y: Math.floor(Math.random() * 15 + 3) * sizeSquare,
        width: sizeSquare,
        height: sizeSquare,
        fill: "blue",
    },
    interval: null,
    up: false,
    down: false,
    left:false,
    right: false,
    fakeSnake:[{   
                x: 9 * sizeSquare,
	            y: 10 * sizeSquare,
                width: sizeSquare,
                height: sizeSquare,
                fill: "red",
           
            },],
    snake:[
            {   
                x: 9 * sizeSquare,
	            y: 10 * sizeSquare,
                width: sizeSquare,
                height: sizeSquare,
                fill: "red",
           
            },
    ],
   
   
    }
  },
  computed:{
   newSnake(){
        this.snake[this.snake.length - 1].fill = 'black'

        for(let i = 0; i < this.snake.length - 1; i++){
            this.snake[i].fill = 'red'
        }
        return this.snake
   },
  
  },
  methods:{
    startGame(){
       
        let self = this
        this.interval = setInterval(function(){
      
      
            if(self.up){self.goUp()}
            if(self.down){self.goDown()}
            if(self.left){self.goLeft()}
            if(self.right){self.goRight()}
            self.increaseSnake()
       
           
            self.finishGame()
           
            
        }, 300)
    },
    finishGame(){
        let headX = this.snake[this.snake.length - 1].x 
        let headY = this.snake[this.snake.length - 1].y
        if(headX < sizeSquare || headY > sizeSquare * 17 || headY < 3 * sizeSquare || headX > (sizeSquare * 17)){
            clearInterval(this.interval)
            console.log('stop')
        }    
    },
    increaseSnake(){
        console.log('incr')
        // this.snake[this.snake.length - 1].stroke = 'black'
        // this.snake[this.snake.length - 1].strokeWidth = 0.5
        if(this.snake[this.snake.length - 1].x === this.food.x && this.snake[this.snake.length - 1].y === this.food.y){
            this.food.x = Math.floor(Math.random() * 17 + 1) * sizeSquare
            this.food.y = Math.floor(Math.random() * 15 + 3) * sizeSquare

            this.fakeSnake.unshift({
            x: this.snake[0].x,
            y: this.snake[0].y,
            width: sizeSquare,
            height: sizeSquare,
            fill: "red",
           
        })
            this.snake.unshift({
            x: this.snake[0].x,
            y: this.snake[0].y,
            width: sizeSquare,
            height: sizeSquare,
            fill: "red",
           
        })
        // clearInterval(this.interval)
         

            
        }
    },
    eatTail(headX, headY){

        for(let i = 1; i < this.snake.length - 1; i++){
            if(headX === this.snake[i].x && headY === this.snake[i].y){
                return true
            }
        }
    },
    goDown(){
        const pieceOfSnake = {
            x: this.snake[this.snake.length - 1].x,
            y: this.snake[this.snake.length - 1].y + sizeSquare,
            width: sizeSquare,
            height: sizeSquare,
            fill: "red",
        }
        if(this.eatTail(pieceOfSnake.x, pieceOfSnake.y)){
            return  clearInterval(this.interval)
        }
        console.log(this.$refs.img, ' image')
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
            x: this.snake[this.snake.length - 1].x + sizeSquare,
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
    }
  },
  mounted(){
    this.$refs.modal.focus()
  }
}

</script>
<style lang="scss" scoped>
 .wrapper-game{
    width: 608px;
    height: 608px;
    // border: 4px solid black;
    margin: 0 auto;
    background: url('../assets/images/1.png');     
    background-position: center;  

  
} 
</style>