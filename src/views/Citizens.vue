<template>
  <div class="app">
    <div class="container">
    <table class="table-responsive bordered highlight centered hoverable z-depth-2">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in persons" :key="index">
          <td>{{index+1}}</td>
          <td>
            {{person.FirstName}}
          </td>
          <td>
            {{person.LastName}}
          </td>
          <td>
            {{person.age}} years
          </td>
          <td>
            {{person.gender}}
          </td>
          <td>
            {{person.Country}}
          </td>
          <td>
            {{person.Province}}
          </td>
          <td style="width: 18%;">
            <a class="btn waves-effect waves-light red darken-2" @click="archive(index)"><i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table-responsive centered bordered striped highlight z-depth-1 hoverable" v-show="bin.length">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in bin" :key="index">
          <td>{{index+1}}</td>
          <td>
            {{person.FirstName}}
          </td>
          <td>
            {{person.LastName}}
          </td>
          <td>
            {{person.age}} years
          </td>
          <td>
            {{person.gender}}
          </td>
          <td>
            {{person.Country}}
          </td>
          <td>
            {{person.Province}}
          </td>
          <td>
            <a href="#!" @click="restore(index)" class="btn waves-effect waves-light blue darken-2"><i class="material-icons">restore</i>
            </a>
            <a href="#!" @click="deleteCitizen(index)" class="btn waves-effect waves-light red darken-2"><i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import App from "../index.js";
export default {
  data(){
    return {
      citizenId:this.$route.params.id,
      columns: ['Id', 'First Name', 'Last Name', 'Age', 'Gender', 'Country', 'Province', 'Actions '],
      persons: [],
      bin: [],
      LastName: "",
      FirstName: "",
      age: 0,
      gender: "",
      Country: "",
      Province: "",
      editInput: {
        fname: "",
        lname: "",
        age: 0,
        gender: "",
        Country: "",
        Province:""
      },
      }
  },
  mounted() {
    setTimeout(async () => {
     this.persons = await App.readCitizen();
    }, 1000);
  },
   methods: {
    async deleteCitizen(index) {
      await App.deleteCitizen(index);
      this.bin.splice(index, 1);
      console.log("deleted");
    },
    restore: function(index) {
      this.persons.push(this.bin[index]);
      this.bin.splice(index, 1);
    },
    archive: function(index) {
      this.bin.push(this.persons[index]);
      this.persons.splice(index, 1);
    },
   },
}
</script>

<style>
.container{
  margin: 5px auto;
}
div:first-child table:first-of-type {
  margin: 15px 2px;
  background: #ffffff !important;
}
div:first-child table:last-of-type {
  margin: 15px 2px;
  background: #fdfdef !important;
}
</style>