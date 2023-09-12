<template>
    <div class="wrapper">
        <div class="log-in-sign-up">

       
                <Transition name="log-in">
                    <div class="wrapper-log-in" v-if="activeField">
                        <windows-reg-log 
                            :contentPart="'Login with password'"
                            :windowLogIn="true"     
                            @openAnotherWindow="(data) => activeField = !data"
                            :linkFoкEach="'Sign-up'"
                        />
                    </div>
                </Transition>  
         

            
                <Transition name="sign-up"> 
                    <div class="wrapper-sing-up"  v-if="!activeField">
                        <windows-reg-log
                            :contentPart="'Registration of a regular customer'"
                            @openAnotherWindow="(data) => activeField = data"
                            :linkFoкEach="'Log-in'"
                        /> 
                    </div>
                </Transition>    
          

        </div>
        
       
    </div>

</template>
<script>
import MyBtn from './MyBtn'
import WindowsRegLog from './WindowsRegLog'
export default {
    components:{
        MyBtn,
        WindowsRegLog
    },
    data(){
        return{
            activeField: false,
         
        }
    },
    methods:{
     
    },
    mounted(){
     
    }
}
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

.sign-up-enter-active {
    animation: game-active 0.8s linear;
}

.sign-up-leave-active {
    animation: game-leave 0.6s linear;
}

.log-in-enter-active {
    animation: game-active 0.8s linear;
}

.log-in-leave-active {
    animation: game-leave 0.6s linear;
}

.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-in-sign-up{
        position: relative;
        width: 290px;
        height: 410px;
        overflow: hidden;
        z-index: 10;
        .wrapper-sing-up{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        .wrapper-log-in{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
}

</style>