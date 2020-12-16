<template>
  <header class="ow-header" :class="[{ 'ow-header--hidden': !showHeader }, 'ow-header' + headerModifier]">
    <div class="ow-container">
      <div class="columns">
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
              <g-link
                to="/over-ons"
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Over ons</g-link
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
              <ow-button :color="buttonModifier" content="Maatje worden" />
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
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      showHeader: true,
      lastScrollPosition: 0,
    };
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
      let buttonModifier;
      switch (this.headerStyle) {
        case "white":
          buttonModifier = "primary";
          break;
        case "primary":
          buttonModifier = "white";
          break;
      }
      return buttonModifier;
    },
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      } 
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
        return;
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style lang="scss" scoped>
.ow-logo {
  display: block;
  margin: auto 0;
  transform: translateX(-0.8rem);
}
.ow-header {
  z-index: 100;
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  top: 0;
  transition: all 200ms ease;
  background: none;

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
    margin: auto 0;
    padding: 1rem;

    &:first-child {
      padding-left: 0;
    }

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
      background-color: $primary-color;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }

    &--primary {
      color: $white;

      &:hover {
        &:after {
          background-color: $secondary-color;
        }
      }
    }
  }

  &--white {
    background-color: $white;
  }

  &--hidden {
    transform: translateY(-100%);
  }
}
</style>