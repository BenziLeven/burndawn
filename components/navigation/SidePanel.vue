<template>
  <div class="side-panel">
    side panel
  </div>
</template>

<script>
export default {
  name: "SidePanel"
}
</script>

<style scoped lang="scss">
.side-panel {
  position: absolute;
  left: 0;

  height: 100%;
  width: $side-panel-width-collapsed;

  transition: width .3s ease;

  background: #919467;

&:hover {
   width: $side-panel-width-open;
 }
}
</style>
