<template>
  <Layout :header-style="headerStyle">
    <ow-jumbotron />
    <div class="ow-container">
      <div class="ow-blurb">
        <div class="ow-blurb__main-image"></div>
        <div class="columns">
          <div class="column is-one-third">
            <h2 class="h3">Een maatje voor iedereen die het nodig heeft</h2>
          </div>
          <div class="column">
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
  </Layout>
</template>

<script>
import OwJumbotron from "~/components/OwJumbotron.vue";
export default {
  metaInfo: {
    title: "Startpagina",
  },
  components: { OwJumbotron },
  data() {
    return {
      headerStyle: "primary",
    };
  },
};
</script>

<style lang="scss" scoped>
.ow-blurb {
  transform: translateY(-8rem);

  &__main-image {
    width: 100%;
    height: 600px;
    background-color: grey;
  }

  &__main-text {
    margin-top: 3rem;
  }
}
</style>