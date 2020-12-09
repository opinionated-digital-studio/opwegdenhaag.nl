<template>
  <Layout :header-style="headerStyle">
    <ow-jumbotron />
    <div class="ow-container">
      <div class="ow-blurb ow-front-page__content">
        <div class="ow-blurb__main-image"></div>
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

      <div class="ow-card ow-card--highlight ow-front-page__content">
        <div class="columns">
          <div class="ow-card__column is-half">
            <div class="ow-card__body ow-card__body--highlight">
              <h3 class="ow-card__title ow-card__title--highlight">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="ow-card__p ow-card__p--highlight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eos dicta tempora aut ea ut ad beatae officiis tempore quae
                ullam fugiat quisquam quibusdam alias ipsum, consequuntur
                aperiam similique neque.
              </p>
              <ow-button color="white" content="Lees meer" />
            </div>
          </div>
          <div class="ow-card__column">
            <div class="ow-card__img ow-card__img--highlight"></div>
          </div>
        </div>
      </div>

      <div class="ow-front-page__news-overview ow-front-page__content">
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
            <g-link to="/actueel">Alle nieuwsberichten</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import OwJumbotron from "~/components/OwJumbotron.vue";
import OwButton from "~/components/OwButton.vue";
export default {
  metaInfo: {
    title: "Startpagina",
  },
  components: { OwJumbotron, OwButton },
  data() {
    return {
      headerStyle: "primary",
    };
  },
};
</script>

<style lang="scss" scoped>
.ow-news-list {
  list-style: none;
  margin: 3rem 0 2rem 0;
  padding: 0;

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
.ow-card {
  &--highlight {
    background-color: $primary-color;
    color: $white;
  }
  &__title {
    &--highlight {
      color: $white;
      margin-top: 0;
    }
  }
  &__body {
    &--highlight {
      padding: 4rem;
    }
  }
  &__p {
    &--highlight {
      margin-bottom: 6rem;
    }
  }
  &__img {
    height: 100%;
    &--highlight {
      background-color: grey;
    }
  }
  &__column {
    @extend .column;
    padding: 0;
  }
}
.ow-front-page__content {
  transform: translateY(-8rem);
}
.ow-blurb {
  &__main-image {
    width: 100%;
    height: 600px;
    background-color: grey;
  }

  &__title,
  &__main-text {
    margin: 6rem 0;
  }
}
</style>