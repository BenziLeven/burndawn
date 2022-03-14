<template>
  <div class="default-layout">
    <SidePanel class="side-panel" />
    <div class="page-body">
      <nuxt />
    </div>
  </div>
</template>

<script>
import SidePanel from "@/components/navigation/SidePanel"
export default {
  name: "DefaultLayout",
  components: {
    SidePanel
  }
}
</script>

<style scoped lang="scss">

.default-layout {
  width: 100%;
  height: 100%;

  min-height: 100vh;
  padding-left: $side-panel-width-collapsed;

  background-color: #00716f;

  color: $color-lime;
}
</style>

<style>
body {
  margin: 0;
}
</style>
