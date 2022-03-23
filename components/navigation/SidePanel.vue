<template>
  <div class="side-panel">
    <div class="logo">
      LOGO
    </div>
    <NavMenuItem :menu-items="menuItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import NavMenuItem from "./NavMenuItem.vue"

import { MENU_ITEMS } from "~/content/navigation"

export default Vue.extend({
  name: "SidePanel",
  components: { NavMenuItem },
  data () {
    return {
      menuItems: MENU_ITEMS
    }
  }
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
