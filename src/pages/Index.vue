<template>
  <Layout :header-style="headerStyle">
    <ow-jumbotron />
    <div class="ow-container ow-front-page__sticky">
      <div class="ow-blurb ow-front-page__content">
        <div class="ow-blurb__main-image-container">
          <g-image
            class="ow-blurb__main-image"
            src="~/assets/images/jumbo.jpeg"
          />
        </div>
        <div class="columns">
          <div class="column is-one-third">
            <h2 class="h3 ow-blurb__title">
              Een maatje voor iedereen die het nodig heeft
            </h2>
          </div>
          <div class="column is-half">
            <p class="ow-blurb__main-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae lacus non sem finibus viverra. Donec ac massa finibus,
              mollis nisi vitae, maximus dui. Pellentesque blandit leo orci, vel
              tempus libero semper nec. Praesent eget faucibus sem, et pulvinar
              ex. Suspendisse lacinia nisl a ullamcorper lacinia.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="ow-front-page__content ow-front-page-cta">
      <div class="ow-container">
        <div class="columns">
          <div class="column is-one-quarter is-offset-one-quarter">
            <ow-card title="Ik wil helpen" href="/maatje-worden" img="ik-wil-helpen.jpeg">Meld je aan om aan de slag te gaan als maatje</ow-card>
          </div>
          <div class="column is-one-quarter">
            <ow-card title="Ik wil hulp" href="/ik-wil-hulp" img="direct-aanmelden.jpg">Meld jezelf of jouw cliënt aan om hulp te krijgen</ow-card>
          </div>
        </div>
      </div>
    </div>

    <div class="ow-container">
      <div class="ow-front-page-news-overview ow-front-page__content">
        <div class="columns">
          <div class="column is-one-third">
            <h2 class="h3">Actueel</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae lacus non sem finibus viverra.
            </p>
          </div>
          <div class="column">
            <ul class="ow-news-list">
              <li class="ow-news-list__item">
                <a href="" class="ow-news-list__link">
                  <div class="ow-news-list__date ow-type__pretitle">
                    21 Januari 2021
                  </div>
                  <div class="ov-news-list__title">
                    Lorem ipsum dolor isit amet
                  </div>
                </a>
              </li>
              <li class="ow-news-list__item">
                <a href="" class="ow-news-list__link">
                  <div class="ow-news-list__date ow-type__pretitle">
                    21 Januari 2021
                  </div>
                  <div class="ov-news-list__title">
                    Lorem ipsum dolor isit amet
                  </div>
                </a>
              </li>
              <li class="ow-news-list__item">
                <a href="" class="ow-news-list__link">
                  <div class="ow-news-list__date ow-type__pretitle">
                    21 Januari 2021
                  </div>
                  <div class="ov-news-list__title">
                    Lorem ipsum dolor isit amet
                  </div>
                </a>
              </li>
            </ul>
            <g-link to="/nieuws">Alle nieuwsberichten</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import OwJumbotron from "~/components/OwJumbotron.vue";
import OwButton from "~/components/OwButton.vue";
import Layout from "~/layouts/Home.vue";
import OwCard from "../components/OwCard.vue";
export default {
  metaInfo: {
    title: "Startpagina",
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > 30) {
        this.headerStyle = "white";
      } else {
        this.headerStyle = "primary";
      }
    },
  },
  components: { Layout, OwJumbotron, OwButton, OwCard },
  data() {
    return {
      headerStyle: "primary",
    };
  },
};
</script>

<style lang="scss" scoped>
.ow-front-page-cta {
  background-color: $secondary-color;
  padding: 4rem 0;

  @include fullhd() {
    margin-bottom: 6rem;
  }
}

.ow-news-list {
  list-style: none;
  margin: 0rem 0 2rem 0;
  padding: 0;

  @include fullhd() {
    margin: 3rem 0 2rem 0;
  }

  &__item {
    border-top: 1px solid $black;

    &:last-child {
      border-bottom: 1px solid $black;
    }
  }

  &__date {
    text-transform: uppercase;
    color: $primary-color;
  }

  &__link {
    padding: 1rem 0;
    display: block;
    color: $black;
    &:after {
      width: 0;
    }
  }

  &__title {
    &:after {
      width: 0;
    }
  }
}

.ow-front-page__content {
  transform: translateY(-8rem);
}

.ow-blurb {
  &__main-image-container {
    position: relative;
    background-color: grey;
    overflow: hidden;
    border: 1px solid $primary-color;
    padding-top: 56.25%;
    position: relative; 
    width: 100%;
  }

  &__main-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &__circle {
    width: 30vw;
    fill: $secondary-color;
    transform: translateX(50%);
  }

  &__title {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  &__main-text {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  &__title,
  &__main-text {
    @include fullhd() {
      margin: 6rem 0;
    }
  }
}
</style>