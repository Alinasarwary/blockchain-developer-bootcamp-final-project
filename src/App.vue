<template>
    <div id="app">
        <div class="content">
            <div class="welcome">Welcome to</div><br>
            <h1>Citizen Land</h1>
            
        </div>
        <div class="shade"></div>
        

        <!-- <router-link to="/add">addCitizen</router-link> -->
        <router-view/>
        
        <navbar></navbar>
    </div>
</template>

<script>
import navbar from "./components/navbar.vue"
export default {
  components:{
    navbar:navbar
  }
};
</script>
<style>

#app {
	background: linear-gradient(-60deg, #054f7d, #00a7cf, #efe348, #861a54, #e42289);
	background-size: 400% 400%;
	animation: gradient 20s ease-in-out infinite;
  display: flex;
	height: 100vh;
}

@keyframes gradient {
	  0%{background-position: 0 0;}
    25% {background-position: 50% 0;}
    50% {background-position: 90% 0;}
    60% {background-position: 60%;}
    75% {background-position: 40%;}
    100%  {background-position: 0 0;}
}
#app{
  overflow: hidden;
  display: block;
  height: 900px;
  position: relative;
}
.content{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
}
h1{
  font-family: "Alex Brush";
  font-size: 7em;
  text-shadow: 5px 4px 7px rgba(0, 0, 0, 0.4);
  color: #fff;
}
.welcome{
  font-family: Merienda;
  font-size: 2em;
  color: #fff;
  display: block;
}
.shade {
  position: absolute;
  z-index: -1;
  background: -webkit-linear-gradient(top, rgba(16, 61, 133, 0.6), rgba(69, 31, 73, 0.8) 62%, rgba(91, 41, 17, 0.4) 99%);
  background-image: linear-gradient(180deg, rgba(16, 61, 133, 0.6), rgba(69, 31, 73, 0.8) 62%, rgba(91, 41, 17, 0.4) 99%);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}



</style>
