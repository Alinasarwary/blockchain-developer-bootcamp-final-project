<template>  
    <div class="card card-1" data-app>
     <div class="box form">
      <h3> Register</h3><br><br> 
        <v-row>
          <v-col col="6" sm="5" >
            <div>
              <input type="text" v-model="Id" id="" required placeholder=" ">
              <label>id </label>
            </div>
          </v-col>  
        </v-row>

        <v-row> 
          <v-col col="6" sm="5" >
            <div>
              <input type="text" v-model="firstName" id="name" required placeholder=" ">
              <label>FirstName </label>
            </div>
          </v-col>
          <v-col sm="1"></v-col>
          <v-col col="6" sm="5" >
            <div>
              <input v-model="lastName" name="" required placeholder=" "/>
              <label>LastName </label>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col col="6" sm ="5">
            <div>
              <!-- <v-select v-model="gender"
                  :items = "items"
                  class="select"
                  /> -->
              <v-select
                v-model="gender"
                :items="items"
                chips
                class="select"
              >
              </v-select>
              <label>Gender</label>
            </div>
          </v-col>
          <v-col sm="1"></v-col>
          <v-col col="6" sm ="5">
            <div>
              <input type="text" name="" required placeholder=" " v-model="age">
              <label>Age</label>
            </div>
          </v-col>
        </v-row>


        <v-row>
          <v-col sm="5" col="6">
            <div>
              <input type="text" name="" required placeholder=" " v-model="country">
              <label>Country</label>
            </div>
          </v-col>
          <v-col sm="1"></v-col>
          <v-col sm="5" col="6">
            <div>
              <input type="text" name="" required placeholder=" " v-model="province">
              <label>province</label>
            </div>
          </v-col>
        </v-row>

        <v-btn id="submit" @click="saveCitizen()">Save</v-btn>
     </div>
    </div>
</template>

<script>
import indexJs from "../index.js";


// import api from "../api/CitizenAPI";
export default {
    data(){
        return{
            Id: null,
            firstName: null,
            lastName: null,
            country: null,
            province: null,
            age: null,
            gender: null,
            items : ["Fmale", "Male"]
        }
    },
    methods: {
        async saveCitizen() {
        let info = {
            citizenId: this.Id,
            FirstName: this.firstName,
            LastName: this.lastName,
            Country: this.country,
            Province: this.province,
            age: this.age,
            gender: this.gender
        }
        let saved = await indexJs.createCitizen(info.citizenId, info.FirstName, info.LastName, info.Country, info.Province, info.age, info.gender)
        .then(()=> {
          setTimeout(() => {
            this.$router.push({name: "Citizens"})
          }, 2000);
        })
        
        
        console.log(saved);
        
        this.Id = null;
        this.lastName = null;
        this.firstName = null;
        this.country = null;
        this.province = null;
        this.age = null;
        this.gender = null;
   }
  },

}
</script>

<style lang="scss" scoped>
body {
  text-align: center;
}

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 50%;
  margin: 0rem  1rem 1rem 1rem;
  position: relative;
  width: 50%;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  transition: all 1s;
  text-decoration: none;
}

html, body{
	font-family: 'Open Sans Condensed', sans-serif;
	letter-spacing: 0.2em;
	font-size: 0.98em;  
  /*min-height: 100%;*/
} 

/* === Wrapper  ===*/
.wrapper{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav-bar"
    "box"
    "footer";
}

/* ===form ===*/ 
.box{
    grid-area: box;
    position: absolute;
    top:  100%;
    width: 600px;
    background-color: #FFF;
    padding: 40px;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,.1);
    /* box-shadow: 0 30px 20px rgba(0,0,0,.2); */
    box-shadow: 0 3px 60px rgba(57,73,76,0.35);
  
}

.box h2{
	margin: 0 0 40px;
	padding: 0;
	color: #222;
	text-transform: uppercase;
	text-align: center;
}

.box input{
	padding: 10px 0;
	margin-bottom: 30px;
}

.box input {
	width: 100%;
	box-sizing: border-box;
	box-shadow: none;
	outline: none;
	border: none;
	border-bottom: 2px solid #999;
}

#submit{
  font-size: 1.1em;
	border: none;
	cursor: pointer;
  background: linear-gradient(-60deg, #f3b7f5, #b145cc, #d17ee6);
	animation: gradient 20s ease-in-out infinite;
  outline: none;
	color: #FFF;
	margin-bottom: 0;
	text-transform: uppercase;
  width: 50%;
}

@keyframes gradient {
	  0%{background-position: 0 0;}
    50% {background-position: 50% 0;}
    100%  {background-position: 0 0;}
}

.form div{
	position: relative;
}

.form div label {
	position: absolute;
	top: 10px;
	left: 0;
	color: #999;
	pointer-events: none;
	transition: .5s;
}

.box input:focus ~ label, .box textarea:focus ~ label, 
.box input:valid ~ label, .box textarea:valid ~ label {
	top: -12px;
	left: 0;
  color: #37a000;
	font-size: 1em;
	font-weight: bold;
}

.box input:focus ~ label, .box textarea:focus ~ label, 
.box input:valid, .box textarea:valid {
  border-bottom: 2px solid #37a000;
}

v-select:focus ~ label,
v-select:valid ~ label {
	top: -12px;
	left: 0;
  color: #37a000;
	font-size: 1em;
	font-weight: bold;
}

v-select:focus ~ label,
v-select:valid ~ label{
  border-bottom: 2px solid #37a000;
}
</style>