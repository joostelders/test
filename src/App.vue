<template>
  <div id="app">
    <test-component :content="content" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TestComponent from "./components/TestComponent.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      content: "",
    };
  },
  components: {
    TestComponent,
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
