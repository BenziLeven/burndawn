<template>
  <div class="test">
    <div v-for="item in menuItems" :key="`${item.name}`" class="item">
      <div class="item-label">
        {{ item.label }}-{{ item.to }}
      </div>
      <div v-if="hasChildren(item)" class="sub-elements">
        <NavMenuItem :menu-items="item.children" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue"
import type { MenuItem } from "~/types/navigation"

export default Vue.extend({
  name: "NavMenuItem",
  props: {
    menuItems: {
      type: Array,
      required: true
    }as PropOptions<MenuItem[]>
  },
  methods: {
    hasChildren (item:MenuItem):Boolean {
      if ("children" in item) {
        return !!item.children?.length
      }
      return false
    }
  }
})
</script>

<style scoped lang="scss">
.test {
  width: 100%;
  border: solid 1px blue;

  .item {
    border: solid 1px black;

    .item-label {
      font-size: 16px;

      height: 40px;

      background-color: #ffffff11;

      &:hover {
        background-color: #ffffff33;

        cursor: pointer;
      }
    }
  }

  .sub-elements {
    padding-left: 8px;
  }
}
</style>
