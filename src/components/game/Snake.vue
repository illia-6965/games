<template>
    <div class="wrapper">
        
        <Transition name="start-game">
            <div class="wrapper-start-game" v-if="!start && !gameOver">
                <h2 class="header">SNAKE</h2>
                <p>Click below, if you want to play</p>
                <my-btn
                    @click="startGame"
                    :contentPart="'Start Game'"
                    class="btn"
                />
            </div>
        </Transition>
        <Transition name="game">
           
            <div
                v-if="start && !gameOver"
                class="snake-game"
                ref="game"
                :tabindex="tabInd"
                @keydown.down.prevent="choiceDirectionDown"
                @keydown.up.prevent="choiceDirectionUp"
                @keydown.left.prevent="choiceDirectionLeft"
                @keydown.right.prevent="choiceDirectionRight"
            >
                <div class="game-information">
                    <p class="speed">Speed: {{ speed }}</p>
                    <p class="appels">Apples: {{ apples }}</p>
                </div>

         
                    <div class="arrows" v-if="showExtraInf"></div>
               
          


                <v-stage :config="configKonva">
                    <v-layer>
                        <v-line :config="snake" />
                    </v-layer>

                    <v-layer>
                        <v-circle :config="food" />
                    </v-layer>
                </v-stage>
            </div>
        </Transition>

        <Transition name="finish-game">
            <div class="wrapper-start-game finish-game" v-if="gameOver">
                <h2 class="header">GAME OVER</h2>
                <p>Click below, if you want to play</p>
                <my-btn
                    @click="restartGame"
                    :contentPart="'Start Game'"
                    class="btn"
                />
            </div>
        </Transition>
    </div>
</template>

<script>
import MyBtn from "@/components/MyBtn";
export default {
    components: {
        MyBtn,
    },
    data() {
        return {
            showExtraInf: true,
            actualDirection: {
                down: false,
                right: false,
                left: false,
                up: false,
            },
            start: false,
            stopTail: 0,
            extraDirection: "down",
            constanta: 0,
            interval: null,
            time: 20,
            tabInd: 0,
            speed: 0,
            apples: 0,
            showAnim: false,
            gameOver: false,

            bendPoint: {
                down: true,
                right: true,
                left: true,
                up: true,
            },

            directionOfTravel: {
                down: false,
                right: false,
                left: false,
                up: false,
            },
            configKonva: {
                width: 420,
                height: 420,
                fill: "red",
            },
            snake: {
                x: 0,
                y: 0,
                points: [165, 165, 225, 165],
                stroke: "green",
                strokeWidth: 30,
                lineCap: "round",
                lineJoin: "round",
            },
            food: {
                x: Math.floor(Math.random() * 14 + 1) * 30 - 15,
                y: Math.floor(Math.random() * 14 + 1) * 30 - 15,
                radius: 15,
                fill: "red",
                stroke: "black",
                strokeWidth: 1,
            },
        };
    },

    computed: {
        iterationFinished() {
            return this.constanta % 30 == 0;
        },
        showAnimation() {
            if (this.showAnim) {
                // console.log("11111");
                return "0.5s";
            } else {
                // console.log("22222");
                return "";
            }
        },
    },

    methods: {
        startGame() {
            this.start = true;
            this.$nextTick(function () {
                this.$refs.game.focus();
            });
            this.startMovement();
        },
        restartGame() {
            this.refreshData();
            this.gameOver = false;
            this.startGame();
        },
        refreshData() {

            this.snake.stroke = "green";
            this.time = 20;
            this.constanta = 0;
            this.speed = 0;
            this.apples = 0;
            this.snake.points = [165, 165, 225, 165];
            this.food.x = Math.floor(Math.random() * 14 + 1) * 30 - 15;
            this.food.y = Math.floor(Math.random() * 14 + 1) * 30 - 15;
            this.resetObjects(this.actualDirection, false);
            this.resetObjects(this.bendPoint, true);
            this.resetObjects(this.directionOfTravel, false);
        },
        resetObjects(obj, def) {
            for (let key in obj) {
                obj[key] = def;
            }
        },
        choiceDirectionDown() {
            if (this.actualDirection.up) {
                this.directionOfTravel.down = false;
                return;
            }
            this.directionOfTravel.left = false;
            this.directionOfTravel.right = false;
            this.directionOfTravel.down = true;
            this.showExtraInf = false
            if(!this.speed){this.speed = 10}
        },

        choiceDirectionUp() {
            if (this.actualDirection.down) {
                this.directionOfTravel.up = false;
                return;
            }
            this.directionOfTravel.left = false;
            this.directionOfTravel.right = false;
            this.directionOfTravel.up = true;
            this.showExtraInf = false
            if(!this.speed){this.speed = 10}
       
        },

        choiceDirectionLeft() {
            if (this.actualDirection.right) {
                this.directionOfTravel.left = false;
                return;
            }
            this.directionOfTravel.up = false;
            this.directionOfTravel.down = false;
            this.directionOfTravel.left = true;
            this.showExtraInf = false
            if(!this.speed){this.speed = 10}
        },

        choiceDirectionRight() {
            if (this.actualDirection.left) {
                this.directionOfTravel.right = false;
                return;
            }
            this.directionOfTravel.down = false;
            this.directionOfTravel.up = false;
            this.directionOfTravel.right = true;
            this.showExtraInf = false
            if(!this.speed){this.speed = 10}
        },

        startMovement() {
            let self = this;
            this.interval = setInterval(function () {
                self.actualDirection = { ...self.directionOfTravel };

                if (!self.iterationFinished) {
                   
                    self.resetObjects(self.actualDirection, false);
                    self.actualDirection[self.extraDirection] = true;
                }

                if (self.actualDirection.up) {
                    self.goUp();
                }
                if (self.actualDirection.down) {
                    self.goDown();
                }
                if (self.actualDirection.left) {
                    self.goLeft();
                }
                if (self.actualDirection.right) {
                    self.goRight();
                }
            }, self.time);
        },

        goDown() {
            if (this.stopTail != 0) {
                --this.stopTail;
            }

            let coordinates = [...this.snake.points];

            let head = {
                x: this.snake.points[this.snake.points.length - 2],
                y: this.snake.points[this.snake.points.length - 1],
            };

            if (this.bendPoint.down) {
                coordinates.splice(-2, 0, head.x, head.y);
                this.stopAddBendPoint();
            }

            ++coordinates[coordinates.length - 1];
            if (this.stopTail == 0) {
                this.tailFollowsBendPoint(coordinates);
            }

            this.snake.points = [...coordinates];

            ++this.constanta;
            this.extraDirection = "down";

            this.eatFood(coordinates);
            this.finishGame(coordinates);
        },

        goUp() {
            if (this.stopTail != 0) {
                --this.stopTail;
            }
            let coordinates = [...this.snake.points];

            let head = {
                x: this.snake.points[this.snake.points.length - 2],
                y: this.snake.points[this.snake.points.length - 1],
            };

            if (this.bendPoint.up) {
                coordinates.splice(-2, 0, head.x, head.y);
                this.stopAddBendPoint();
            }

            --coordinates[coordinates.length - 1];
            if (this.stopTail == 0) {
                this.tailFollowsBendPoint(coordinates);
            }
            this.snake.points = [...coordinates];

            ++this.constanta;
            this.extraDirection = "up";

            this.eatFood(coordinates);
            this.finishGame(coordinates);
        },
        goLeft() {
            if (this.stopTail != 0) {
                --this.stopTail;
            }
            let coordinates = [...this.snake.points];

            let head = {
                x: this.snake.points[this.snake.points.length - 2],
                y: this.snake.points[this.snake.points.length - 1],
            };

            if (this.bendPoint.left) {
                coordinates.splice(-2, 0, head.x, head.y);
                this.stopAddBendPoint();
            }
            --coordinates[coordinates.length - 2];
            if (this.stopTail == 0) {
                this.tailFollowsBendPoint(coordinates);
            }
            this.snake.points = [...coordinates];

            ++this.constanta;
            this.extraDirection = "left";

            this.eatFood(coordinates);
            this.finishGame(coordinates);
        },

        goRight() {
            if (this.stopTail != 0) {
                --this.stopTail;
            }
            let coordinates = [...this.snake.points];

            let head = {
                x: this.snake.points[this.snake.points.length - 2],
                y: this.snake.points[this.snake.points.length - 1],
            };

            if (this.bendPoint.right) {
                coordinates.splice(-2, 0, head.x, head.y);
                this.stopAddBendPoint();
            }

            ++coordinates[coordinates.length - 2];
            if (this.stopTail == 0) {
                this.tailFollowsBendPoint(coordinates);
            }

            this.snake.points = [...coordinates];

            ++this.constanta;
            this.extraDirection = "right";

            this.eatFood(coordinates);
            this.finishGame(coordinates);
        },
        updateDataAfterEating() {
            (this.food.x = Math.floor(Math.random() * 14 + 1) * 30 - 15),
                (this.food.y = Math.floor(Math.random() * 14 + 1) * 30 - 15),
                ++this.apples;
            this.speed += 10;
            this.showAnim = true;
            this.snake.stroke = "rgb(9, 95, 255)";
            setTimeout(() => (this.showAnim = false), 500);
            setTimeout(() => (this.snake.stroke = "green"), this.time * 11);
            this.stopTail = 30;
            clearInterval(this.interval);
            this.time *= 0.9;
            this.startMovement();
        },
        eatFood(coordinates) {
            if (
                (this.food.y - 15 == coordinates.at(-1) ||
                    this.food.y + 15 == coordinates.at(-1)) &&
                this.food.x == coordinates.at(-2)
            ) {
                this.updateDataAfterEating();
            }
            if (
                (this.food.x - 15 == coordinates.at(-2) ||
                    this.food.x + 15 == coordinates.at(-2)) &&
                this.food.y == coordinates.at(-1)
            ) {
                this.updateDataAfterEating();
            }
        },
        gameOverFunc() {
            clearInterval(this.interval);
            this.snake.stroke = "red";
            setTimeout(() => this.gameOver = true, 1000);
            this.$emit('snakeData', {apples: this.apples, speed: this.speed})
        },
        finishGame(coordinates) {
            let headX = coordinates.at(-2);
            let headY = coordinates.at(-1);

            if (headX == 14 || headX == 406 || headY == 14 || headY == 406) {
                this.gameOverFunc();
            }

            let helperArray = [...coordinates];
            helperArray.splice(-6, 6);

            if (coordinates.length >= 10) {
                for (let i = 0; i < helperArray.length; i++) {
                    if (i % 2 == 0) {
                        if (
                            headX <= helperArray[i] &&
                            headX >= helperArray[i + 2] &&
                            (headY + 28 == helperArray[i + 1] ||
                                headY - 28 == helperArray[i + 1])
                        ) {
                            this.gameOverFunc();
                        }
                        if (
                            headX >= helperArray[i] &&
                            headX <= helperArray[i + 2] &&
                            (headY + 28 == helperArray[i + 1] ||
                                headY - 28 == helperArray[i + 1])
                        ) {
                            this.gameOverFunc();
                        }
                    } else {
                        if (
                            headY <= helperArray[i] &&
                            headY >= helperArray[i + 2] &&
                            (headX + 28 == helperArray[i - 1] ||
                                headX - 28 == helperArray[i - 1])
                        ) {
                            this.gameOverFunc();
                        }
                        if (
                            headY >= helperArray[i] &&
                            headY <= helperArray[i + 2] &&
                            (headX + 28 == helperArray[i - 1] ||
                                headX - 28 == helperArray[i - 1])
                        ) {
                            this.gameOverFunc();
                        }
                    }
                }
            }
        },
        tailFollowsBendPoint(coordinates) {
            if (
                coordinates[0] == coordinates[2] &&
                coordinates[1] == coordinates[3]
            ) {
                coordinates.splice(2, 2);
            }
            let tailX = coordinates[0];
            let tailY = coordinates[1];
            let pointX = coordinates[2];
            let pointY = coordinates[3];

            if (tailX > pointX) {
                --coordinates[0];
            }
            if (tailX < pointX) {
                ++coordinates[0];
            }
            if (tailY > pointY) {
                --coordinates[1];
            }
            if (tailY < pointY) {
                ++coordinates[1];
            }
        },

        stopAddBendPoint() {
            for (let dir in this.directionOfTravel) {
                if (this.directionOfTravel[dir]) {
                    this.bendPoint[dir] = false;
                } else {
                    this.bendPoint[dir] = true;
                }
            }
        },
    },
    mounted() {
   
    },
};
</script>

<style lang="scss" scoped>
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.finish-game-enter-from {
    transform-origin: top;
    transform: scaleY(0.00001);
    opacity: 0;
}

.finish-game-enter-active {
    transition: all 1s linear;
}

.finish-game-leave-active {
    transition: all 1s linear;
}

.finish-game-leave-to {
    transform-origin: bottom;
    transform: scaleY(0.00001);
    opacity: 0;
}

.game-leave-active {
    transition: all 2s linear;
}

.game-leave-to {
    opacity: 0;
}

.start-game-leave-active {
    transition: all 1s linear;
}

.start-game-leave-to {
    transform-origin: bottom;
    transform: scaleY(0.00001);
    opacity: 0;
}

@keyframes change-counter {
    0% {
        color: rgba(255, 0, 0, 0);
        font-size: 20px;
    }

    50% {
        color: rgba(255, 0, 0, 0.455);
        font-size: 25px;
    }

    100% {
        color: rgba(255, 0, 0, 0);
        font-size: 20px;
    }
}
@keyframes arrows{
    0% {
        transform: scale(1);
        background-color: rgba(5, 5, 5, 0.36);
    }

    50% {
        transform: scale(1.1);
        background-color: rgba(5, 5, 5, 0.59);
    }

    100% {
        transform: scale(1);
        background-color: rgba(5, 5, 5, 0.36);
    }
}

.wrapper {
    width: 460px;
    height: 510px;
    position: relative;

    .wrapper-start-game {
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #b6b608;
        border: 4px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px;
        justify-content: space-evenly;

        h2 {
            font-size: 38px;
            font-weight: bold;
        }

        p {
            font-size: 16px;
        }

        .btn {
            font-size: 20px;
            background-color: black;
            color: white;
        }
    }

    .snake-game {
        position: relative;
        width: 420px;
        height: 420px;
        background-color: #b6b608;
        box-sizing: content-box;
        border: 20px solid rgb(0 0 0 / 78%);
        border-top: 70px solid rgb(0 0 0 / 78%);
        border-radius: 20px;
        .arrows{
            width: 100px;
            height: 100px;
            position: absolute;
            top: calc(50% - 100px);
            right: 25px;
            // background:rgba(5, 5, 5, 0.36) center / contain no-repeat url(//www.google.com/logos/fnbx/snake_arcade/keys.svg);
            background-color: rgba(5, 5, 5, 0.36);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(//www.google.com/logos/fnbx/snake_arcade/keys.svg);
            animation: arrows 1s linear infinite;
        }
        .game-information {
            background-color: transparent;
            width: 100%;
            display: flex;
            text-align: center;
            height: 70px;
            position: absolute;
            align-items: center;
            bottom: 100%;
            left: 0;
            color: aliceblue;

            p {
                width: 100%;
                font-size: 20px;
                animation-iteration-count: infinite;
                animation-duration: v-bind("showAnimation");
                animation-name: change-counter;
                animation-timing-function: linear;
            }
        }
    }
}
</style>