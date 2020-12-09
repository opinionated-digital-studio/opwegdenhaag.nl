<template>
  <footer class="ow-footer">
    <div class="ow-container">
      <div class="ow-footer__info">
        <div class="columns">
          <div class="column is-half">
            <p class="ow-footer__blurb">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              consequat libero. Cras fermentum fringilla scelerisque. Fusce sed
              nisi nec metus porta egestas id eu urna.
            </p>
          </div>
          <div class="column is-one-quarter">
            <nav class="ow-footer__nav">
              <ul class="ow-footer__menu">
                <li class="ow-footer__menu-item">
                  <g-link to="/" class="ow-footer__menu-link"
                    >Ik zoek een maatje</g-link
                  >
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/" class="ow-footer__menu-link">Steun ons</g-link>
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/" class="ow-footer__menu-link">Over ons</g-link>
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/" class="ow-footer__menu-link">Nieuws</g-link>
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/" class="ow-footer__menu-link"
                    >Maatje worden</g-link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="column is-one-quarter">
            <ul class="ow-footer__menu">
              <li><strong>Stichting Ozanam 's-Gravenhage</strong></li>
              <li>2e Schuytstraat 244</li>
              <li>2517IS Den Haag</li>
              <li>Nederland</li>
              <br />
              <a class="ow-footer__menu-link" href="mailto:mail@opwegdenhaag.nl"
                >mail@opwegdenhaag.nl</a
              >
            </ul>
          </div>
        </div>
      </div>

      <div class="ow-footer__end">
        <g-link to="/" class="ow-footer__end-link">Privacy</g-link>
        <g-link to="/" class="ow-footer__end-link">Disclaimer</g-link>

        <div class="ow-footer__end-copyright">&copy; Stichting Ozanam 's-Gravenhage {{getCurrentYear}}</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.ow-footer {
  padding: 3rem 0;
  background-color: $primary-color;
  color: $white;

  &__info {
    padding-bottom: 4rem;
  }

  @include desktop() {
    padding-top: 5rem;
  }

  &__blurb {
    margin-top: 0;
    @include desktop() {
      max-width: 80%;
    }
  }

  &__menu {
    margin: 0;
    padding: 0;
    list-style: none;

    &-item {
      font-weight: 700;
    }

    &-link {
      color: $white;
      &:after {
        width: 0;
      }
    }
  }
  &__end {
    @extend small;
    &-link {
      color: $white;
      margin-right: 1rem;
      &:after {
        width: 0;
      }
    }

    &-copyright {
      padding-top: 2rem;
    }
  }
}
</style>

<script>
export default {
  name: "the-footer",
  computed: {
    getCurrentYear: function() {
      const date = new Date()
      const year = date.getFullYear()
      return year
    }
  }
};
</script>