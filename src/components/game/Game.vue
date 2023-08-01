<template>
    <div class="main-wrapper">
        <div class="header">
            <h2>game</h2>
        </div>

        <div class="wrapper-game">
            <Transition name="start-game">
                <div class="wrapper-start-game" v-if="!startGame">
                    <h2 class="header">TIC-TAC-TOE</h2>
                    <p>Click below, if you want to play</p>
                    <my-btn @click="startGame = true" :contentPart="'Start Game'" class="btn"/>
                </div>
            </Transition>
            
            <Transition name="start-game">
                <div class="wrapper-choose-option" v-if="!activeClass">
                    <p>choose what you want to play</p>
                    <button class="btn" @click="activeClassCross">cross</button>
                    <button class="btn" @click="activeClassCircle">circle</button>
                </div>
            </Transition>
                <div 
                    class="passive-square"
                    v-for="square in dataDuringGame"
                    :key="square.id"
                    @click="activeSquareId(square.id)"  
                >
                    <Transition name="appearance">
                        <div v-if="square.filledCross" class="active-square-cross"></div>
                    </Transition>
                    <Transition name="appearance-delay">
                        <div v-if="square.filledCircle" class="active-square-circle"></div>
                    </Transition>
                </div>
          
            <Transition name="show-winner">
                <div class="winner" v-if="winner">
                    <p class="winner__extra-inf" v-if="winner === 'user' && numberOfUserWins === 1">
                        Now the bot has remembered your winning combination, and will not make this mistake!!! <br>This logic will continue in the future, in case of your victories.
                    </p>
                    <p class="winner__name">Winner : {{ winner }}</p>
                    <my-btn class="my-btn" :contentPart="'CONTINUE GAME'" @click="continueGame"/>
                </div>
            </Transition>
        </div>
    </div>

</template>

<script>
import { counter } from '@fortawesome/fontawesome-svg-core'
import MyBtn from '../MyBtn.vue'
export default {
    components:{
        MyBtn
    },
    watch:{
        winner(){
            if(this.winner === 'user'){
                this.$emit('update:numberOfWins', this.numberOfUserWins)
            }
            if(this.winner === 'bot'){
                console.log(this.numberOfLosses, 'this.numberOfLosses')
                this.$emit('update:numberOfLosses', this.numberOfLosses)
            }
        }
    },
    props:{
        numberOfWins:{
            type: Number,
        },
        numberOfLosses:{
            type: Number,
        }
    },
    data(){
        return{
            startGame: false,
            activeClass: '',
            currentId:null,
            squareData:[],
            userAnswers:[],
            userWinHistory:[],
            botAnswers:[],
            correctAnswers:[],
            winner:'',
            historyOfWinners:'', 
            numberOfUserWins: 0,
            numberOfLosses: 0
        }
    },
    computed:{   
        dataDuringGame(){
            if(this.currentId === null){
                return this.squareData
            }
            let dataAfterMove = this.squareData.map((item) => {
                if(item.id === this.currentId){
                    if(this.activeClass === 'active-square-cross'){
                        item.filledCross = true
                    }
                    if(this.activeClass === 'active-square-circle'){
                        item.filledCircle = true
                    }
                } 
            return item})
        
            let resultData = this.botMove(dataAfterMove)
            this.winner = this.determineWinner()
              
            if(this.winner === 'user'){
                this.userWinToSave()
                ++this.numberOfUserWins
                this.historyOfWinners = 'user'
            }
            if(this.winner === 'bot'){
                ++this.numberOfLosses
            }
        
            return resultData
        }
    },
    methods:{
        createSquareData(){
            for(let i = 0; i < 9; i++){
                this.squareData.push({id: i, filledCross: false, filledCircle: false})
            }
        },

        activeSquareId(id){
            let filledField = this.botAnswers.includes(id) || this.userAnswers.includes(id)
            if(!filledField){
                this.currentId = id
                this.userAnswers.push(id)
            }
        },

        continueGame(){
            this.currentId = null
            this.userAnswers = []
            this.botAnswers = []
            this.winner = ''
            this.squareData.map(item => {item.filledCross = false; item.filledCircle = false; return item})
        },

        activeClassCross(){this.activeClass = 'active-square-cross'},
        activeClassCircle(){this.activeClass = 'active-square-circle'},

        botMove(dataAfterMove){
            let filledFields = dataAfterMove.filter(item => item.filledCircle || item.filledCross)
    
            let freeId = []
            for(let i = 0; i < 9; i++){
                let repeatId = filledFields.find(item => item.id === i)
                if( !repeatId ){ freeId.push(i) }
            }

            let randomId = freeId[Math.floor(Math.random()*freeId.length)]
            if(randomId === undefined){ return dataAfterMove }

            if(this.historyOfWinners === 'user' && this.userAnswers.length >= 1){
                let upgradeId = this.improveBot()
                if(typeof upgradeId == 'number'){ randomId = upgradeId }   
            }
            this.botAnswers.push(randomId)

            this.activeClass === 'active-square-cross' ? dataAfterMove[randomId].filledCircle = true : dataAfterMove[randomId].filledCross = true
            return dataAfterMove
        },

        createCorrectAnswers(){
            let arr = []
            
            for(let y = 0; y <= 6; y+=3){
                for(let i = y; i < y+3; i++){
                    arr.push(i)
                }
               this.correctAnswers.push(arr)
                arr = []
            }

            for(let y = 0; y < 3; y++){
                for(let i = y; i < 9; i+=3){
                    arr.push(i)
                }
                this.correctAnswers.push(arr)
                arr = []
            }

            for(let y = 0; y < 9; y+=4) { arr.push(y) }
              this.correctAnswers.push(arr)
              arr = []

            for(let y = 2; y <= 6; y+=2) { arr.push(y) }
              this.correctAnswers.push(arr)
           
        },

        determineWinner(){
            let counterUser = 0
            let counterBot = 0
            for(let i = 0; i < this.correctAnswers.length; i++){
               counterUser = this.userAnswers.reduce((acc, item) => this.correctAnswers[i].includes(item) ? ++acc : acc, 0)
               if(counterUser === 3){ return 'user' }  
            }

            for(let i = 0; i < this.correctAnswers.length; i++){
                counterBot = this.botAnswers.reduce((acc, item) => this.correctAnswers[i].includes(item) ? ++acc : acc, 0)
               if(counterBot === 3){ return 'bot' }
            }
                
            if([...this.userAnswers, ...this.botAnswers].length === 9){
                return 'draw'
            }
        },

        improveBot(){
            if(this.botAnswers.length >= 2){
                let finalWinningMove = this.botWinningCombination()
                if(typeof finalWinningMove == 'number'){
                    return finalWinningMove
                }
            }
            if(this.userAnswers.length >= 2){
                let defensiveMove = this.avoidLoss()
                if(typeof defensiveMove == 'number'){
                    return defensiveMove
                }
            }
            if(this.userWinHistory.length > 3){
                return this.avoidLossExtra()
            }
            return null
        },
        
        botWinningCombination(){
            for(let i = 0; i < this.correctAnswers.length; i++){

                let userFilledField = this.correctAnswers[i].find(item => this.userAnswers.includes(item))
                if(typeof userFilledField == 'number') { continue }
                    
                let matchCounter = this.botAnswers.reduce((acc, item) => this.correctAnswers[i].includes(item) ? ++acc : acc, 0)
                   
                if(matchCounter >= 2){       
                    return this.correctAnswers[i].find(item => !this.botAnswers.includes(item))
                }
            }
        },

        avoidLoss(){
            for(let i = 0; i < this.userWinHistory.length; i++){
                let matchCounter = this.userAnswers.reduce((acc, item) => this.userWinHistory[i].includes(item) ? ++acc : acc, 0)

                if(matchCounter >= 2){
                    let alreadyFilledField = this.userWinHistory[i].find(item => this.botAnswers.includes(item))
                    if(typeof alreadyFilledField == 'number'){
                        continue
                    }
                    else{
                        return this.userWinHistory[i].find(item => !this.userAnswers.includes(item))
                    }
                }
            }
        },     

        userWinToSave(){
            for(let i = 0; i < this.correctAnswers.length; i++){
                let counter = this.correctAnswers[i].reduce((acc, item) => this.userAnswers.includes(item) ? ++acc : acc, 0)

                if(counter === 3){
                    this.userWinHistory.push(this.correctAnswers[i]) 
                }
            }
        },

        avoidLossExtra(){
            const arr = [0, 2, 6, 8]
            if(this.botAnswers.length === 0){
                if(this.userAnswers[0] != 4){
                    return 4
                }else{
                    return arr[Math.floor(Math.random()*arr.length)]
                }
            }
            if(this.botAnswers.length === 1){
                if(this.botAnswers[0] === 4){
                    return null
                }else{
                    let freeFields = arr.filter(item => ![...this.userAnswers, ...this.botAnswers].includes(item))
                    return freeFields[Math.floor(Math.random()*freeFields.length)]
                }
            }
        }
    },
    mounted(){
        this.createSquareData()
        this.createCorrectAnswers()
    }

}
</script>

<style lang="scss" scoped>
.wrapper-game{
    width: 500px;
    height: 500px;
    background-color: yellow;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr;
    box-sizing: content-box;
    border: 4px solid black;
    justify-items: center;
    align-items: center;
    position: relative;    
   .passive-square{
        width: 100%;
        height: 100%;
        background-color: yellow;
        border: solid 2px black;
        display: flex;
        justify-content: center;
        align-items: center;
   }
   .active-square-circle{
        width: 50%;
        height: 50%;
        background-color: #ffffff00;
        border-radius: 50%;
        border: 10px solid black;
   }
   .active-square-cross{
        position: relative;
        width: 100%;
        height: 100%;
   }
   .active-square-cross::after,.active-square-cross::before{
        width: 10%;
        height: 100%;
        position: absolute;
        content: '';
        background-color: black;
        top: 0;
        left: calc(50% - 5%);
        transform: rotate(45deg);
        border-radius: 6px;
   }
   .active-square-cross::before{
        transform: rotate(-45deg);
   }
   .winner{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgb(255 181 0 / 97%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        
        &__name{
            font-size: 50px;
            color: black;
            margin-bottom: 20px;
        }

        &__extra-inf{
            font-size: 25px;
            font-weight: bold;
            color: black;
            margin-bottom: 20px;
            text-align: center;
            border: 3px solid black;
            background: red;
            padding: 13px;
            border-radius: 20px;
        }

        .my-btn{
            font-size: 25px;
            background-color: #00000082;
            color: white;
            width: 200px;
            height: 60px;
        }
       
   }
   .wrapper-choose-option{
        width: 100%;
        height: 100%;
        background-color: yellow;
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        align-items: center;
        grid-column-gap: 20px;
        padding: 50px;
        p{
            grid-column: 1 / -1;
            grid-row: 2;
            font-size: 30px;
            justify-self: center;
            
        }
        button{
            background-color: black;
            color: white;
            grid-row: 3;
            grid-column: 1;
            // width: 200px;
            height: 40px;
            font-size: 20px;
        }
   }
   .wrapper-choose-option button:nth-child(2){
        grid-column: 2;
   }
   .wrapper-start-game{
        width: 100%;
        height: 100%;
        background-color: yellow;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px;
        justify-content: space-evenly;
        h2{
            font-size: 49px;
        }
        p{
            font-size: 23px;
        }
        .btn{
            font-size: 20px;
            background-color: black;
            color: white;
        }
   }
}

.start-game-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}
.start-game-leave-to {
   transform: scale(0.1);
    opacity: 0;
}
.appearance-enter-active {
  animation: bounce-in 0.5s;
}

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
.appearance-delay-enter-active{
    animation: bounce-in 0.5s;
}

.show-winner-enter-active {
  transition: all 0.4s ease-out;
}

.show-winner-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-winner-enter-from{
    transform: scale(0.001);
    opacity: 0;
}
.show-winner-leave-to {
    transform: rotate(580deg);
    opacity: 0;
}
// matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
</style>

