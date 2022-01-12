<template>
  <v-container>
    <div>
      <registrationForm></registrationForm>
    </div>
  </v-container>
</template>

<script>
import registrationForm from "../components/Form.vue";
export default {
  components: {
    registrationForm
  }
}
</script>

<style>

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

</style>
