<template>
  <div class="ow-jumbotron">
    <div class="ow-container">
      <div class="ow-jumbotron__body">
        <h1 class="ow-jumbotron__title">Lorem ipsum dolor sit amet</h1>
        <p class="ow-type__p ow-type__p--lead">
          De maatjes van Op weg begeleiden Hagenaars die te maken hebben gehad
          met een psychose
        </p>
        <a class="ow-jumbotron__link" href=""
          >Maak kennis met ons werk &#8595;</a
        >
      </div>
    </div>
    <svg class="ow-jumbotron__circle ow-jumbotron__circle--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g data-name="Layer 2">
        <circle cx="250" cy="250" r="250" data-name="Layer 1" />
      </g>
    </svg>
    <svg class="ow-jumbotron__circle ow-jumbotron__circle--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g data-name="Layer 2">
        <circle cx="250" cy="250" r="250" data-name="Layer 1" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "OwJumbotron",
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
    margin: 0;

    @include fullhd() {
      font-size: 3.815rem;
      margin-bottom: 0.5rem;
    }
  }

  &__link {
    color: $white;
    font-weight: 400;

    &:after {
      background-color: $secondary-color;
    }
  }

  &__body {
    @include desktop() {
      padding-right: 40%;
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
      width: 30rem;
      right: -20rem;
      top: -15rem;
    }
  }
}
</style>