<template>
    <div class="wrapper-home-page">
        <div class="top-bar">
            <ul class="menu">
                <li class="menu__user">
                    User
                    <ul>
                        <li>name: {{ this.user.name }}</li>
                        <li>password: {{ this.user.password }}</li>
                        <li>email: {{ this.user.email }}</li>
                        <li>number: {{ this.user.number }}</li>
                    </ul>
                </li>
                <li class="menu__snake" @click="selectedGame = true">
                    <Transition name="active-game">
                        <div class="active-game" v-if="selectedGame"></div>
                    </Transition>
               
                    Snake
                    <ul>
                        <li>number of games: {{user.gameData.snake.games}}</li>
                        <li>record of apples: {{user.gameData.snake.apples}}</li>
                        <li>record of speed: {{user.gameData.snake.speed}}</li>
                    </ul>
                </li>
                <li class="menu__tic-tac-toy" @click="selectedGame = false">
                    <Transition name="active-game">
                        <div class="active-game" v-if="!selectedGame"></div>
                    </Transition>
                    Tic-Tac-Toy
                    <ul class="test">
                        <li>number of draws: {{user.gameData.ticTacToe.draw}}</li>
                        <li>number of loos: {{user.gameData.ticTacToe.botWon}}</li>
                        <li>number of wins: {{user.gameData.ticTacToe.userWon}}</li>
                    </ul>
                </li>
            </ul>
            <button class="log-out" @click="logOut">Log-out</button>
        </div>
    

        <div class="wrapper-games">
            <div class="games">
                <Transition name="snake">
                    <snake 
                        v-if="selectedGame" 
                        class="snake" 
                        @snakeData="getResultSnake"    
                    />
                </Transition>

                <Transition name="tic-tac">
                    <tic-tac-toy 
                        v-if="!selectedGame" 
                        class="tic-tac" 
                        @ticTacData="getResultTicTac"

                    />
                </Transition>
            </div>
        </div>
    </div>
</template>

<script>
import Snake from "@/components/game/Snake";
import TicTacToy from "@/components/game/TicTacToy";
import MyBtn from "@/components/MyBtn";
import { mapMutations } from "vuex";
import { onBeforeUnmount } from 'vue';
export default {
    components: {
        MyBtn,
        Snake,
        TicTacToy,
    },
    data() {
        return {
            selectedGame: false,
            user: null,         
        }
    },
    computed: {
        ...mapMutations(["setCurrentUser"]),
    },
    methods: {
        logOut(){
            localStorage.removeItem('currentUser')
            this.$router.push('/login')

        },
        getResultSnake({apples, speed}){
            if(this.user.gameData.snake.apples < apples){
                this.user.gameData.snake.apples = apples
                this.user.gameData.snake.speed = speed
            }
            ++this.user.gameData.snake.games
            localStorage.setItem(this.user.email, JSON.stringify(this.user))
        },
        getResultTicTac(data){
            if(data === 0){
              ++this.user.gameData.ticTacToe.draw
            }
            if(data){
                ++this.user.gameData.ticTacToe.userWon
            }
            if(data === false){
                ++this.user.gameData.ticTacToe.botWon
            }
            localStorage.setItem(this.user.email, JSON.stringify(this.user))

        },
        getCurrentUser(email) {
            let currentUser = Object.keys(localStorage).find(item => item == email)
            this.user = JSON.parse(localStorage.getItem(currentUser));
        },
        
    },

    created() {
        this.getCurrentUser(this.$route.params.email);
    },

    mounted(){
      if(!localStorage.getItem('currentUser')){
        this.$router.push('/login')
      }
    },

    beforeUnmount(){
        if(localStorage.getItem('currentUser')){
            this.$router.forward()
        }
    }
   
};
</script>

<style lang="scss" scoped>
@keyframes game-active {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes game-leave {
    0% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(100%);
        opacity: 0;
    }
}

.snake-enter-active {
    animation: game-active 1.2s linear;
}

.snake-leave-active {
    animation: game-leave 1s linear;
}

.tic-tac-enter-active {
    animation: game-active 1s linear;
}

.tic-tac-leave-active {
    animation: game-leave 1s linear;
}



.active-game-leave-to,
.active-game-enter-from{
    transform: scaleX(0);
}

.active-game-leave-active,
.active-game-enter-active{
    transition: all 0.3s linear;
}






@keyframes cloud-move {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(1300px);
        display: none;
    }

    80% {
        transform: translateX(-200px);
        display: none;
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes sec-cloud-move {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(1300px);
        display: none;
    }

    80% {
        transform: translateX(-500px);
        display: none;
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes copy-cloud-move {
    0% {
        transform: translateX(0);
    }

    30% {
        transform: translateX(500px);
        display: none;
    }

    50% {
        transform: translateX(-1300px);
        display: none;
    }

    100% {
        transform: translateX(0);
    }
}

.wrapper-home-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // background: radial-gradient(50% 50% at 50% 50%, #25124a 0%, #1c0323 100%);
    position: relative;
    // overflow: hidden;

   

    .wrapper-games {
        width: 100%;
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        // .wrapper-btn {
        //     width: 460px;
        //     margin: 0 auto;
        //     display: flex;
        //     justify-content: space-evenly;
        // }

        .games {
            overflow: hidden;
            width: 460px;
            // margin: 0 auto;
            position: relative;
            height: 510px;

            .tic-tac {
                position: absolute;
                left: 0;
                top: 0;
            }

            .snake {
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
}

.top-bar {
    height: 50px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    .log-out{
        font-size: 23px;
        color: aliceblue;
        background-color: transparent;
        padding: 8px 10px;
        border: none;
        z-index: 20;
        border-radius: 20px;
        transition: all 0.1s ease-in;
        cursor: pointer;
    }
    .log-out:hover{
        background-color: rgb(7 225 231 / 26%);
        border-bottom: 2px solid red;
    }

    .menu {
        width: 400px;
        display: flex;
        justify-content: space-between;
        font-size: 23px;
        color: aliceblue;
        .active-game{
            width: 100%;
            height: 5px;
            border-radius: 10px;
            background-color: red;
            position: absolute;
            top: 100%;
            left: 0;
        }
        &__user {
            padding: 10px 10px;
            cursor: pointer;
            position: relative;
            transition: all 0.1s ease-in;

            ul {
                padding-top: 10px;
                position: absolute;
                background-color: rgb(7 225 231 / 26%);
                left: 0;
                top: 100%;
                text-align: left;
                transform: scaleY(0);
                transform-origin: top;
                transition: all 0.2s ease-in;
                z-index: 20;

                li {
                    white-space: nowrap;
                    padding: 5px 10px;
                    font-size: 15px;
                }

                li::before {
                    content: "";
                    width: 2px;
                    height: 100%;
                    background-color: red;
                    position: absolute;
                    right: 100%;
                    top: 0;
                }
            }
        }

        &__user::before {
            content: "";
            width: 2px;
            height: 100%;
            background-color: rgba(255, 0, 0, 0.999);
            position: absolute;
            right: 100%;
            top: 0;
            display: none;
        }

        &__user:hover::before {
            display: block;
        }

        &__snake {
            cursor: pointer;
            padding: 10px 10px;
            position: relative;
            transition: all 0.1s ease-in;

            ul {
                padding-top: 10px;
                position: absolute;
                background-color: rgb(7 225 231 / 26%);
                left: 0;
                top: 100%;
                text-align: left;
                transform: scaleY(0);
                transform-origin: top;
                transition: all 0.2s ease-in;
                z-index: 20;

                li {
                    white-space: nowrap;
                    padding: 5px 10px;
                    font-size: 15px;
                }

                li::before {
                    content: "";
                    width: 2px;
                    height: 100%;
                    background-color: red;
                    position: absolute;
                    right: 100%;
                    top: 0;
                }
            }
        }

        &__snake::before {
            content: "";
            width: 2px;
            height: 100%;
            background-color: rgba(255, 0, 0, 0.999);
            position: absolute;
            right: 100%;
            top: 0;
            display: none;
        }

        &__snake:hover::before {
            display: block;
        }

        &__tic-tac-toy {
            transition: all 0.1s ease-in;
            padding: 10px 10px;
            cursor: pointer;
            position: relative;

            ul {
                background-color: rgb(7 225 231 / 26%);
                padding-top: 10px;
                position: absolute;
                left: 0;
                top: 100%;
                text-align: left;
                z-index: 20;
                transform: scaleY(0);
                transform-origin: top;
                transition: all 0.2s ease-in;

                li {
                    white-space: nowrap;
                    padding: 5px 10px;
                    font-size: 15px;
                }

                li::before {
                    content: "";
                    width: 2px;
                    height: 100%;
                    background-color: red;
                    position: absolute;
                    right: 100%;
                    top: 0;
                }
            }
        }

        &__tic-tac-toy::before {
            content: "";
            width: 2px;
            height: 100%;
            background-color: rgba(255, 0, 0, 0.999);
            position: absolute;
            right: 100%;
            top: 0;
            display: none;
        }

        &__tic-tac-toy:hover::before {
            display: block;
        }

        &__tic-tac-toy:hover,
        &__snake:hover,
        &__user:hover {
            background-color: rgb(7 225 231 / 26%);

            ul {
                transform: scaleY(1);
            }
        }
    }
}
</style>