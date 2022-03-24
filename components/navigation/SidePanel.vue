<template>
  <div class="side-panel">
    <div class="logo">
      LOGO
    </div>
    <NavMenu />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import NavMenu from "./NavMenu.vue"

export default Vue.extend({
  name: "SidePanel",
  components: { NavMenu }
})
</script>

<style scoped lang="scss">
.side-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;

  height: 100%;
  width: $side-panel-width-collapsed;

  transition: width .3s ease;

  background: #919467;
  overflow: hidden;

  &:hover {
   width: $side-panel-width-open;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    font-size: 34px;

    border: solid 1px red;
    height: 80px;
  }
}
</style>
