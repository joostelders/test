<template>
  <div id="app">
    <test-item :content="content" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TestItem from "./components/TestItem.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      content: "",
    };
  },
  beforeMount() {
    // this.content = "";
    // fetch("http://core.local.com/v0.1/content/values/5db1bf93923279601c6a37f7")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.content = data.result[0].value;
    //   });
  },
  components: {
    TestItem,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background: #efefef;
  padding: 4px 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
}
</style>
