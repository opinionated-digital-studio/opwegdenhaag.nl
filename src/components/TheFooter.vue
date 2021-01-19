<template>
  <footer class="ow-footer">
    <div class="ow-container">
      <div class="ow-footer__info">
        <div class="columns">
          <div class="column is-one-third">
            <p class="ow-footer__blurb">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              consequat libero. Cras fermentum fringilla scelerisque. Fusce sed
              nisi nec metus porta egestas id eu urna.
            </p>
          </div>
          <div class="column">
            <nav class="ow-footer__nav">
              <ul class="ow-footer__menu">
                <li class="ow-footer__menu-item">
                  <g-link to="/ik-wil-hulp" class="ow-footer__menu-link"
                    >Ik zoek een maatje</g-link
                  >
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/steun-ons" class="ow-footer__menu-link">Steun ons</g-link>
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/over-ons" class="ow-footer__menu-link">Over ons</g-link>
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/nieuws" class="ow-footer__menu-link">Nieuws</g-link>
                </li>
                <li class="ow-footer__menu-item">
                  <g-link to="/maatje-worden" class="ow-footer__menu-link"
                    >Maatje worden</g-link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="column">
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
        <small>
          <g-link to="/privacy" class="ow-footer__end-link">Privacy</g-link>
          <g-link to="/disclaimer" class="ow-footer__end-link">Disclaimer</g-link>

          <div class="ow-footer__end-copyright">&copy; Stichting Ozanam 's-Gravenhage {{getCurrentYear}}</div>
        </small>
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

  &__menu,
  &__end {
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
      &:hover {
        &:after {
          background-color: $secondary-color;
          width: 100%;
        }
      }
    }
  }
  &__end {
    &-link {
      margin-right: 1rem;
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