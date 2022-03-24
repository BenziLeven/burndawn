<template>
  <NavMenuItem
    :menu-items="menuItems"
    :is-expanded="isExpanded"
  />
</template>

<script lang="ts">
import Vue from "vue"
import { MENU_ITEMS } from "~/content/navigation"
import NavMenuItem from "~/components/navigation/NavMenuItem.vue"

export default Vue.extend({
  name: "NavMenu",
  components: {
    NavMenuItem
  },
  props: {
    isExpanded: Boolean
  },
  data () {
    return {
      menuItems: MENU_ITEMS
    }
  }
})
</script>
