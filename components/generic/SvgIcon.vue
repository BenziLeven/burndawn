<template>
  <Component :is="svgInline" />
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
      validator (name: string): boolean {
        return [
          "house"
        ].includes(name)
      }
    }
  },
  computed: {
    svgInline () {
      return require(`~/assets/icons/${this.name}.svg?inline`)
    }
  }
})
</script>
