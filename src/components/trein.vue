<template>
  <div class="wrapper-game" ref="game" :tabindex="start" @click="startGame" @keydown.down="choiceDirectionDown"
    @keydown.up="choiceDirectionUp" @keydown.left="choiceDirectionLeft" @keydown.right="choiceDirectionRight">
    <div class="cell" v-for="sell in coordinates" :key="`${sell.X}${sell.Y}`">

      <div v-show="showSnake(sell.X, sell.Y)" class="snake" :class="{
        'head': sell.X == head.x && sell.Y == head.y,
        'head-go-up': sell.X == head.x && sell.Y == head.y && directionOfTravel.up,
        'head-go-left': sell.X == head.x && sell.Y == head.y && directionOfTravel.left,
        'head-go-right': sell.X == head.x && sell.Y == head.y && directionOfTravel.right,

        'tail': sell.X == snake[0].x && sell.Y == snake[0].y,
        'tail-go-right': sell.X == snake[0].x && sell.Y == snake[0].y && mainDirectionTail == 'right',
        'tail-go-left': sell.X == snake[0].x && sell.Y == snake[0].y && mainDirectionTail == 'left',
        'tail-go-up': sell.X == snake[0].x && sell.Y == snake[0].y && mainDirectionTail == 'up',
      }">


        <div class="eas right-eas tail-for-fun" :style="startAnimEase" :class="{
          'close-right-eas': easTransition,
        }"></div>
        <div class="eas left-eas" :style="startAnimEase" :class="{
          'close-left-eas': easTransition
        }"></div>

      </div>

      <div class="food" v-show="sell.X === food.x && sell.Y === food.y"></div>


    </div>
  </div>
  <div class="extra-square" style="width: 400px; height: 400px; background-color: red; margin-top: 30px;">
    <div class="train"></div>
  </div>
</template>

<script>
//  <Transition :name="setAnimation"> </Transition>
export default {
  data() {
    return {
      start: 0,
      time: 3000,
      coordinates: [],
      revers: '',
      gradientAnim: '',
      animTimeTail: '',



      directionOfTravel: {
        down: false,
        right: false,
        left: false,
        up: false,
      },


      mainDirectionTail: 'down',


      head: { x: 0, y: 2 },

      snake: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
      food: {
        x: Math.floor(Math.random() * 14),
        y: Math.floor(Math.random() * 14)
      },

      easTransition: false,
    }
  },

  computed: {
    startAnimEase() {
      for (let direction in this.directionOfTravel) {
        if (this.directionOfTravel[direction]) {
          return `animation-duration: ${this.time / 1000}s;`
        }
      }
    },

    animTime() {
      for (let direction in this.directionOfTravel) {
        if (this.directionOfTravel[direction]) {
          return `${this.time / 1000}s`
        }
      }
    },
    opasityTail() {
      for (let direction in this.directionOfTravel) {
        if (this.directionOfTravel[direction]) {
          return 1
        } else {
          return 0
        }
      }
    },

    setAnimation() {
      for (let direction in this.directionOfTravel) {
        if (this.directionOfTravel[direction]) {
          return `head-${direction}-tail-${this.mainDirectionTail}`     // head-down-tail-down
        }
      }
    },
    openMouth() {
      if ((this.head.x == this.food.x - 1 && this.head.y == this.food.y) ||
        (this.head.x == this.food.x + 1 && this.head.y == this.food.y) ||
        (this.head.x == this.food.x && this.head.y == this.food.y) ||

        (this.head.x == this.food.x - 1 && this.head.y - 1 == this.food.y) ||
        (this.head.x == this.food.x + 1 && this.head.y - 1 == this.food.y) ||
        (this.head.x == this.food.x && this.head.y - 1 == this.food.y) ||

        (this.head.x == this.food.x - 1 && this.head.y + 1 == this.food.y) ||
        (this.head.x == this.food.x + 1 && this.head.y + 1 == this.food.y) ||
        (this.head.x == this.food.x && this.head.y + 1 == this.food.y)
      ) {
        return '0.2s'
      }
    }
  },
  methods: {
    choiceDirectionDown() {

      if (this.directionOfTravel.up) { this.directionOfTravel.down = false; return }
      this.directionOfTravel.left = false
      this.directionOfTravel.right = false
      this.directionOfTravel.down = true

    },
    choiceDirectionUp() {

      if (this.directionOfTravel.down) { this.directionOfTravel.up = false; return }
      this.directionOfTravel.left = false
      this.directionOfTravel.right = false
      this.directionOfTravel.up = true

    },
    choiceDirectionLeft() {

      if (this.directionOfTravel.right) { this.directionOfTravel.left = false; return }
      this.directionOfTravel.up = false
      this.directionOfTravel.down = false
      this.directionOfTravel.left = true

    },
    choiceDirectionRight() {

      if (this.directionOfTravel.left) { this.directionOfTravel.right = false; return }
      this.directionOfTravel.down = false
      this.directionOfTravel.up = false
      this.directionOfTravel.right = true
    },
    startGame() {
      let self = this
      this.interval = setInterval(function () {

        if (self.directionOfTravel.up) { self.goUp() }
        if (self.directionOfTravel.down) { self.goDown() }
        if (self.directionOfTravel.left) { self.goLeft() }
        if (self.directionOfTravel.right) { self.goRight() }
        self.increaseSnake()

      }, self.time)
    },
    finishGame(headX, headY) {
      if (headX < 0 || headY > 14 || headY < 0 || headX > 14) {

        this.easTransition = true
        return true
      }
      for (let i = 1; i < this.snake.length - 1; i++) {
        if (headX === this.snake[i].x && headY === this.snake[i].y) {

          this.easTransition = true
          return true
        }
      }
    },
    increaseSnake() {
      let headX = this.snake[this.snake.length - 1].x
      let headY = this.snake[this.snake.length - 1].y

      if (headX === this.food.x && headY === this.food.y) {


        this.snake.unshift({
          x: this.snake[0].x,
          y: this.snake[0].y
        })
        this.food = {
          x: Math.floor(Math.random() * 14),
          y: Math.floor(Math.random() * 14)
        }
        this.time -= 50
        clearInterval(this.interval)

        this.startGame()

      }
    },
    setDirectionTail(tailAfter, tailBefore) {
      if (tailAfter.x < tailBefore.x) {
        this.mainDirectionTail = 'left'
      }
      if (tailAfter.x > tailBefore.x) {
        this.mainDirectionTail = 'right'
      }
      if (tailAfter.y < tailBefore.y) {
        this.mainDirectionTail = 'up'
      }
      if (tailAfter.y > tailBefore.y) {
        this.mainDirectionTail = 'down'
      }
      console.log(this.mainDirectionTail, 'tail')
    },
    goDown() {
      const pieceOfSnake = {
        x: this.snake[this.snake.length - 1].x,
        y: this.snake[this.snake.length - 1].y + 1,
      }

      if (this.finishGame(pieceOfSnake.x, pieceOfSnake.y)) {
        this.finishGame = true
        return clearInterval(this.interval)
      }
      this.head = pieceOfSnake
      let tailBefore = {
        x: this.snake[1].x,
        y: this.snake[1].y
      }

      this.snake.push(pieceOfSnake)
      this.snake.shift()

      let tailAfter = {
        x: this.snake[1].x,
        y: this.snake[1].y
      }

      this.setDirectionTail(tailAfter, tailBefore)
    },
    goUp() {
      const pieceOfSnake = {
        x: this.snake[this.snake.length - 1].x,
        y: this.snake[this.snake.length - 1].y - 1,
      }

      if (this.finishGame(pieceOfSnake.x, pieceOfSnake.y)) {
        return clearInterval(this.interval)
      }
      this.head = pieceOfSnake

      let tailBefore = {
        x: this.snake[0].x,
        y: this.snake[0].y
      }
      this.snake.push(pieceOfSnake)
      this.snake.shift()

      let tailAfter = {
        x: this.snake[0].x,
        y: this.snake[0].y
      }

      this.setDirectionTail(tailAfter, tailBefore)
    },
    goLeft() {
      const pieceOfSnake = {
        x: this.snake[this.snake.length - 1].x - 1,
        y: this.snake[this.snake.length - 1].y,
      }

      if (this.finishGame(pieceOfSnake.x, pieceOfSnake.y)) {
        return clearInterval(this.interval)
      }
      this.head = pieceOfSnake

      let tailBefore = {
        x: this.snake[0].x,
        y: this.snake[0].y
      }

      this.snake.push(pieceOfSnake)
      this.snake.shift()

      let tailAfter = {
        x: this.snake[0].x,
        y: this.snake[0].y
      }

      this.setDirectionTail(tailAfter, tailBefore)
    },
    goRight() {
      const pieceOfSnake = {
        x: this.snake[this.snake.length - 1].x + 1,
        y: this.snake[this.snake.length - 1].y,
      }

      if (this.finishGame(pieceOfSnake.x, pieceOfSnake.y)) {
        return clearInterval(this.interval)
      }
      this.head = pieceOfSnake

      let tailBefore = {
        x: this.snake[1].x,
        y: this.snake[1].y
      }

      this.snake.push(pieceOfSnake)
      this.snake.shift()

      let tailAfter = {
        x: this.snake[1].x,
        y: this.snake[1].y
      }

      this.setDirectionTail(tailAfter, tailBefore)
    },
    setCoordinates() {
      for (let y = 0; y < 15; y++) {
        for (let x = 0; x < 15; x++) {
          this.coordinates.push({ X: x, Y: y })
        }
      }
    },
    showSnake(x, y) {
      for (let i = 0; i < this.snake.length; i++) {
        if (this.snake[i].x === x && this.snake[i].y === y) {
          return true
        }
      }

    }
  },
  mounted() {
    this.setCoordinates()
    this.$refs.game.focus()
  }
}
</script>

<style lang="scss" scoped>
@keyframes close-left {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes close-right {
  0% {
    transform: scale(1.5);
  }

  100% {
    transform: scaleY(1.2) scaleX(1.5);
  }
}



@keyframes ease-down {
  0% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes ease-up {
  0% {
    // transform-origin: top;
    transform: translateY(5px);

  }

  100% {
    // transform-origin: top;
    transform: translateY(-30px);

  }
}



@keyframes left-tooth {
  0% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(20deg);
  }
}

@keyframes right-tooth {
  0% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(-20deg);
  }
}



@keyframes tail-clip-down {
  0% {
    transform: translateY(-30px);
    clip-path: polygon(40% 0%, 82% 37%, 82% 100%, 18% 100%, 18% 37%);
  }

  50% {
    clip-path: polygon(60% 0%, 82% 37%, 82% 100%, 18% 100%, 18% 37%);
  }

  100% {
    transform: translateY(0px);
    clip-path: polygon(40% 0%, 82% 37%, 82% 100%, 18% 100%, 18% 37%);
  }
}

@keyframes test-head-down {
  0% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes test-tail-down {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(30px);
  }
}





@keyframes head-down {
  0% {
    background: linear-gradient(to bottom, black 0, black 0%, transparent 0%, transparent 100%);
  }

  5% {
    background: linear-gradient(to bottom, black 0, black 5%, transparent 5%, transparent 100%);
  }

  10% {
    background: linear-gradient(to bottom, black 0, black 10%, transparent 10%, transparent 100%);
  }

  15% {
    background: linear-gradient(to bottom, black 0, black 15%, transparent 15%, transparent 100%);
  }

  20% {
    background: linear-gradient(to bottom, black 0, black 20%, transparent 20%, transparent 100%);
  }

  25% {
    background: linear-gradient(to bottom, black 0, black 25%, transparent 25%, transparent 100%);
  }

  30% {
    background: linear-gradient(to bottom, black 0, black 30%, transparent 30%, transparent 100%);
  }

  35% {
    background: linear-gradient(to bottom, black 0, black 35%, transparent 35%, transparent 1000%);
  }

  40% {
    background: linear-gradient(to bottom, black 0, black 40%, transparent 40%, transparent 100%);
  }

  45% {
    background: linear-gradient(to bottom, black 0, black 45%, transparent 45%, transparent 100%);
  }

  50% {
    background: linear-gradient(to bottom, black 0, black 50%, transparent 50%, transparent 100%);
  }

  55% {
    background: linear-gradient(to bottom, black 0, black 55%, transparent 55%, transparent 100%);
  }

  60% {
    background: linear-gradient(to bottom, black 0, black 60%, transparent 60%, transparent 100%);
  }

  65% {
    background: linear-gradient(to bottom, black 0, black 65%, transparent 65%, transparent 100%);
  }

  70% {
    background: linear-gradient(to bottom, black 0, black 70%, transparent 70%, transparent 100%);
  }

  75% {
    background: linear-gradient(to bottom, black 0, black 75%, transparent 75%, transparent 100%);
  }

  80% {
    background: linear-gradient(to bottom, black 0, black 80%, transparent 80%, transparent 100%);
  }

  85% {
    background: linear-gradient(to bottom, black 0, black 85%, transparent 85%, transparent 100%);
  }

  90% {
    background: linear-gradient(to bottom, black 0, black 90%, transparent 90%, transparent 100%);
  }

  95% {
    background: linear-gradient(to bottom, black 0, black 95%, transparent 95%, transparent 100%);
  }

  100% {
    background: linear-gradient(to bottom, black 0, black 100%);
  }
}

@keyframes tail-test-down {
  0% {
    transform: scaleY(1);
    transform-origin: bottom;
  }

  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

@keyframes tail-test-right {
  0% {
    transform: scaleX(1);

  }

  100% {
    transform: scaleX(0);
  }
}

@keyframes head-test-right {
  0% {
    transform: translateX(-30px);
  }

  100% {
    transform: translateX(0px);
  }
}

@keyframes tail-left {
  0% {
    background: linear-gradient(to right, black 0, black 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%);
  }

  5% {
    background: linear-gradient(to right, black 0, black 5%, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 0%);
  }

  10% {
    background: linear-gradient(to right, black 0, black 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 0%);
  }

  15% {
    background: linear-gradient(to right, black 0, black 15%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 0%);
  }

  20% {
    background: linear-gradient(to right, black 0, black 20%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 0%);
  }

  25% {
    background: linear-gradient(to right, black 0, black 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 0%);
  }

  30% {
    background: linear-gradient(to right, black 0, black 30%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 0%);
  }

  35% {
    background: linear-gradient(to right, black 0, black 35%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 0%);
  }

  40% {
    background: linear-gradient(to right, black 0, black 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 0%);
  }

  45% {
    background: linear-gradient(to right, black 0, black 45%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0) 0%);
  }

  50% {
    background: linear-gradient(to right, black 0, black 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 0%);
  }

  55% {
    background: linear-gradient(to right, black 0, black 55%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 0%);
  }

  60% {
    background: linear-gradient(to right, black 0, black 60%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 0%);
  }

  65% {
    background: linear-gradient(to right, black 0, black 65%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0) 0%);
  }

  70% {
    background: linear-gradient(to right, black 0, black 70%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 0%);
  }

  75% {
    background: linear-gradient(to right, black 0, black 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0) 0%);
  }

  80% {
    background: linear-gradient(to right, black 0, black 80%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 0%);
  }

  85% {
    background: linear-gradient(to right, black 0, black 85%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 0) 0%);
  }

  90% {
    background: linear-gradient(to right, black 0, black 90%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 0%);
  }

  95% {
    background: linear-gradient(to right, black 0, black 95%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0%);
  }

  100% {
    background: linear-gradient(to right, black 0, black 100%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 0%);
  }
}

@keyframes tail-right {
  0% {
    background: linear-gradient(to left, black 0, black 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%);
  }

  5% {
    background: linear-gradient(to left, black 0, black 5%, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 0%);
  }

  10% {
    background: linear-gradient(to left, black 0, black 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 0%);
  }

  15% {
    background: linear-gradient(to left, black 0, black 15%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 0%);
  }

  20% {
    background: linear-gradient(to left, black 0, black 20%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 0%);
  }

  25% {
    background: linear-gradient(to left, black 0, black 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 0%);
  }

  30% {
    background: linear-gradient(to left, black 0, black 30%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 0%);
  }

  35% {
    background: linear-gradient(to left, black 0, black 35%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 0%);
  }

  40% {
    background: linear-gradient(to left, black 0, black 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 0%);
  }

  45% {
    background: linear-gradient(to left, black 0, black 45%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0) 0%);
  }

  50% {
    background: linear-gradient(to left, black 0, black 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 0%);
  }

  55% {
    background: linear-gradient(to left, black 0, black 55%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 0%);
  }

  60% {
    background: linear-gradient(to left, black 0, black 60%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 0%);
  }

  65% {
    background: linear-gradient(to left, black 0, black 65%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0) 0%);
  }

  70% {
    background: linear-gradient(to left, black 0, black 70%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 0%);
  }

  75% {
    background: linear-gradient(to left, black 0, black 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0) 0%);
  }

  80% {
    background: linear-gradient(to left, black 0, black 80%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 0%);
  }

  85% {
    background: linear-gradient(to left, black 0, black 85%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 0) 0%);
  }

  90% {
    background: linear-gradient(to left, black 0, black 90%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 0%);
  }

  95% {
    background: linear-gradient(to left, black 0, black 95%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0%);
  }

  100% {
    background: linear-gradient(to left, black 0, black 100%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 0%);
  }
}














.wrapper-game {
  width: 450px;
  height: 450px;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(15, 1fr);
  margin: 0 auto;
  margin-top: 100px;

  .cell {
    background-color: yellow;
    border: 0.5px solid black;
    width: 30px;
    height: 30px;
    // border-radius: 50%;
  }

  .snake {
    background-color: black;
    // border-radius: 50%;
    // box-shadow: 0px -15px 0px black;
    width: 30px;
    height: 30px;

    border: 1px solid red;
  }

  .food {
    background-color: green;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .head {
    width: 30px;
    height: 30px;
    position: relative;
    animation-name: test-head-down;
    animation-duration: v-bind('animTime');
    animation-timing-function: linear;
    // animation-name: snake;
    // animation-duration: v-bind('animTime');
    // animation-timing-function: linear;
    // border: none;

    // .eas{
    //     width: 19px;
    //     height: 19px;
    //     background-color: aliceblue;
    //     border-radius: 50%;
    //     border: 5px solid black;
    //     animation-name:snake;
    //     // animation-iteration-count: infinite;
    //     animation-timing-function: linear;
    //     animation-duration: v-bind('animTime');
    //     position: absolute;
    //     top: calc(100% - 15px);
    // }
    // .eas::after,.eas::before{
    //     position: absolute;
    //     content: '';
    //     width: 20px;
    //     height: 15px;
    //     border-radius: 50%;
    //     background: transparent;
    //     border-left: 4px solid red;
    //     // background-image: linear-gradient(to right, red 0, red 50%, transparent 50%, transparent 100%);
    //     left: 50%;
    //     top: 90%;
    //     z-index: 10;
    //     transform-origin: top;
    //     animation-name: left-tooth;
    //     animation-duration: v-bind('openMouth');
    //     animation-iteration-count: infinite;
    //     // transform: rotate(20deg);
    // }
    // .eas::before{
    //     border-right: 4px solid red;
    //     border-left: none;
    //     // background-image: linear-gradient(to left, red 0, red 50%, transparent 50%, transparent 100%);
    //     animation-name: right-tooth;
    //     animation-duration: v-bind('openMouth');
    //     animation-iteration-count: infinite;
    //     left: -175%;
    //     // transform: rotate(-20deg);
    // }
    // .left-eas::before,.right-eas::after{
    //     position: absolute;
    //     content: '';
    //     width: 2px;
    //     height: 5px;
    //     top: calc(50% - 2.5px);
    //     left: calc(50% - 2.5px);
    //     border-radius: 50%;
    //     background-color: red;
    // }
    .left-eas {
      left: -6px;
    }

    .right-eas {
      right: -6px;
    }

    .close-left-eas {
      animation-name: close-left;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }

    .close-right-eas {
      background: red;
      animation: close-right 1s infinite;
      transform: scale(1.5);
    }
  }

  .tail {
    position: relative;
    box-shadow: none;
    animation-name: tail-test-down;
    animation-duration: v-bind('animTime');
    animation-timing-function: linear;

    // animation-name:  tail-down;
    // animation-duration: v-bind('animTime');
    // animation-timing-function: linear;


  }

  // .tail::after{
  //   border: none;
  //   position: absolute;
  //   content: "";
  //   width: 44px;
  //   height: 67px;
  //   // -webkit-clip-path: polygon(50% 0%, 82% 37%, 82% 100%, 18% 100%, 18% 37%);
  //   clip-path: polygon(50% 0%, 82% 37%, 82% 100%, 18% 100%, 18% 37%);
  //   background-color: black;
  //   z-index: 10;
  //   border-radius: 0;
  //   left: -7px;
  //   top: -37px;
  //   z-index: 20;
  //   animation-duration: v-bind('animTime');
  //   animation-name: tail-clip-down;
  //   animation-iteration-count: infinite;
  //   animation-timing-function: linear;

  // }
  .tail-go-right {
    animation-duration: v-bind('animTime');
    animation-name: tail-test-right;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    transform: rotate(-90deg);
  }

  .tail-go-left {
    transform: rotate(90deg);
  }

  .tail-go-up {
    transform: rotate(180deg);
  }

  // Mustache and mouth
  .head-go-right {
    animation-duration: v-bind('animTime');
    animation-name: head-test-right;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform: rotate(-90deg);

  }

  .head-go-left {
    transform: rotate(90deg);
  }

  .head-go-up {
    transform: rotate(180deg);
  }
}

.ex {
  width: 500px;
  height: 300px;
  margin-top: 100px;
  background-color: #f7ff00;
  display: flex;
  align-items: center;
  justify-content: center;
}

.extra-square {
  display: flex;
  align-items: center;
  justify-content: center;
}

.train {
  width: 100px;
  border-radius: 20px;
  transform-origin: 90px 10px;
  height: 20px;
  background-color: black;
  transform: rotate(90deg)
}
</style>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   head-up-tail-up  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-up-tail-up-enter-active{
  animation: head-down v-bind('animTime');
}
.head-up-tail-up-leave-active{
  animation: head-down v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   head-down-tail-down  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-down-tail-down-enter-active{
    animation: head-down v-bind('animTime');
}
.head-down-tail-down-leave-active{
  animation: tail-down v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   head-left-tail-left  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-left-tail-left-enter-active{
    animation: head-down v-bind('animTime');
}
.head-left-tail-left-leave-active{
  animation:  tail-left v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   head-right-tail-right  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-right-tail-right-enter-active{
    animation: head-down v-bind('animTime');
}
.head-right-tail-right-leave-active{
  animation: tail-right v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-down-tail-right  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-down-tail-right-enter-active{
    animation: head-down v-bind('animTime');
}
.head-down-tail-right-leave-active{
  animation: tail-right v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-down-tail-left  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-down-tail-left-enter-active{
    animation: head-down v-bind('animTime');
}
.head-down-tail-left-leave-active{
  animation: tail-left v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-down-tail-up  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-down-tail-up-enter-active{
    animation: head-down v-bind('animTime');
}
.head-down-tail-up-leave-active{
  animation: head-down v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-up-tail-down  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-up-tail-down-enter-active{
    animation: head-down v-bind('animTime');
}
.head-up-tail-down-leave-active{
  animation: tail-down v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-up-tail-left  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-up-tail-left-enter-active{
    animation: head-down v-bind('animTime');
}
.head-up-tail-left-leave-active{
  animation: tail-left v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-up-tail-right  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-up-tail-right-enter-active{
    animation: head-down v-bind('animTime');
}
.head-up-tail-right-leave-active{
  animation: tail-right v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-left-tail-up  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-left-tail-up-enter-active{
    animation: head-down v-bind('animTime');
}
.head-left-tail-up-leave-active{
  animation: head-down v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-left-tail-down  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-left-tail-down-enter-active{
    animation: head-down v-bind('animTime');
}
.head-left-tail-down-leave-active{
  animation: tail-down v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-left-tail-right  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-left-tail-right-enter-active{
    animation: head-down v-bind('animTime');
}
.head-left-tail-right-leave-active{
  animation: tail-right v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-right-tail-up  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-right-tail-up-enter-active{
    animation: head-down v-bind('animTime');
}
.head-right-tail-up-leave-active{
  animation: head-down v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-right-tail-left  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-right-tail-left-enter-active{
    animation: head-down v-bind('animTime');
}
.head-right-tail-left-leave-active{
  animation: tail-left v-bind('animTime') reverse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  head-right-tail-down  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.head-right-tail-down-enter-active{
    animation: head-down v-bind('animTime');
}
.head-right-tail-down-leave-active{
  animation: tail-down v-bind('animTime') reverse;
}

0% {
  //   background: linear-gradient(to top, black 0, black 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%);
  // }
  // 5% {
  //   background: linear-gradient(to top, black 0, black 5%, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 0%);
  // }
  // 10% {
  //   background: linear-gradient(to top, black 0, black 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 0%);
  // }
  // 15% {
  //   background: linear-gradient(to top, black 0, black 15%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 0%);
  // }
  // 20% {
  //   background: linear-gradient(to top, black 0, black 20%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 0%);
  // }
  // 25% {
  //   background: linear-gradient(to top, black 0, black 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 0%);
  // }
  // 30% {
  //   background: linear-gradient(to top, black 0, black 30%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 0%);
  // }
  // 35% {
  //   background: linear-gradient(to top, black 0, black 35%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 0%);
  // }
  // 40% {
  //   background: linear-gradient(to top, black 0, black 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 0%);
  // }
  // 45% {
  //   background: linear-gradient(to top, black 0, black 45%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0) 0%);
  // }
  // 50% {
  //   background: linear-gradient(to top, black 0, black 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 0%);
  // }
  // 55% {
  //   background: linear-gradient(to top, black 0, black 55%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 0%);
  // }
  // 60% {
  //   background: linear-gradient(to top, black 0, black 60%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 0%);
  // }
  // 65% {
  //   background: linear-gradient(to top, black 0, black 65%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0) 0%);
  // }
  // 70% {
  //   background: linear-gradient(to top, black 0, black 70%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 0%);
  // }
  // 75% {
  //   background: linear-gradient(to top, black 0, black 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0) 0%);
  // }
  // 80% {
  //   background: linear-gradient(to top, black 0, black 80%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 0%);
  // }
  // 85% {
  //   background: linear-gradient(to top, black 0, black 85%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 0) 0%);
  // }
  // 90% {
  //   background: linear-gradient(to top, black 0, black 90%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 0%);
  // }
  // 95% {
  //   background: linear-gradient(to top, black 0, black 95%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0%);
  // }
  // 100% {
  //   background: linear-gradient(to top, black 0, black 100%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 0%);
  // }