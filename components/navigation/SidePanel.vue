<template>
  <div class="side-panel" @mouseover="onMouseOver" @mouseout="onMouseOut">
    <div class="logo">
      LOGO
    </div>
    <NavMenu :is-expanded="isExpanded" />
    <LoginButton v-if="! isUserLoggedIn" />
    <LogoutButton v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import NavMenu from "./NavMenu.vue"
import LoginButton from "./LoginButton.vue"
import LogoutButton from "./LogoutButton.vue"

export default Vue.extend({
  name: "SidePanel",
  components: { NavMenu, LoginButton, LogoutButton },
  data () {
    return {
      isExpanded: false,
      isUserLoggedIn: true
    }
  },
  methods: {
    onMouseOver () {
      this.isExpanded = true
    },
    onMouseOut () {
      this.isExpanded = false
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
  padding: 4px;

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
