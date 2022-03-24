<template>
  <div class="nav-menu-items">
    <div v-for="item in menuItems" :key="`${item.label}`" class="item">
      <NuxtLink
        v-if="item.to"
        class="item-label"
        :to="item.to"
      >
        <SvgIcon :name="item.iconName" class="item-icon" />
        <span v-if="isExpanded">{{ item.label }}</span>
      </NuxtLink>
      <div
        v-else
        class="item-label"
      >
        <SvgIcon :name="item.iconName" class="item-icon" />
        <span v-if="isExpanded">{{ item.label }}</span>
      </div>
      <div v-if="item.children && item.children.length" class="sub-elements">
        <NavMenuItem :menu-items="item.children" :is-expanded="isExpanded" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue"
import type { MenuItem } from "~/types/navigation"
import SvgIcon from "~/components/generic/SvgIcon.vue"

export default Vue.extend({
  name: "NavMenuItem",
  components: { SvgIcon },
  props: {
    menuItems: {
      type: Array,
      required: true
    }as PropOptions<MenuItem[]>,
    isExpanded: Boolean
  }
})
</script>

<style scoped lang="scss">
.nav-menu-items {
  min-width: 100%;
  border-top: solid 1px rgba(#eeeeee, .5);

  .item {
    &:not(:first-child) {
      border-top: solid 1px rgba(#eeeeee, .5);
    }

    width: 100%;

    a.item-label {
      color: #ADC606;
      text-decoration: none;
      width: 100%;

    }
    .item-label {
      display: flex;
      align-items: center;
      font-size: 16px;
      height: 40px;
      width: 100%;
      background-color: #ffffff11;

      &:hover {
        background-color: #ffffff33;

        cursor: pointer;
      }

      .item-icon {
        margin: 0 4px;
        width: 32px;
        height: 32px;
        fill: $color-lime;

        background-color: red;
        border-radius: 4px;
        padding: 1px;
      }
    }
  }

  .sub-elements {
    padding-left: 8px;
  }
}
</style>
