<template>
  <div class="test">
    <div v-for="item in menuItems" :key="`${item.label}`" class="item">
      <NuxtLink
        v-if="item.to"
        class="item-label"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>
      <div
        v-else
        class="item-label"
      >
        {{ item.label }}
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
  border-top: solid 1px rgba(#eeeeee, .5);

  .item {
    &:not(:first-child) {
      border-top: solid 1px rgba(#eeeeee, .5);
    }

    width: 100%;

    a.item-label {
      display: block;
      color: #ADC606;
      text-decoration: none;
      width: 100%;

    }
    .item-label {
      font-size: 16px;
      height: 40px;
      width: 100%;
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
