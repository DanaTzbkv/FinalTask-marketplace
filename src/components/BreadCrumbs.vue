<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumbs">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
        <router-link v-if="item.href" :to="item.href">{{
          item.text
        }}</router-link>
        <span v-else>{{ item.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  .breadcrumb-item {
    color: $dark-grey-color;
    font-size: 12px;
    transition: color 0.3s ease, transform 0.3s ease;
    position: relative;
    display: inline-block;

    a {
      text-decoration: none;
    }

    &:not(:last-child)::after {
      content: " • ";
      padding: 0 8px;
    }

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      color: $dark-grey-color;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
