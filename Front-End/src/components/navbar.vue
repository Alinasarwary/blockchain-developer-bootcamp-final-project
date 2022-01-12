<template>
  <div class="navbar">
    <div class="colum">
        <div class="home " >
          <i class="lni-home size-md" :class=" 'lni-tada-effect'" id="home" @click="showHome = !showHome"></i>
          <a href="/"><h6 style="margin-top: 12px; color: #ffff;">  Home </h6></a>
        </div>

      <div class="register">
        <i class="lni-check-mark-circle size-md " :class="'lni-tada-effect'" id="check" @click="showCheck = !showCheck"></i>
        <a href="/add"><h6 style="margin-top: 10px; color: #ffff; margin-left:4px;"> Registration </h6></a>
      </div>

      <div class="user" >
        <i class="lni-user size-md " :class="'lni-tada-effect'"  id="user" @click="showUser = !showUser"></i>
        <a href="/all"><h6 style="margin-top: 10px; color: #ffff;"> Citizens </h6></a>
      </div>

       <!-- <div class="about" >
        <i class="lni-information size-md " :class="'lni-tada-effect'" id="about" @click="showAbout = !showAbout"></i>
        <a href="/about" class="clicked"><h6 style="margin-top: 10px; color: #ffff; margin-left:4px;"> About </h6></a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showHome: false,
            showCheck: false,
            showUser: false,
            showAbout: false,
            effect: 'lni-tada-effect'
        }
    }
}
</script>

<style>
.navbar{
  width: 100%;
  height: 60px;
  background-color: #192a56;
  bottom: 0%;
  position: fixed;
  box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
  border-radius:10px;
  display: flex;
}
#home, #check, #user, #about{
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
.colum{
  display: flex;
  width: 95%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  
}
.home, .user, .about{
  width: 80px;
  height: 34px;
  margin-left: 55px;
  display: flex;
}
.register{
   width: 80px;
  height: 34px;
  margin-left: 55px;
  display: flex;
  margin-right: 15px;
}
i:active{
  width: 100px;
  height: 38px;
  background-color: #feca57;
  border-radius: 10px;
  transition: background-color 0.3s, border-radius 0.5s, width 0.5s;
}
</style>