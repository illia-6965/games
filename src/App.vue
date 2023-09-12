<template>
  <div class="main-app-wrapper">
      <div v-for="cloud in backgroundClouds"
            :key="cloud"
            :class="cloud"    
        >
      </div>
      <router-view></router-view>
  </div>
</template>
<script>


export default {
data(){
  return{
    backgroundClouds: ['cloud', 'sec-cloud', 'third-cloud', 'moon', 'copy-cloud', 'copy-sec-cloud', 'copy-third-cloud']   
  }
}

}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
.main-app-wrapper{
    width: 100vw;
    height: 100vh;
    background: radial-gradient(50% 50% at 50% 50%, #25124a 0%, #1c0323 100%);
    position: relative;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;

    .cloud {
        animation: cloud-move 60s linear infinite;
        width: 70px;
        height: 60px;      
        background: center / contain no-repeat url("./assets/images/cloud.svg");
        position: absolute;
        top: 50px;
        left: 100px;
        z-index: 10;
    }

    .sec-cloud {
        width: 70px;
        animation: sec-cloud-move 44s linear infinite;
        height: 60px;
        background: center / contain no-repeat url("./assets/images/cloud_1.svg");
        position: absolute;
        top: 100px;
        left: 300px;
    }

    .third-cloud {
        animation: sec-cloud-move 34s linear infinite;
        width: 40px;
        height: 30px;
        background: center / contain no-repeat url("./assets/images/cloud_2.svg");
        position: absolute;
        top: 150px;
        z-index: 10;
        left: 400px;
    }

    .moon {
        width: 65px;
        height: 220px;
        background: center / contain no-repeat url("./assets/images/moon.svg");
        position: absolute;
        top: -20px;
        right: 100px;
    }

    .copy-cloud {
        animation: copy-cloud-move 50s linear infinite;
        position: absolute;
        width: 70px;
        height: 60px;
        background: center / contain no-repeat url("./assets/images/cloud.svg");
        top: 120px;
        right: 120px;
    }

    .copy-sec-cloud {
        animation: copy-cloud-move 40s linear infinite;
        position: absolute;
        width: 40px;
        height: 30px;
        background: center / contain no-repeat url("./assets/images/cloud_2.svg");
        top: 75px;
        z-index: 10;
        right: 300px;
    }

    .copy-third-cloud {
        animation: copy-cloud-move 30s linear infinite;
        position: absolute;
        width: 70px;
        height: 60px;
        background: center / contain no-repeat url("./assets/images/cloud_1.svg");
        top: 30px;
        z-index: 10;
        right: 220px;
    }
    
}
</style>
