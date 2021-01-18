<template>
  <g-link :to="href" class="ow-card">
    <div v-if="img" class="ow-card__image-container">
      <g-image class="ow-card__image" :src="require(`!!assets-loader!@images/${img}`)"/>
    </div>
    <h3 class="h4 ow-card__title">{{ title }}</h3>
    <p class="ow-card__subtitle">
      <slot />
    </p>
  </g-link>
</template>

<style lang="scss" scoped>
.ow-card {
  display: block;
  background-color: $white;
  padding: 1rem;
  border: 1px solid $primary-color;

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &__image-container {
    border: 1px solid $primary-color;
    padding-top: 66%;
    position: relative; 
    width: 100%;
    margin-bottom: 1rem;
    overflow: hidden;
  }

  &:after {
    width: 0;
  }

  &__title {
    margin: 0;
    margin-bottom: 0.2rem;
  }

  &__subtitle {
    color: $black;
    margin: 0;
  }
}
</style>

<script>
export default {
  name: "OwCard",

  props: {
    title: { type: String, required: false },
    href: { type: String, required: false, default: "/" },
    img: { type: String, required: false },
  },
  computed: {
    setImage: function () {
      if(this.img) {
        return require("~/assets/images/" + this.img);
      }
    }
  }
};
</script>