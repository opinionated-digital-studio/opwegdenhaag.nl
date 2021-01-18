<template>
  <ul class="ow-news-list">
    <li v-for="item in newsItems" :key="item.id" class="ow-news-list__item">
      <g-link :to="item.path" class="ow-news-list__link">
        <div class="ow-news-list__date ow-type__pretitle">{{item.date}}</div>
        <h2 class="ow-news-list__title">{{ item.title }}</h2>
      </g-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.ow-news-list {
  list-style: none;
  padding: 0;

  &__item {
    border-top: 1px solid $black;

    &:last-child {
      border-bottom: 1px solid $black;
    }
  }

  &__date {
    text-transform: uppercase;
    color: $primary-color;
  }

  &__link {
    padding: 1rem 0;
    display: block;
    color: $black;
    &:after {
      width: 0;
    }
  }

  &__title {
    color: $black;
    margin: 0;
    font-size: 1rem;
    font-weight: normal;

    &:after {
      width: 0;
    }
  }
}
</style>

<script>
import { format } from "date-fns";
import { nl } from "date-fns/locale";

export default {
  metaInfo() {
    return {
      title: "Actueel",
    };
  },
  computed: {
    newsItems: function () {
      const processedDate = this.content.map((node) => {
        // const date = node.node.date
        const date = format(new Date(node.node.date), "d MMMM yyyy", { locale: nl });
        return { ...node.node, date };
      });
      return processedDate;
    },
  },
  name: "OwNewsList",
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>