<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/">&#8592; Terug naar startpagina</g-link>
      </div>
      <div class="column">
        <h1 class="page__title">Ik wil hulp</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-one-third ow-page-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        quaerat incidunt soluta sunt earum, numquam deleniti corrupti voluptas
        magni aliquam voluptates suscipit eum totam ullam ipsam, odit asperiores
        excepturi minus?

        <form method="post" class="ow-sign-up-form" autocomplete="on">
          <div class="ow-form-group">
            <label class="ow-form-label" for="name">Naam</label>
            <input
              class="ow-input"
              type="text"
              id="name"
              name="name"
              autocomplete="name"
              placeholder="Vul je naam in"
            />
            <span class="ow-input__error-label">Je moet je naam invullen</span>
          </div>

          <div class="ow-form-group">
            <label class="ow-form-label" for="email">Emailadres</label>
            <input
              class="ow-input"
              type="text"
              id="email"
              name="email"
              autocomplete="email"
              placeholder="Vul je emailadres in"
            />
          </div>

          <div class="ow-form-group">
            <label class="ow-form-label" for="tel">Telefoonnummer</label>
            <input
              class="ow-input"
              type="text"
              id="tel"
              name="tel"
              autocomplete="tel"
              placeholder="Vul je telefoonnummer in"
            />
          </div>

          <p class="ow-sign-up-form__disclaimer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            doloribus, ullam blanditiis cum voluptatum reiciendis magni neque
            aspernatur laudantium, hic pariatur! Minima necessitatibus
            temporibus eaque, possimus perferendis nulla laborum quisquam.
          </p>

          <ow-button type="submit" content="Aanmelden" />
        </form>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.ow-sign-up-form {
  margin-top: 3rem;

  &__disclaimer {
    margin-top: 1rem;
    margin-bottom: 3rem;
    color: #5e5e5e;
  }
}

.ow-form-group {
  margin-bottom: 2rem;
}

.ow-form-label {
  display: block;
  color: $primary-color;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.ow-input {
  padding: 0.5rem;
  width: 100%;
  line-height: 1.3;
  font-size: 1rem;
  font-family: $font-body;
  border: 2px solid $black;
  margin-bottom: 0.3rem;

  &__error-label {
    color: $error-color;
    display: block;
  }

  &:focus {
    outline: 4px solid $focus-color;
  }

  @include tablet() {
    width: 80%;
  }
}
</style>

<script>
import OwButton from "~/components/OwButton.vue";

export default {
  components: {
    OwButton
  },
  metaInfo() {
    return {
      title: "Ik wil hulp",
    };
  },
};
</script>