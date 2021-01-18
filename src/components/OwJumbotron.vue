<template>
  <div class="ow-jumbotron">
    <div class="ow-container">
      <div class="ow-jumbotron__body">
        <div class="columns">
          <div class="column is-two-thirds-fullhd">
            <h1 class="ow-jumbotron__title">Lorem ipsum dolor sit amet</h1>
            <p class="ow-type__p ow-type__p--lead ow-jumbotron__lead">
              Onze opgeleide maatjes helpen voormalige patienten van het Centrum
              Eerste Psychose op weg naar zelfstandigheid en herstel in de
              maatschappij
            </p>
            <button class="ow-jumbotron__link" @click="scrollToBlurb">
              Maak kennis met ons werk &#8595;
            </button>
          </div>
        </div>
      </div>
    </div>
    <svg
      class="ow-jumbotron__circle ow-jumbotron__circle--left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      <g data-name="Layer 2">
        <circle cx="250" cy="250" r="250" data-name="Layer 1" />
      </g>
    </svg>
    <svg
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
  methods: {
    scrollToBlurb: function () {
      document.querySelector("#blurb").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ow-jumbotron {
  background-color: $primary-color;
  color: $white;
  padding: 6rem 0 14rem 0;
  position: relative;
  overflow: hidden;

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