<template>
  <button>Log In</button>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "LoginButton"
})
</script>

<style scoped lang="scss">
 button {
   width: 100%;
   margin: 8px auto;

   background-color: $color-blue_green;
   color: white;

   outline: none;

   &:hover {
     background-color: #163A39FF;
   }
 }
</style>
