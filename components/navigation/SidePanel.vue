<template>
  <div class="side-panel">
    <div class="logo">
      LOGO
    </div>
    <NavMenuItem />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import NavMenuItem from "@/components/navigation/NavMenuItem"

export type MenuItem = {
  label: string,
  to: string,
  children?: MenuItem[]
}

export default Vue.extend({
  name: "SidePanel",
  components: { NavMenuItem },
  data () {
    const menuItems: MenuItem[] = [
      { label: "Test1", to: "/test1" },
      { label: "Test2", to: "/test2" },
      {
        label: "Test3",
        to: "/test3",
        children: [
          { label: "Test1", to: "/test1" },
          { label: "Test2", to: "/test2" }
        ]
      }
    ]
    return {
      menuItems
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
