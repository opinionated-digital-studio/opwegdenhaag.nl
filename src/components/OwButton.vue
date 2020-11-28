<template>
  <a href="" class="ow-button" :class="'ow-button' + buttonColorModifier" :button-text-content="content"
    >{{ content }}</a>
</template>

<script>
export default {
  name: "OwButton",
  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    content: {
      type: String,
      required: false
    }
  },
  computed: {
    buttonColorModifier: function () {
      let buttonColorModifierClass;
      switch (this.color) {
        case "primary":
          buttonColorModifierClass = "--primary";
          break;
        case "white":
          buttonColorModifierClass = "--white";
          break;
      }
      return buttonColorModifierClass;
    },
  },
};
</script>

<style lang="scss" scoped>
.ow-button {
  text-decoration: none;
  padding: 0.4rem 1.2rem;
  background-color: $primary-color;
  color: $white;
  border-radius: $global-radius;
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  height: 100%;

  &:before {
    content: attr(button-text-content);
    position: absolute;
    padding: 0.4rem 1.2rem;
    background-color: $secondary-color;
    color: $primary-color;
    left: 0;
    top: 0;
    clip-path: circle(0% at 0% 0%);
    transition: all 800ms ease;
  }

  &:after {
    background: none;
  }

  &:hover {
    &:before {
      clip-path: circle(250% at 0% 0%);
    }
  }

  &--white {
    background-color: $white;
    color: $primary-color;
  }
}
</style>