<template>
  <header class="ow-header">
    <div class="ow-container">
      <div class="ow-header__row">
        <div class="column is-one-third ow-header__logo-container">
          <g-link class="ow-header__home-link" to="/"
            ><the-logo :header-style="headerStyle" width="10rem"
          /></g-link>
        </div>
        <nav class="column ow-header__nav">
          <ul class="ow-header__menu">
            <li class="ow-header__menu-item">
              <a
                href=""
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Ik zoek een maatje</a
              >
            </li>
            <li class="ow-header__menu-item">
              <a
                href=""
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Steun ons</a
              >
            </li>
            <li class="ow-header__menu-item">
              <a
                href=""
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Over ons</a
              >
            </li>
            <li class="ow-header__menu-item">
              <a
                href=""
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Actueel</a
              >
            </li>
            <li class="ow-header__menu-item ow-header__menu-item--cta">
              <ow-button :color="buttonModifier">Maatje worden</ow-button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import TheLogo from "~/components/TheLogo.vue";
import OwButton from "~/components/OwButton.vue";

export default {
  name: "TheHeader",
  components: { TheLogo, OwButton },
  props: {
    headerStyle: {
      type: String,
      required: false,
      default: "white",
    },
  },
  computed: {
    headerModifier: function () {
      let headerStyleModifierClass;
      switch (this.headerStyle) {
        case "white":
          headerStyleModifierClass = "--white";
          break;
        case "primary":
          headerStyleModifierClass = "--primary";
          break;
      }
      return headerStyleModifierClass;
    },
    buttonModifier: function () {
      let buttonModifier
      switch (this.headerStyle) {
        case "white":
          buttonModifier = "primary"
          break;
        case "primary":
          buttonModifier = "white"
          break;
      }
      return buttonModifier
    }
  },
};
</script>

<style lang="scss" scoped>
.ow-logo {
  display: block;
  margin: auto 0;
  transform: translateX(-0.8rem);
}
.column {
  padding: 0;
}
.ow-header {
  z-index: 100;
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  top: 0;
  &__logo-container {
    line-height: 0;
  }
  &__home-link {
    display: inline-block;
    margin: auto 0;

    &:after {
      width: 0;
    }
  }
  &__row {
    @extend .columns;
    margin: 0 !important;
  }
  &__menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  &__menu-item {
    position: relative;
    padding: 1rem;
    margin: auto 0;

    &--cta {
      margin-left: auto;
      padding: 0;
    }
  }
  &__menu-link {
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      width: 0;
    }

    &--primary {
      color: $white;
    }
  }

  &--primary {
    background-color: $primary-color;
  }
}
</style>