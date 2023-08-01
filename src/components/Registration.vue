<template>
    <div class="wrapper-registr">
        <div class="wrapper-log-in">
            <my-btn
                class="my-btn"
                :contentPart="'Log-in'" 
                :backlight="activeField"
                @click="clickLogIn"          
            />
            <Transition>
                    <windows-reg-log v-if="activeField"
                        :contentPart="'Login with password'"
                        :windowLogIn="true"     
                    />
            </Transition>  
        </div>
        <div class="wrapper-sing-up">
            <my-btn
                class="my-btn"
                :contentPart="'Sing-up'"  
                :backlight="!activeField"
                @click="clickSinUp"         
            />
            <Transition>
                    <windows-reg-log v-if="!activeField"
                        :contentPart="'Registration of a regular customer'"
                        @openLogInWind="(data) => activeField = data"
                    /> 
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
        clickLogIn(){
            this.activeField = !this.activeField
        },
        clickSinUp(){
            this.activeField = !this.activeField
        },
    }
}
</script>

<style lang="scss" scoped>
.v-enter-active {
  transition: all 0.5s ease-out;
}
.v-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.wrapper-registr{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .wrapper-log-in,.wrapper-sing-up{
        width: 300px;
        position: relative;
        height: 400px;
        .my-btn{
            position: absolute;
            bottom: 100%;
            left: calc(50% - 75px);
            margin-bottom: 20px;
        }
    }
    .wrapper-log-in{
        margin-right: 50px;
    }
    
}

</style>