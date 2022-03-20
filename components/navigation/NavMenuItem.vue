<template>
  <div class="test">
    test
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue"
import type { MenuItem } from "./SidePanel"
export default Vue.extend({
  name: "NavMenuItem",
  props: {
    menuItems: {
      type: Object,
      required: true
    }as PropOptions<MenuItem>
  }
})
</script>

<!--<style scoped>-->

<!--</style>-->
