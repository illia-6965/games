(function(){"use strict";var e={5008:function(e,t,s){var i=s(9242),a=s(3396),r=s(7139);const n={class:"main-app-wrapper"};function o(e,t,s,i,o,l){const c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.backgroundClouds,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:(0,r.C_)(e)},null,2)))),128)),(0,a.Wm)(c)])}var l={data(){return{backgroundClouds:["cloud","sec-cloud","third-cloud","moon","copy-cloud","copy-sec-cloud","copy-third-cloud"]}}},c=s(89);const u=(0,c.Z)(l,[["render",o],["__scopeId","data-v-7335f488"]]);var h=u,d=s(5431);(0,d.z)("/games/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=s(2483);const p={class:"wrapper"},f={class:"log-in-sign-up"},w={key:0,class:"wrapper-log-in"},g={key:0,class:"wrapper-sing-up"};function v(e,t,s,r,n,o){const l=(0,a.up)("windows-reg-log");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",f,[(0,a.Wm)(i.uT,{name:"log-in"},{default:(0,a.w5)((()=>[n.activeField?((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(l,{contentPart:"Login with password",windowLogIn:!0,onOpenAnotherWindow:t[0]||(t[0]=e=>n.activeField=!e),"linkFoкEach":"Sign-up"})])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(i.uT,{name:"sign-up"},{default:(0,a.w5)((()=>[n.activeField?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(l,{contentPart:"Registration of a regular customer",onOpenAnotherWindow:t[1]||(t[1]=e=>n.activeField=e),"linkFoкEach":"Log-in"})]))])),_:1})])])}function D(e,t,s,i,n,o){return(0,a.wg)(),(0,a.iD)("button",{class:(0,r.C_)(["btn",{"active-btn":s.backlight}])},(0,r.zw)(s.contentPart),3)}var k={props:{contentPart:{type:String},backlight:{type:Boolean,default(){return!1}}}};const b=(0,c.Z)(k,[["render",D],["__scopeId","data-v-72a13373"]]);var y=b;const C={class:"header"},_={key:1,class:"wrapper-phone-number"},T={class:"text-field-email"},O={key:0,class:"text-error",for:"email"},A={class:"text-field-password"},W={key:0,class:"text-error",for:"password"};function S(e,t,s,n,o,l){const c=(0,a.up)("vue-tel-input"),u=(0,a.up)("my-btn");return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["wrapper-reg-log",{"wrapper-log":s.windowLogIn}])},[(0,a._)("h3",C,(0,r.zw)(s.contentPart),1),(0,a._)("form",{onSubmit:t[4]||(t[4]=(0,i.iM)((()=>{}),["prevent"])),class:(0,r.C_)(["data-entry-fields",{"extra-styles-windowLogIn":s.windowLogIn}])},[s.windowLogIn?(0,a.kq)("",!0):(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,class:(0,r.C_)(["text-field",o.formDataConfirmation.nameData.class]),type:"text",placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=e=>o.userData.name=e)},null,2)),[[i.nr,o.userData.name,void 0,{lazy:!0}]]),s.windowLogIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",_,[(0,a.Wm)(c,{onPhoneNumber:t[1]||(t[1]=e=>o.userData.number=e),classForNumber:o.formDataConfirmation.numberData.class},null,8,["classForNumber"])])),(0,a._)("div",T,[o.formDataConfirmation.emailData.error?((0,a.wg)(),(0,a.iD)("label",O,(0,r.zw)(o.formDataConfirmation.emailData.error),1)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{name:"email",class:(0,r.C_)(["text-field",o.formDataConfirmation.emailData.class]),type:"text",placeholder:"E-mail","onUpdate:modelValue":t[2]||(t[2]=e=>o.userData.email=e)},null,2),[[i.nr,o.userData.email,void 0,{lazy:!0}]])]),(0,a._)("div",A,[o.formDataConfirmation.passwordData.error?((0,a.wg)(),(0,a.iD)("label",W,(0,r.zw)(o.formDataConfirmation.passwordData.error),1)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{name:"password",class:(0,r.C_)(["text-field",o.formDataConfirmation.passwordData.class]),type:"password",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=e=>o.userData.password=e)},null,2),[[i.nr,o.userData.password,void 0,{lazy:!0}]])]),(0,a.Wm)(u,{onClick:l.checkFormAndSubmit,contentPart:"SUBMIT"},null,8,["onClick"])],34),(0,a._)("div",null,[(0,a._)("a",{class:"link-to-another-window",onClick:t[5]||(t[5]=()=>e.$emit("openAnotherWindow",!0))},(0,r.zw)(s.linkFoкEach),1)])],2)}s(7658);var I=s(65);function x(e,t,s,i,r,n){const o=(0,a.up)("vue-tel-input",!0);return(0,a.wg)(),(0,a.j4)(o,(0,a.dG)(r.bindProps,{modelValue:r.number,"onUpdate:modelValue":t[0]||(t[0]=e=>r.number=e),modelModifiers:{lazy:!0},class:s.classForNumber}),null,16,["modelValue","class"])}var M=s(6020),P={components:{VueTelInput:M.a},props:{classForNumber:{type:String,default(){return""}}},watch:{number(){this.$emit("phoneNumber",this.number)}},computed:{},data(){return{number:"",bindProps:{maxLen:10,inputOptions:{showDialCode:!0},validCharactersOnly:!0,defaultCountry:"DE"}}},methods:{}};const q=(0,c.Z)(P,[["render",x]]);var F=q,U={components:{MyBtn:y,VueTelInput:F},props:{contentPart:{type:String},windowLogIn:{type:Boolean,default(){return!1}},"linkFoкEach":{type:String}},data(){return{formDataConfirmation:{emailData:"",passwordData:"",nameData:"",numberData:""},userData:{number:"",email:"",name:"",password:"",gameData:{snake:{games:0,apples:0,speed:0},ticTacToe:{botWon:0,userWon:0,draw:0}}}}},computed:{checkEmail(){const e=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return e.test(this.userData.email)?{class:"correct"}:{class:"in-correct"}},checkNumber(){return this.userData.number.length<=18&&this.userData.number.length>=10?{class:"correct"}:{class:"in-correct"}},checkName(){return this.userData.name.length>3&&this.userData.name.length<20?{class:"correct"}:{class:"in-correct"}},checkPassword(){const e=/[a-z]/g,t=/[A-Z]/g,s=/[0-9]/g,i=this.userData.password.length;return i<=8?{error:"must be at least 8 characters !",class:"in-correct"}:e.test(this.userData.password)?t.test(this.userData.password)?s.test(this.userData.password)?{class:"correct"}:{error:"must be at least one number !",class:"in-correct"}:{error:"must be at least one UpperCase letter !",class:"in-correct"}:{error:"must be at least one lowercase letter !",class:"in-correct"}}},methods:{...(0,I.OI)(["addUser","setCurrentUser"]),checkFormAndSubmit(){if(this.windowLogIn){let e=Object.keys(localStorage).find((e=>e===this.userData.email));if(void 0===e)this.formDataConfirmation.emailData={class:"in-correct",error:"in-correct email"};else if(JSON.parse(localStorage.getItem(e)).password!=this.userData.password)this.formDataConfirmation.passwordData={class:"in-correct",error:"in-correct password"},this.formDataConfirmation.emailData={class:"correct"};else{let t=JSON.parse(localStorage.getItem(e));localStorage.setItem("currentUser",JSON.stringify(t.name)),this.$router.push(`/${t.email}`)}}else{this.checkForm();let e=Object.values(this.formDataConfirmation).find((e=>"in-correct"===e.class)),t=Object.keys(localStorage).find((e=>e===this.userData.email));void 0===e&&void 0===t&&(this.userData.id=Date.now(),localStorage.setItem("currentUser",JSON.stringify(this.userData.name)),localStorage.setItem(this.userData.email,JSON.stringify(this.userData)),this.$router.push(`/${this.userData.email}`)),void 0!==t&&(this.formDataConfirmation.emailData={class:"in-correct",error:"this email already exists"})}},checkForm(){this.formDataConfirmation.emailData=this.checkEmail,this.formDataConfirmation.passwordData=this.checkPassword,this.formDataConfirmation.nameData=this.checkName,this.formDataConfirmation.numberData=this.checkNumber}}};const G=(0,c.Z)(U,[["render",S],["__scopeId","data-v-36dca406"]]);var z=G,E={components:{MyBtn:y,WindowsRegLog:z},data(){return{activeField:!1}},methods:{},mounted(){}};const N=(0,c.Z)(E,[["render",v],["__scopeId","data-v-585593a9"]]);var j=N;const B={class:"wrapper-home-page"},L={class:"top-bar"},$={class:"menu"},Z={class:"menu__user"},R={key:0,class:"active-game"},H={key:0,class:"active-game"},J={class:"test"},V={class:"wrapper-games"},K={class:"games"};function Y(e,t,s,n,o,l){const c=(0,a.up)("snake"),u=(0,a.up)("tic-tac-toy");return(0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("div",L,[(0,a._)("ul",$,[(0,a._)("li",Z,[(0,a.Uk)(" User "),(0,a._)("ul",null,[(0,a._)("li",null,"name: "+(0,r.zw)(this.user.name),1),(0,a._)("li",null,"password: "+(0,r.zw)(this.user.password),1),(0,a._)("li",null,"email: "+(0,r.zw)(this.user.email),1),(0,a._)("li",null,"number: "+(0,r.zw)(this.user.number),1)])]),(0,a._)("li",{class:"menu__snake",onClick:t[0]||(t[0]=e=>o.selectedGame=!0)},[(0,a.Wm)(i.uT,{name:"active-game"},{default:(0,a.w5)((()=>[o.selectedGame?((0,a.wg)(),(0,a.iD)("div",R)):(0,a.kq)("",!0)])),_:1}),(0,a.Uk)(" Snake "),(0,a._)("ul",null,[(0,a._)("li",null,"number of games: "+(0,r.zw)(o.user.gameData.snake.games),1),(0,a._)("li",null,"record of apples: "+(0,r.zw)(o.user.gameData.snake.apples),1),(0,a._)("li",null,"record of speed: "+(0,r.zw)(o.user.gameData.snake.speed),1)])]),(0,a._)("li",{class:"menu__tic-tac-toy",onClick:t[1]||(t[1]=e=>o.selectedGame=!1)},[(0,a.Wm)(i.uT,{name:"active-game"},{default:(0,a.w5)((()=>[o.selectedGame?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",H))])),_:1}),(0,a.Uk)(" Tic-Tac-Toy "),(0,a._)("ul",J,[(0,a._)("li",null,"number of draws: "+(0,r.zw)(o.user.gameData.ticTacToe.draw),1),(0,a._)("li",null,"number of loos: "+(0,r.zw)(o.user.gameData.ticTacToe.botWon),1),(0,a._)("li",null,"number of wins: "+(0,r.zw)(o.user.gameData.ticTacToe.userWon),1)])])]),(0,a._)("button",{class:"log-out",onClick:t[2]||(t[2]=(...e)=>l.logOut&&l.logOut(...e))},"Log-out")]),(0,a._)("div",V,[(0,a._)("div",K,[(0,a.Wm)(i.uT,{name:"snake"},{default:(0,a.w5)((()=>[o.selectedGame?((0,a.wg)(),(0,a.j4)(c,{key:0,class:"snake",onSnakeData:l.getResultSnake},null,8,["onSnakeData"])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(i.uT,{name:"tic-tac"},{default:(0,a.w5)((()=>[o.selectedGame?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(u,{key:0,class:"tic-tac",onTicTacData:l.getResultTicTac},null,8,["onTicTacData"]))])),_:1})])])])}const Q=e=>((0,a.dD)("data-v-54f860ea"),e=e(),(0,a.Cn)(),e),X={class:"wrapper"},ee={key:0,class:"wrapper-start-game"},te=Q((()=>(0,a._)("h2",{class:"header"},"SNAKE",-1))),se=Q((()=>(0,a._)("p",null,"Click below, if you want to play",-1))),ie=["tabindex"],ae={class:"game-information"},re={class:"speed"},ne={class:"appels"},oe={key:0,class:"arrows"},le={key:0,class:"wrapper-start-game finish-game"},ce=Q((()=>(0,a._)("h2",{class:"header"},"GAME OVER",-1))),ue=Q((()=>(0,a._)("p",null,"Click below, if you want to play",-1)));function he(e,t,s,n,o,l){const c=(0,a.up)("my-btn"),u=(0,a.up)("v-line"),h=(0,a.up)("v-layer"),d=(0,a.up)("v-circle"),m=(0,a.up)("v-stage");return(0,a.wg)(),(0,a.iD)("div",X,[(0,a.Wm)(i.uT,{name:"start-game"},{default:(0,a.w5)((()=>[o.start||o.gameOver?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",ee,[te,se,(0,a.Wm)(c,{onClick:l.startGame,contentPart:"Start Game",class:"btn"},null,8,["onClick"])]))])),_:1}),(0,a.Wm)(i.uT,{name:"game"},{default:(0,a.w5)((()=>[o.start&&!o.gameOver?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"snake-game",ref:"game",tabindex:o.tabInd,onKeydown:[t[0]||(t[0]=(0,i.D2)((0,i.iM)(((...e)=>l.choiceDirectionDown&&l.choiceDirectionDown(...e)),["prevent"]),["down"])),t[1]||(t[1]=(0,i.D2)((0,i.iM)(((...e)=>l.choiceDirectionUp&&l.choiceDirectionUp(...e)),["prevent"]),["up"])),t[2]||(t[2]=(0,i.D2)((0,i.iM)(((...e)=>l.choiceDirectionLeft&&l.choiceDirectionLeft(...e)),["prevent"]),["left"])),t[3]||(t[3]=(0,i.D2)((0,i.iM)(((...e)=>l.choiceDirectionRight&&l.choiceDirectionRight(...e)),["prevent"]),["right"]))]},[(0,a._)("div",ae,[(0,a._)("p",re,"Speed: "+(0,r.zw)(o.speed),1),(0,a._)("p",ne,"Apples: "+(0,r.zw)(o.apples),1)]),o.showExtraInf?((0,a.wg)(),(0,a.iD)("div",oe)):(0,a.kq)("",!0),(0,a.Wm)(m,{config:o.configKonva},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{config:o.snake},null,8,["config"])])),_:1}),(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{config:o.food},null,8,["config"])])),_:1})])),_:1},8,["config"])],40,ie)):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(i.uT,{name:"finish-game"},{default:(0,a.w5)((()=>[o.gameOver?((0,a.wg)(),(0,a.iD)("div",le,[ce,ue,(0,a.Wm)(c,{onClick:l.restartGame,contentPart:"Start Game",class:"btn"},null,8,["onClick"])])):(0,a.kq)("",!0)])),_:1})])}s(2262),s(4506);const de={components:{MyBtn:y},data(){return{showExtraInf:!0,actualDirection:{down:!1,right:!1,left:!1,up:!1},start:!1,stopTail:0,extraDirection:"down",constanta:0,interval:null,time:20,tabInd:0,speed:0,apples:0,showAnim:!1,gameOver:!1,bendPoint:{down:!0,right:!0,left:!0,up:!0},directionOfTravel:{down:!1,right:!1,left:!1,up:!1},configKonva:{width:420,height:420,fill:"red"},snake:{x:0,y:0,points:[165,165,225,165],stroke:"green",strokeWidth:30,lineCap:"round",lineJoin:"round"},food:{x:30*Math.floor(14*Math.random()+1)-15,y:30*Math.floor(14*Math.random()+1)-15,radius:15,fill:"red",stroke:"black",strokeWidth:1}}},computed:{iterationFinished(){return this.constanta%30==0},showAnimation(){return this.showAnim?"0.5s":""}},methods:{startGame(){this.start=!0,this.$nextTick((function(){this.$refs.game.focus()})),this.startMovement()},restartGame(){this.refreshData(),this.gameOver=!1,this.startGame()},refreshData(){this.snake.stroke="green",this.time=20,this.constanta=0,this.speed=0,this.apples=0,this.snake.points=[165,165,225,165],this.food.x=30*Math.floor(14*Math.random()+1)-15,this.food.y=30*Math.floor(14*Math.random()+1)-15,this.resetObjects(this.actualDirection,!1),this.resetObjects(this.bendPoint,!0),this.resetObjects(this.directionOfTravel,!1)},resetObjects(e,t){for(let s in e)e[s]=t},choiceDirectionDown(){this.actualDirection.up?this.directionOfTravel.down=!1:(this.directionOfTravel.left=!1,this.directionOfTravel.right=!1,this.directionOfTravel.down=!0,this.showExtraInf=!1,this.speed||(this.speed=10))},choiceDirectionUp(){this.actualDirection.down?this.directionOfTravel.up=!1:(this.directionOfTravel.left=!1,this.directionOfTravel.right=!1,this.directionOfTravel.up=!0,this.showExtraInf=!1,this.speed||(this.speed=10))},choiceDirectionLeft(){this.actualDirection.right?this.directionOfTravel.left=!1:(this.directionOfTravel.up=!1,this.directionOfTravel.down=!1,this.directionOfTravel.left=!0,this.showExtraInf=!1,this.speed||(this.speed=10))},choiceDirectionRight(){this.actualDirection.left?this.directionOfTravel.right=!1:(this.directionOfTravel.down=!1,this.directionOfTravel.up=!1,this.directionOfTravel.right=!0,this.showExtraInf=!1,this.speed||(this.speed=10))},startMovement(){let e=this;this.interval=setInterval((function(){e.actualDirection={...e.directionOfTravel},e.iterationFinished||(e.resetObjects(e.actualDirection,!1),e.actualDirection[e.extraDirection]=!0),e.actualDirection.up&&e.goUp(),e.actualDirection.down&&e.goDown(),e.actualDirection.left&&e.goLeft(),e.actualDirection.right&&e.goRight()}),e.time)},goDown(){0!=this.stopTail&&--this.stopTail;let e=[...this.snake.points],t={x:this.snake.points[this.snake.points.length-2],y:this.snake.points[this.snake.points.length-1]};this.bendPoint.down&&(e.splice(-2,0,t.x,t.y),this.stopAddBendPoint()),++e[e.length-1],0==this.stopTail&&this.tailFollowsBendPoint(e),this.snake.points=[...e],++this.constanta,this.extraDirection="down",this.eatFood(e),this.finishGame(e)},goUp(){0!=this.stopTail&&--this.stopTail;let e=[...this.snake.points],t={x:this.snake.points[this.snake.points.length-2],y:this.snake.points[this.snake.points.length-1]};this.bendPoint.up&&(e.splice(-2,0,t.x,t.y),this.stopAddBendPoint()),--e[e.length-1],0==this.stopTail&&this.tailFollowsBendPoint(e),this.snake.points=[...e],++this.constanta,this.extraDirection="up",this.eatFood(e),this.finishGame(e)},goLeft(){0!=this.stopTail&&--this.stopTail;let e=[...this.snake.points],t={x:this.snake.points[this.snake.points.length-2],y:this.snake.points[this.snake.points.length-1]};this.bendPoint.left&&(e.splice(-2,0,t.x,t.y),this.stopAddBendPoint()),--e[e.length-2],0==this.stopTail&&this.tailFollowsBendPoint(e),this.snake.points=[...e],++this.constanta,this.extraDirection="left",this.eatFood(e),this.finishGame(e)},goRight(){0!=this.stopTail&&--this.stopTail;let e=[...this.snake.points],t={x:this.snake.points[this.snake.points.length-2],y:this.snake.points[this.snake.points.length-1]};this.bendPoint.right&&(e.splice(-2,0,t.x,t.y),this.stopAddBendPoint()),++e[e.length-2],0==this.stopTail&&this.tailFollowsBendPoint(e),this.snake.points=[...e],++this.constanta,this.extraDirection="right",this.eatFood(e),this.finishGame(e)},updateDataAfterEating(){this.food.x=30*Math.floor(14*Math.random()+1)-15,this.food.y=30*Math.floor(14*Math.random()+1)-15,++this.apples,this.speed+=10,this.showAnim=!0,this.snake.stroke="rgb(9, 95, 255)",setTimeout((()=>this.showAnim=!1),500),setTimeout((()=>this.snake.stroke="green"),11*this.time),this.stopTail=30,clearInterval(this.interval),this.time*=.9,this.startMovement()},eatFood(e){this.food.y-15!=e.at(-1)&&this.food.y+15!=e.at(-1)||this.food.x!=e.at(-2)||this.updateDataAfterEating(),this.food.x-15!=e.at(-2)&&this.food.x+15!=e.at(-2)||this.food.y!=e.at(-1)||this.updateDataAfterEating()},gameOverFunc(){clearInterval(this.interval),this.snake.stroke="red",setTimeout((()=>this.gameOver=!0),1e3),this.$emit("snakeData",{apples:this.apples,speed:this.speed})},finishGame(e){let t=e.at(-2),s=e.at(-1);14!=t&&406!=t&&14!=s&&406!=s||this.gameOverFunc();let i=[...e];if(i.splice(-6,6),e.length>=10)for(let a=0;a<i.length;a++)a%2==0?(t<=i[a]&&t>=i[a+2]&&(s+28==i[a+1]||s-28==i[a+1])&&this.gameOverFunc(),t>=i[a]&&t<=i[a+2]&&(s+28==i[a+1]||s-28==i[a+1])&&this.gameOverFunc()):(s<=i[a]&&s>=i[a+2]&&(t+28==i[a-1]||t-28==i[a-1])&&this.gameOverFunc(),s>=i[a]&&s<=i[a+2]&&(t+28==i[a-1]||t-28==i[a-1])&&this.gameOverFunc())},tailFollowsBendPoint(e){e[0]==e[2]&&e[1]==e[3]&&e.splice(2,2);let t=e[0],s=e[1],i=e[2],a=e[3];t>i&&--e[0],t<i&&++e[0],s>a&&--e[1],s<a&&++e[1]},stopAddBendPoint(){for(let e in this.directionOfTravel)this.directionOfTravel[e]?this.bendPoint[e]=!1:this.bendPoint[e]=!0}},mounted(){}},me=()=>{(0,i.sj)((e=>({"17809e6a":e.showAnimation})))},pe=de.setup;de.setup=pe?(e,t)=>(me(),pe(e,t)):me;var fe=de;const we=(0,c.Z)(fe,[["render",he],["__scopeId","data-v-54f860ea"]]);var ge=we;const ve=e=>((0,a.dD)("data-v-ce5ea884"),e=e(),(0,a.Cn)(),e),De={class:"wrapper-game"},ke={key:0,class:"wrapper-start-game"},be=ve((()=>(0,a._)("h2",{class:"header"},"TIC-TAC-TOE",-1))),ye=ve((()=>(0,a._)("p",null,"Click below, if you want to play",-1))),Ce={key:0,class:"wrapper-choose-option"},_e=ve((()=>(0,a._)("p",null,"choose what you want to play",-1))),Te=["onClick"],Oe={key:0,class:"active-square-cross"},Ae={key:0,class:"active-square-circle"},We={key:0,class:"winner"},Se={key:0,class:"winner__extra-inf"},Ie=ve((()=>(0,a._)("br",null,null,-1))),xe={class:"winner__name"};function Me(e,t,s,n,o,l){const c=(0,a.up)("my-btn");return(0,a.wg)(),(0,a.iD)("div",De,[(0,a.Wm)(i.uT,{name:"start-game"},{default:(0,a.w5)((()=>[o.startGame?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",ke,[be,ye,(0,a.Wm)(c,{onClick:t[0]||(t[0]=e=>o.startGame=!0),contentPart:"Start Game",class:"btn"})]))])),_:1}),(0,a.Wm)(i.uT,{name:"start-game"},{default:(0,a.w5)((()=>[o.activeClass?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Ce,[_e,(0,a._)("button",{class:"btn",onClick:t[1]||(t[1]=(...e)=>l.activeClassCross&&l.activeClassCross(...e))},"cross"),(0,a._)("button",{class:"btn",onClick:t[2]||(t[2]=(...e)=>l.activeClassCircle&&l.activeClassCircle(...e))},"circle")]))])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.dataDuringGame,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"passive-square",key:e.id,onClick:t=>l.activeSquareId(e.id)},[(0,a.Wm)(i.uT,{name:"appearance"},{default:(0,a.w5)((()=>[e.filledCross?((0,a.wg)(),(0,a.iD)("div",Oe)):(0,a.kq)("",!0)])),_:2},1024),(0,a.Wm)(i.uT,{name:"appearance-delay"},{default:(0,a.w5)((()=>[e.filledCircle?((0,a.wg)(),(0,a.iD)("div",Ae)):(0,a.kq)("",!0)])),_:2},1024)],8,Te)))),128)),(0,a.Wm)(i.uT,{name:"show-winner"},{default:(0,a.w5)((()=>[o.winner?((0,a.wg)(),(0,a.iD)("div",We,["user"===o.winner&&1===o.numberOfUserWins?((0,a.wg)(),(0,a.iD)("p",Se,[(0,a.Uk)(" Now the bot has remembered your winning combination, and will not make this mistake!!! "),Ie,(0,a.Uk)("This logic will continue in the future, you can only win 8 times. ")])):(0,a.kq)("",!0),(0,a._)("p",xe,"Winner : "+(0,r.zw)(o.winner),1),(0,a.Wm)(c,{class:"my-btn",contentPart:"CONTINUE GAME",onClick:l.continueGame},null,8,["onClick"])])):(0,a.kq)("",!0)])),_:1})])}var Pe=s(3494),qe={components:{MyBtn:y},data(){return{startGame:!1,activeClass:"",currentId:null,squareData:[],userAnswers:[],userWinHistory:[],botAnswers:[],correctAnswers:[],winner:"",historyOfWinners:"",numberOfUserWins:0}},computed:{dataDuringGame(){if(null===this.currentId)return this.squareData;let e=this.squareData.map((e=>(e.id===this.currentId&&("active-square-cross"===this.activeClass&&(e.filledCross=!0),"active-square-circle"===this.activeClass&&(e.filledCircle=!0)),e))),t=this.botMove(e);return this.winner=this.determineWinner(),"user"===this.winner&&(this.userWinToSave(),++this.numberOfUserWins,this.historyOfWinners="user"),this.winner,t}},methods:{createSquareData(){for(let e=0;e<9;e++)this.squareData.push({id:e,filledCross:!1,filledCircle:!1})},activeSquareId(e){let t=this.botAnswers.includes(e)||this.userAnswers.includes(e);t||(this.currentId=e,this.userAnswers.push(e))},continueGame(){this.currentId=null,this.userAnswers=[],this.botAnswers=[],this.winner="",this.squareData.map((e=>(e.filledCross=!1,e.filledCircle=!1,e)))},activeClassCross(){this.activeClass="active-square-cross"},activeClassCircle(){this.activeClass="active-square-circle"},botMove(e){let t=e.filter((e=>e.filledCircle||e.filledCross)),s=[];for(let a=0;a<9;a++){let e=t.find((e=>e.id===a));e||s.push(a)}let i=s[Math.floor(Math.random()*s.length)];if(void 0===i)return e;if("user"===this.historyOfWinners&&this.userAnswers.length>=1){let e=this.improveBot();"number"==typeof e&&(i=e)}return this.botAnswers.push(i),"active-square-cross"===this.activeClass?e[i].filledCircle=!0:e[i].filledCross=!0,e},createCorrectAnswers(){let e=[];for(let t=0;t<=6;t+=3){for(let s=t;s<t+3;s++)e.push(s);this.correctAnswers.push(e),e=[]}for(let t=0;t<3;t++){for(let s=t;s<9;s+=3)e.push(s);this.correctAnswers.push(e),e=[]}for(let t=0;t<9;t+=4)e.push(t);this.correctAnswers.push(e),e=[];for(let t=2;t<=6;t+=2)e.push(t);this.correctAnswers.push(e)},sentData(e,t){this.$emit(e,t)},determineWinner(){let e=0,t=0;for(let s=0;s<this.correctAnswers.length;s++)if(e=this.userAnswers.reduce(((e,t)=>this.correctAnswers[s].includes(t)?++e:e),0),3===e)return this.sentData("ticTacData",!0),"user";for(let s=0;s<this.correctAnswers.length;s++)if(t=this.botAnswers.reduce(((e,t)=>this.correctAnswers[s].includes(t)?++e:e),0),3===t)return this.sentData("ticTacData",!1),"bot";if(9===[...this.userAnswers,...this.botAnswers].length)return this.sentData("ticTacData",0),"draw"},improveBot(){if(this.botAnswers.length>=2){let e=this.botWinningCombination();if("number"==typeof e)return e}if(this.userAnswers.length>=2){let e=this.avoidLoss();if("number"==typeof e)return e}return this.userWinHistory.length>3?this.avoidLossExtra():null},botWinningCombination(){for(let e=0;e<this.correctAnswers.length;e++){let t=this.correctAnswers[e].find((e=>this.userAnswers.includes(e)));if("number"==typeof t)continue;let s=this.botAnswers.reduce(((t,s)=>this.correctAnswers[e].includes(s)?++t:t),0);if(s>=2)return this.correctAnswers[e].find((e=>!this.botAnswers.includes(e)))}},avoidLoss(){for(let e=0;e<this.userWinHistory.length;e++){let t=this.userAnswers.reduce(((t,s)=>this.userWinHistory[e].includes(s)?++t:t),0);if(t>=2){let t=this.userWinHistory[e].find((e=>this.botAnswers.includes(e)));if("number"==typeof t)continue;return this.userWinHistory[e].find((e=>!this.userAnswers.includes(e)))}}},userWinToSave(){for(let e=0;e<this.correctAnswers.length;e++){let t=this.correctAnswers[e].reduce(((e,t)=>this.userAnswers.includes(t)?++e:e),0);3===t&&this.userWinHistory.push(this.correctAnswers[e])}},avoidLossExtra(){const e=[0,2,6,8];if(0===this.botAnswers.length)return 4!=this.userAnswers[0]?4:e[Math.floor(Math.random()*e.length)];if(1===this.botAnswers.length){if(4===this.botAnswers[0])return null;{let t=e.filter((e=>![...this.userAnswers,...this.botAnswers].includes(e)));return t[Math.floor(Math.random()*t.length)]}}}},mounted(){this.createSquareData(),this.createCorrectAnswers()}};const Fe=(0,c.Z)(qe,[["render",Me],["__scopeId","data-v-ce5ea884"]]);var Ue=Fe,Ge={components:{MyBtn:y,Snake:ge,TicTacToy:Ue},data(){return{selectedGame:!1,user:null}},computed:{...(0,I.OI)(["setCurrentUser"])},methods:{logOut(){localStorage.removeItem("currentUser"),this.$router.push("/login")},getResultSnake({apples:e,speed:t}){this.user.gameData.snake.apples<e&&(this.user.gameData.snake.apples=e,this.user.gameData.snake.speed=t),++this.user.gameData.snake.games,localStorage.setItem(this.user.email,JSON.stringify(this.user))},getResultTicTac(e){0===e&&++this.user.gameData.ticTacToe.draw,e&&++this.user.gameData.ticTacToe.userWon,!1===e&&++this.user.gameData.ticTacToe.botWon,localStorage.setItem(this.user.email,JSON.stringify(this.user))},getCurrentUser(e){let t=Object.keys(localStorage).find((t=>t==e));this.user=JSON.parse(localStorage.getItem(t))}},created(){this.getCurrentUser(this.$route.params.email)},mounted(){localStorage.getItem("currentUser")||this.$router.push("/login")},beforeUnmount(){localStorage.getItem("currentUser")&&this.$router.forward()}};const ze=(0,c.Z)(Ge,[["render",Y],["__scopeId","data-v-115c2621"]]);var Ee=ze;const Ne=[{path:"/",redirect:{path:"/login"}},{path:"/login",name:"login",component:j},{path:"/:email",name:"home",component:Ee}],je=(0,m.p7)({history:(0,m.r5)("/games/"),routes:Ne});var Be=je,Le=(0,I.MT)({state:{currentUser:null},getters:{},mutations:{setCurrentUser(e,t){e.currentUser=t}},actions:{},modules:{}}),$e=s(7749),Ze=s(8539),Re=s(3571),He=s.n(Re);Pe.vI.add(Ze.BC0),(0,i.ri)(h).use(Le).use(Be).use(M.Z).use(He()).component("font-awesome-icon",$e.GN).mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,r){if(!i){var n=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],r=e[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(o=!1,r<n&&(n=r));if(o){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,a,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,n=i[0],o=i[1],l=i[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var u=l(s)}for(t&&t(i);c<n.length;c++)r=n[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},i=self["webpackChunkwindow_red"]=self["webpackChunkwindow_red"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(5008)}));i=s.O(i)})();
//# sourceMappingURL=app.a51255ce.js.map