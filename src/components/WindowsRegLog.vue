<template>
  <div class="wrapper-reg-log" :class="{'wrapper-log': windowLogIn}">

        <h3 class="header">{{ contentPart }}</h3>
        <!-- <div class="wrapper-form-add-user"> -->

        <form @submit.prevent class="data-entry-fields" :class="{'extra-styles-windowLogIn': windowLogIn}">
            <input 
                v-if="!windowLogIn"
                class="text-field" 
                type="text" 
                placeholder="Name"
                v-model.lazy="userData.name"
                :class="formDataConfirmation.nameData.class"
            />
            <div class="wrapper-phone-number" v-if="!windowLogIn">
                <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
                <vue-tel-input 
                    @phoneNumber="(data) => userData.number = data"
                    :classForNumber="formDataConfirmation.numberData.class"
                />
                <!--       
            <ul class="field-choose-country"  
            
                @click.stop="updateShowDropDown"
                :style="{backgroundImage: 'url('+require('../assets/images/'+selectedCountry+'.png')+')'}"
                >
                <li class="selected-country" 
                    v-if="showDropDown"
                    >
                    <ul class="set-of-countries">
                        <li class="drop-down-list" 
                            
                            v-for="country in countries"
                            :key="country.id"      
                            @click.stop="selectCountry(country.id)"
                            >
                            <span  :style="{backgroundImage: 'url('+require('../assets/images/'+country.flag+'.png')+')'}"></span>
                            <span>{{ country.text }}</span>
                        </li>
                    </ul>
                </li>
            </ul>

            <input class="field-number-phone"  type="text"  v-model="countries[0].value" placeholder="Phone"> -->
            </div>
            <div class="text-field-email">
                <label
                    v-if="formDataConfirmation.emailData.error"
                    class="text-error" for="email">{{ formDataConfirmation.emailData.error }}
                </label>
                <input 
                name="email"
                class="text-field" 
                type="text"
                placeholder="E-mail"
                v-model.lazy="userData.email"
                :class="formDataConfirmation.emailData.class"
            />
            </div>
            
            <div class="text-field-password">
                <label 
                    v-if="formDataConfirmation.passwordData.error" 
                    class="text-error" for="password">{{formDataConfirmation.passwordData.error}}
                </label>
                <input 
                    name="password"
                    class="text-field" 
                    type="password" 
                    placeholder="Password"
                    v-model.lazy="userData.password"
                    :class="formDataConfirmation.passwordData.class"
                />
            </div>
            <my-btn @click="checkFormAndSubmit" :contentPart="'SUBMIT'"/>
        </form>
    <!-- </div> -->
    <div>
        <a class="link-to-another-window" @click="() => $emit('openAnotherWindow', true)">{{linkFoкEach}}</a>
    </div>
   
  </div>
</template>
<!-- @keydown.delete.prevent="resetState" -->
<script>
import { mapMutations } from 'vuex'
import  VueTelInput  from '@/components/VueTelInput'
import MyBtn from '@/components/MyBtn'
export default {
    components:{
        MyBtn,
        VueTelInput
    },
    props:{
        contentPart:{
            type: String
        },
        windowLogIn:{
            type: Boolean, 
            default(){
                return false
            }
        },
        linkFoкEach:{
            type: String,
        }
    },
    data(){
        return{
            formDataConfirmation:{
                emailData: '',
                passwordData: '',
                nameData: '',
                numberData: '',
            },
            userData:{
                number:'',
                email:'',
                name:'',
                password:'',
                gameData:{
                    snake:{
                        games:0,
                        apples:0,
                        speed:0
                    },
                    ticTacToe:{
                        botWon:0,
                        userWon:0,
                        draw:0
                    }
                }
                
            }
        }
    },
    computed:{
        checkEmail(){
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            return reg.test(this.userData.email) ? {class:'correct'} : {class:'in-correct'}
        },
        checkNumber(){
            return this.userData.number.length <= 18 && this.userData.number.length >= 10 ? {class:'correct'} : {class:'in-correct'}
        },
        checkName(){
            return this.userData.name.length > 3 && this.userData.name.length < 20 ? {class:'correct'} : {class:'in-correct'}
        },
        checkPassword(){
            const regLowercase = /[a-z]/g
            const regUppercase = /[A-Z]/g
            const regNumbers = /[0-9]/g
            const pasLength = this.userData.password.length
            if(pasLength <= 8){
                return  {
                            error:'must be at least 8 characters !',
                            class: 'in-correct'
                        }
            }
            if(!regLowercase.test(this.userData.password)){
                return  {
                            error:'must be at least one lowercase letter !',
                            class: 'in-correct'
                        }
            }
            if(!regUppercase.test(this.userData.password)){
                return  {
                            error:'must be at least one UpperCase letter !',
                            class: 'in-correct'
                        }
            }
            if(!regNumbers.test(this.userData.password)){
                return  {
                            error:'must be at least one number !',
                            class: 'in-correct'
                        }
            }       
         
            return {class: 'correct'}
        }
    },
    methods:{
        ...mapMutations(['addUser', 'setCurrentUser']),
        checkFormAndSubmit(){
            if(!this.windowLogIn){
                this.checkForm()
                let checkError = Object.values(this.formDataConfirmation).find(item => item.class === 'in-correct')
                let existEmail = Object.keys(localStorage).find(item => item === this.userData.email)

                if(checkError === undefined && existEmail === undefined){
                    this.userData.id = Date.now()

                    // this.setCurrentUser(this.userData)
                    localStorage.setItem('currentUser', JSON.stringify(this.userData.name))
                    localStorage.setItem(this.userData.email, JSON.stringify(this.userData))
                    

                    this.$router.push(`/${this.userData.email}`)
                }
                if(existEmail !== undefined){
                    this.formDataConfirmation.emailData = { class: 'in-correct',
                                                            error: 'this email already exists'}
                }
            }
            else{
                let emailKey = Object.keys(localStorage).find(item => item === this.userData.email)
                
                if(emailKey === undefined){
                    this.formDataConfirmation.emailData = { class: 'in-correct',
                                                            error: 'in-correct email'}      
                }else{
                    if(JSON.parse( localStorage.getItem(emailKey)).password != this.userData.password){
                        this.formDataConfirmation.passwordData = {class: 'in-correct',
                                                                  error: 'in-correct password'}
                        this.formDataConfirmation.emailData = { class: 'correct'}
                    }else{
                        let user = JSON.parse(localStorage.getItem(emailKey))
                   
                        localStorage.setItem('currentUser', JSON.stringify(user.name))
                        // 'id to home'
                        this.$router.push(`/${user.email}`)
                    }
                }
            }
        },
        checkForm(){
            this.formDataConfirmation.emailData = this.checkEmail
            this.formDataConfirmation.passwordData = this.checkPassword
            this.formDataConfirmation.nameData = this.checkName
            this.formDataConfirmation.numberData =  this.checkNumber
        },

    },
}
</script>

<style lang="scss" scoped>

.wrapper-reg-log{
    width: 100%;
    
    height: 100%;
   
    display: flex;
    flex-direction: column;
    background-color: #f2e6e6;
    justify-content: space-between;
    padding: 20px 5px 20px 5px;
    border-top: 3px solid red;
    
    .link-to-another-window{  
        // display: inline !important;
        cursor: pointer;
    }
    .header{
        width: 100%;
        color: black;
        font-size: 22px;
        text-align: center;
    }
    .data-entry-fields{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 270px;
        .text-field{
            width: 100%;
            padding: 5px;
            font-size: 16px;
            height: 38.5px;
            border-radius: 3px;
            outline: none;
            border: 1px solid #bbb;
            font-size: 0.8em;
        }
        .text-field-email,.text-field-password{
            width: 100%;
            position: relative;
        }
        .text-error{
            position: absolute;
            bottom: 100%;
            left: 0;
            font-size: 13px;
            text-align: center;
            width: 100%;
        }
        .in-correct{
            border: 1px solid red;
        }
        .correct{
            border: 1px solid greenyellow;
        }  
        .text-field:focus-within{
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
            border-color: #66afe9;
        }
        .wrapper-phone-number{
            width: 100%;
            height: 38px;
        }
    }
    .extra-styles-windowLogIn{
        justify-content: space-evenly;
    }
}
.wrapper-log{
    padding: 20px 5px;
}
</style>