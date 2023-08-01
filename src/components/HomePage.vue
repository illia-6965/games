<template>
  <h2 class="header">HOME PAGE</h2>
  <div class="wrapper-home-page" v-if="user">
    <div class="wrapper-user" >
      <h2 class="header-user">USER</h2>
      <div>name: {{ user.name }}</div>
      <div>number: {{ user.number }}</div>
      <div>id: {{ user.id }}</div>
      <div>email: {{ user.email }}</div>
      <div>record: {{ user.record }}</div>
      <div>numberOfWins: {{ user.numberOfWins }}</div>
      <div>numberOfLosses: {{ user.numberOfLosses }}</div>

      <div class="wrapper-btn">
        <my-btn
          @click="logOut"
          :contentPart="'Log Out'"/>
      </div>

    </div>
  </div>
  <game
    v-model:numberOfWins= "user.numberOfWins"  
    v-model:numberOfLosses="user.numberOfLosses" 
  />
  <game_2/>
  <game_3/>
</template>

<script>
import Game_3 from '@/components/Game_3'
import Game_2 from '@/components/Game_2'
import Game from '@/components/game/Game'
import MyBtn from '@/components/MyBtn'
import { mapState } from 'vuex'
export default {
components:{
   MyBtn,
   Game,
   Game_2,
   Game_3
},
data(){
  return{
    user: ''
  }
},
computed:{
  ...mapState(['currentUser'])
},
methods:{
  getCurrentUser(email){
    if(!email){
      
    }
    let currentUser = Object.keys(localStorage).find(item => item == email)
    this.user = JSON.parse(localStorage.getItem(currentUser))
  },
  logOut(){
    this.user = ''
    // console.log(this.$route.params, 'this.$route.params')
    // this.$router.push('/home')
    // console.log(this.$route.params, 'this.$route.params AFTER')
  },
  goDown(){
    console.log('jjjjjjjjjj')
  }
},
created(){
  this.getCurrentUser(this.$route.params.email)
}
}
</script>

<style lang="scss" scoped>
.header{
  text-align: center;
  padding-top: 20px;
}
.wrapper-home-page{
    width: 100%;
    // height: 100%;
    display: flex;
    justify-content: end;
    padding: 20px 40px 0 20px;
    .wrapper-user{
      width: 200px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(212 249 237);
      padding: 5px;
      border: 2px solid rgb(31, 214, 199);
    }
}
</style>