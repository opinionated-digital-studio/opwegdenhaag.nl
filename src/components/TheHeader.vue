<template>
  <header
    class="ow-header"
    :class="[
      { 'ow-header--hidden': !showHeader },
      'ow-header' + headerModifier,
    ]"
  >
    <div class="ow-container">
      <div class="columns">
        <div class="column is-one-third ow-header__logo-container">
          <g-link class="ow-header__home-link" to="/"
            ><the-logo :header-style="headerStyle" width="10rem"
          /></g-link>
        </div>
        <nav
          class="column ow-header__nav"
          :class="[
            {
              'ow-header__nav--parent-hidden': !showHeader,
            },
            {
              'ow-header__nav--is-active': isActiveMenu,
            },
          ]"
        >
          <div class="mobilefix">
            <div class="ow-header__toggle-bubble-container">
              <button class="ow-header__toggle-bubble" @click="toggleMenu">
                <span
                  class="ow-header__toggle-bubble-hamburger ow-header__toggle-bubble-hamburger--top"
                  :class="{
                    'ow-header__toggle-bubble-hamburger--top--is-active': isActiveMenu,
                  }"
                ></span>
                <span
                  class="ow-header__toggle-bubble-hamburger ow-header__toggle-bubble-hamburger--bottom"
                  :class="{
                    'ow-header__toggle-bubble-hamburger--bottom--is-active': isActiveMenu,
                  }"
                ></span>
              </button>
            </div>
          </div>
          <div
            class="ow-header__toggle-bubble-background"
            :class="{
              'ow-header__toggle-bubble-background--is-active': isActiveMenu,
            }"
          ></div>
          <ul class="ow-header__menu">
            <li
              class="ow-header__menu-item ow-header__menu-item--logo"
              :class="{ 'ow-header__menu-item--is-active': isActiveMenu }"
            >
              <g-link
                class="ow-header__home-link ow-header__home-link--mobile"
                to="/"
                ><the-logo header-style="white" width="10rem"
              /></g-link>
            </li>
            <li
              class="ow-header__menu-item"
              style="padding-left: 0"
              :class="{ 'ow-header__menu-item--is-active': isActiveMenu }"
            >
              <g-link
                to="/ik-wil-hulp"
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Ik zoek een maatje</g-link
              >
            </li>
            <li
              class="ow-header__menu-item"
              :class="{ 'ow-header__menu-item--is-active': isActiveMenu }"
            >
              <g-link
                to="/steun-ons"
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Steun ons</g-link
              >
            </li>
            <li
              class="ow-header__menu-item"
              :class="{ 'ow-header__menu-item--is-active': isActiveMenu }"
            >
              <g-link
                to="/over-ons"
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Over ons</g-link
              >
            </li>
            <li
              class="ow-header__menu-item"
              :class="{ 'ow-header__menu-item--is-active': isActiveMenu }"
            >
              <g-link
                to="/nieuws"
                class="ow-header__menu-link"
                :class="'ow-header__menu-link' + headerModifier"
                >Nieuws</g-link
              >
            </li>
            <li
              class="ow-header__menu-item ow-header__menu-item--cta"
              :class="{ 'ow-header__menu-item--is-active': isActiveMenu }"
            >
              <ow-button
                :color="buttonColorModifier"
                :size="buttonSizeModifier"
                content="Maatje worden"
              />
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
    if (process.isClient) {
      window.addEventListener("scroll", this.onScroll);
      window.addEventListener("resize", this.onResize)
    }
  },
  beforeDestroy() {
    if (process.isClient) {
      window.removeEventListener("scroll", this.onScroll);
      window.removeEventListener("resize", this.onResize)
    }
  },
  data() {
    let windowWidth
    if (process.isClient) {
      windowWidth = window.innerWidth
    }
    return {
      showHeader: true,
      lastScrollPosition: 0,
      isActiveMenu: false,
      windowWidth: windowWidth
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
    buttonColorModifier: function () {
      let buttonColorModifier;
        if (this.windowWidth > 1408) {
          switch (this.headerStyle) {
            case "white":
              buttonColorModifier = "primary";
              break;
            case "primary":
              buttonColorModifier = "white";
              break;
          }
        } else {
          buttonColorModifier = "primary";
        }
      return buttonColorModifier;
    },
    buttonSizeModifier: function () {
      let buttonSizeModifier
        if (this.windowWidth > 1408) {
          buttonSizeModifier = "normal";
        } else {
          buttonSizeModifier = "large";
        }
      return buttonSizeModifier
    },
  },
  methods: {
    toggleMenu() {
      this.isActiveMenu = !this.isActiveMenu;
    },
    onResize() {
      if (process.isClient) {
        this.windowWidth = window.innerWidth
      }
    },
    onScroll() {
      if (process.isClient) {
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
      }
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
  width: 100%;
  padding: 1rem 0;
  top: 0;
  transition: all 200ms ease;
  background: none;
  position: absolute;

  &__toggle-bubble-container {
    visibility: visible;
    background-color: $secondary-color;
    position: fixed;
    bottom: -10px;
    right: -10px;
    border-radius: 50%;
  }

  &__toggle-bubble {
    border: none;
    background-color: transparent;
    width: 80px;
    height: 80px;
    position: relative;
    z-index: 10000;

    @include fullhd() {
      display: none;
    }
  }

  &__toggle-bubble-background {
    visibility: visible;
    background-color: $secondary-color;
    z-index: -100;
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    clip-path: circle(40px at calc(100vw - 30px) calc(100vh - 30px));
    transition-timing-function: ease-out;
    transition: clip-path 0.4s;

    &--is-active {
      clip-path: circle(110vh at calc(100vw - 30px) calc(100vh - 30px));
    }

    @include fullhd() {
      display: none;
    }
  }

  &__toggle-bubble-hamburger {
    display: block;
    z-index: 100000;
    width: 40px;
    height: 6px;
    background-color: $primary-color;
    position: absolute;
    border-radius: $global-radius;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.4s;
    transition-timing-function: ease-in;

    &--top {
      top: 30px;

      &--is-active {
        transition-timing-function: ease-out;
        transform: translateX(-50%) translateY(125%) rotate(45deg);
      }
    }

    &--bottom {
      bottom: 30px;

      &--is-active {
        transition-timing-function: ease-out;
        transform: translateX(-50%) translateY(-125%) rotate(-45deg);
      }
    }
  }

  @include fullhd() {
    position: fixed;
  }

  &__nav {
    position: fixed;
    left: 0;
    width: 100%;

    @include until($fullhd) {
      top: 0;
      height: calc(100vh);
      background-color: transparent;
      visibility: hidden;
      padding: 0;

      &--is-active {
        visibility: visible;
        transition-delay: 0.4s;
        background-color: $secondary-color;
      }
    }

    @include fullhd() {
      position: relative;
    }
  }

  &__logo-container {
    line-height: 0;
  }

  &__home-link {
    display: inline-block;
    margin: auto 0;

    &:after {
      width: 0;
    }

    &--mobile {
      transform: translateX(1.6rem);
      padding: 1rem 0;
      margin-bottom: 4rem;
    }
  }

  &__row {
    @extend .columns;
    margin: 0 !important;
  }
  &__menu {
    list-style: none;
    margin: 0;
    padding: 0 10%;

    @include fullhd() {
      display: flex;
      padding: 0;
    }
  }
  &__menu-item {
    position: relative;
    margin: auto 0;
    text-align: right;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s;

    &--is-active {
      visibility: visible;
      transition-delay: 0.4s;
      opacity: 1;
    }

    @include fullhd() {
      padding: 1rem;
      opacity: 1;
      visibility: visible;

      &:first-child {
        padding-left: 0;
      }

      &--logo {
        @include fullhd() {
          display: none;
        }
      }
    }

    &--cta {
      margin-top: 1rem;
      margin-left: auto;
      padding: 0;

      @include fullhd() {
        margin: auto 0;
        margin-left: auto;
      }
    }
  }

  &__menu-link {
    text-decoration: none;
    font-size: 1.953rem;
    font-weight: 700;
    font-family: $font-headers;

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

    @include fullhd() {
      font-family: $font-body;
      font-size: inherit;
      font-weight: normal;

      &--primary {
        color: $white;

        &:hover {
          &:after {
            background-color: $secondary-color;
          }
        }
      }
    }
  }

  @include fullhd() {
    &--white {
      background-color: $white;
    }
  }

  &--hidden {
    @include fullhd() {
      transform: translateY(-100%);
    }
  }
}
</style>