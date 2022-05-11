<template>
  <div id="app">
      <headerof-page/>
      <router-view/>
  </div>
</template>

<script>
import HeaderofPage from './components/Header.vue'
export default {
  name: 'App',
  components: {
    HeaderofPage
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;

  background-size: cover;
  background-position: bottom;
}

body{
  background-color: #FCFEFE;
}
.container{
  color: #66BFBF;
}
.v-text-field>.v-input__control>.v-input__slot {
    cursor: text;
    width: 50%;
    align-self: center;
    padding-top: 20px;
}
.v-card__title {
  padding-left:200px;
  padding-right:200px;
}

.v-card{
  padding-bottom: 20px;
  padding-top:20px;
}

.theme--light.v-card {
  background-color: #EAF6F6;;
}

.theme--light.v-btn.v-btn--has-bg{
  background-color: #F76B8A;
}
.v-toolbar{
  color:white;
}
</style>
