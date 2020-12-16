<template>
  <div class="layout">
    <the-header  />
    <div class="ow-content--default" id="main">
      <div class="ow-container">
        <slot />
      </div>
    </div>
    <the-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHeader from "~/components/TheHeader";
import TheFooter from "~/components/TheFooter";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss">
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between 
}

.ow-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 10%;
}

.ow-content {
  &--default {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
}

html {
  font-size: $base-font-size-small;
} /*18px*/

body {
  background: white;
  font-weight: 400;
  line-height: 1.6;
  color: #000000;
  font-family: $font-body;
}

p {
  margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: $font-headers;
  margin: 3rem 0 1.38rem;
  font-weight: 900;
  line-height: 1.3;
  color: $primary-color;
}

h1,
.h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2,
.h2 {
  font-size: 2.441rem;
}

h3,
.h3 {
  font-size: 1.953rem;
}

h4,
.h4 {
  font-size: 1.563rem;
}

h5,
.h5 {
  font-size: 1.25rem;
}

small,
.text_small {
  font-size: 0.8rem;
}

@include desktop() {
  html {
    font-size: $base-font-size-large;
  } /*20px*/
}

a {
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: $primary-color;

  &:after {
    content: "";
    position: absolute;
    background-color: $black;
    height: 1px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  &:focus {
    background-color: $focus-color !important;
    color: $black !important;
  }
}

.ow-type {
  &__p {
    &--lead {
      @extend h4;
      font-weight: 700;
      margin-top: 0;
    }
  }

  &__pretitle {
    font-family: $font-headers;
    font-weight: 700;
  }
}
</style>