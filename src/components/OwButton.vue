<template>
  <a
    v-if="buttonType === 'link'"
    :href="href"
    class="ow-button"
    :class="['ow-button' + buttonColorModifier + ' ow-button' + buttonSizeModifier]"
    :button-text-content="content"
    >{{ content }}</a
  >
  <button v-else-if="buttonType === 'submit'"
    :class="['ow-button' + buttonColorModifier + ' ow-button' + buttonSizeModifier]"
    class="ow-button"
    value="test"
    type="submit"
    :button-text-content="content"
    >
    {{content}}
  </button>
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
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: 'normal'
    },
    type: {
      type: String,
      required: false,
      default: 'link'
    },
    href: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      height: null,
      width: null,
      buttonType: this.type
    };
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
    buttonSizeModifier: function () {
      let buttonSizeModifierClass
      switch (this.size) {
        case "large":
          buttonSizeModifierClass = "--large";
          break;
        case "normal":
          buttonSizeModifierClass = "--normal";
          break;
      }
      return buttonSizeModifierClass
    }
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
  font-family: $font-body;
  line-height: 1.6;
  border: 0;
  font-size: 100%;

  &:focus {
    background-color: $focus-color;
    color: $black;
  }


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

  &--large {
    font-size: 1.563rem;
  }
}
</style>