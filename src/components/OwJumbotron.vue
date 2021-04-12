<template>
  <div class="ow-jumbotron">
    <div class="ow-container">
      <div class="ow-jumbotron__body">
        <div class="columns">
          <div class="column is-two-thirds-fullhd">
            <h1 class="ow-jumbotron__title">{{ $static.home.kop_groot }}</h1>
            <p class="ow-type__p ow-type__p--lead ow-jumbotron__lead">
              {{ $static.home.kop_ondertitel }}
            </p>
            <button class="ow-jumbotron__link" @click="scrollToBlurb">
              Maak kennis met ons werk &#8595;
            </button>
          </div>
        </div>
      </div>
    </div>
    <svg
      id="circle-left"
      :style="`transform: translateY(${circleLeftYOffset}px)`"
      class="ow-jumbotron__circle ow-jumbotron__circle--left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      <g data-name="Layer 2">
        <circle cx="250" cy="250" r="250" data-name="Layer 1" />
      </g>
    </svg>
    <svg
      id="circle-right"
      :style="`transform: translateY(${circleRightYOffset}px)`"
      class="ow-jumbotron__circle ow-jumbotron__circle--right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      <g data-name="Layer 2">
        <circle cx="250" cy="250" r="250" data-name="Layer 1" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "OwJumbotron",
  mounted() {
    window.addEventListener("scroll", this.transformBubbles);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.transformBubbles);
  },
  data() {
    return {
      circleLeftYOffset: 0,
      circleRightYOffset: 0
    };
  },
  methods: {
    scrollToBlurb: function() {
      document.querySelector("#blurb").scrollIntoView({
        behavior: "smooth"
      });
    },
    transformBubbles: function(e) {
      const bubbleLeft = document.getElementById("circle-left");
      const bubbleRight = document.getElementById("circle-right");
      const bubbleLeftScrollFactor = window.pageYOffset * 0.5;
      const bubbleRightScrollFactor = window.pageYOffset * 0.2;
      this.circleLeftYOffset = bubbleLeftScrollFactor * -1;
      this.circleRightYOffset = bubbleRightScrollFactor * -1;
    }
  }
};
</script>

<style lang="scss" scoped>
.ow-jumbotron {
  background-color: $primary-color;
  color: $white;
  padding: 6rem 0 14rem 0;
  position: relative;
  overflow: hidden;

  &__title,
  &__lead,
  &__link {
    position: relative;
    z-index: 10;
  }

  &__title {
    color: $white;
    margin: 0;
    font-size: 2.441rem;

    @include fullhd() {
      font-size: 3.815rem;
      margin-bottom: 0.5rem;
    }
  }

  &__lead {
    color: $white;
  }

  &__link {
    background: none;
    border: 0;
    color: $white;
    font-weight: 400;
    position: relative;
    font-size: 100%;
    font-family: $font-body;

    &:focus {
      background-color: $focus-color !important;
      color: $black !important;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: $black;
      height: 1px;
      width: 100%;
      bottom: -5px;
      left: 0;
      background-color: $secondary-color;
    }
  }

  &__body {
    @include desktop() {
    }
  }

  &__circle {
    position: absolute;
    fill: $secondary-color;

    &--left {
      width: 24rem;
      left: -10rem;
      bottom: -12rem;
    }

    &--right {
      width: 10rem;
      top: -5rem;
      right: -5rem;

      @include fullhd() {
        width: 30rem;
        top: -15rem;
        right: -20rem;
      }
    }
  }
}
</style>

<static-query>
query {
  home: home(id: "14b844fa207042add04d39881b895615") {
    kop_groot
    kop_ondertitel
  }
}
</static-query>
