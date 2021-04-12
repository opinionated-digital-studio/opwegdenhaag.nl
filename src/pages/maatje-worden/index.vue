<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/">&#8592; Terug naar startpagina</g-link>
      </div>
      <div id="main" class="column">
        <h1 class="page__title">Maatje worden</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-one-third ow-page-body">
        <div v-html="$static.main.content"></div>

        <form
          method="post"
          class="ow-sign-up-form"
          autocomplete="on"
          novalidate
          @submit.prevent="submitForm"
          action="https://api.formcake.com/api/form/c5da34d9-089b-4cc2-bfa7-82b5eb86d835/submission"
        >
          <div
            id="error-callout"
            v-if="showErrorCallout"
            class="ow-callout ow-callout--error"
          >
            <h2 class="ow-callout__title ow-callout__title--error">
              Er is een probleem
            </h2>
            <ul class="ow-callout__error-list">
              <li
                v-for="(errorMessage, name) in errors"
                :key="name"
                class="ow-callout__error-list-item"
              >
                <a
                  v-if="errorMessage"
                  class="ow-callout__error-list-link"
                  :href="'#' + name"
                  >{{ errorMessage }}</a
                >
              </li>
            </ul>
          </div>
          <div class="ow-form-group">
            <label class="ow-form-label" for="name">Naam</label>
            <input
              class="ow-input"
              :class="{ 'ow-input--error': $v.name.$error }"
              type="text"
              id="name"
              name="name"
              autocomplete="name"
              placeholder="Vul je naam in"
              v-model="name"
              :aria-describedby="$v.name.$error ? 'name-error' : false"
              @blur="$v.name.$touch()"
            />
            <span
              v-if="$v.name.$error && compileErrors.name"
              id="name-error"
              class="ow-input__error-label"
              >{{ compileErrors.name }}</span
            >
          </div>

          <div class="ow-form-group">
            <label class="ow-form-label" for="email">Emailadres</label>
            <input
              class="ow-input"
              :class="{ 'ow-input--error': $v.email.$error }"
              type="text"
              id="email"
              name="email"
              autocomplete="email"
              placeholder="Vul je emailadres in"
              v-model="email"
              @blur="$v.email.$touch()"
              :aria-describedby="$v.email.$error ? 'email-error' : false"
            />
            <span
              v-if="$v.email.$error && compileErrors.email"
              id="email-error"
              class="ow-input__error-label"
              >{{ compileErrors.email }}</span
            >
          </div>

          <div class="ow-form-group">
            <label class="ow-form-label" for="tel">Telefoonnummer</label>
            <input
              class="ow-input"
              :class="{ 'ow-input--error': $v.tel.$error }"
              type="text"
              id="tel"
              name="tel"
              autocomplete="tel"
              placeholder="Vul je telefoonnummer in"
              v-model="tel"
              :aria-describedby="$v.tel.$error ? 'tel-error' : false"
              @blur="$v.tel.$touch()"
            />
            <span
              v-if="$v.tel.$error && compileErrors.tel"
              id="tel-error"
              class="ow-input__error-label"
              >{{ compileErrors.tel }}</span
            >
          </div>

          <div class="ow-form-group">
            <label for="motivation" class="ow-form-label">Motivatie</label>
            <textarea
              class="ow-input"
              :class="{ 'ow-input--error': $v.motivation.$error }"
              name="motivation"
              id="motivation"
              cols="30"
              rows="10"
              v-model="motivation"
              :aria-describedby="
                $v.motivation.$error ? 'motivation-error' : false
              "
              @blur="$v.motivation.$touch()"
              @input="checkMotivationMaxChars"
            ></textarea>
            <span class="ow-form-note" id="motivation-max-chars-notice"
              >Nog {{ motivationMaxCharacters }} tekens resterend</span
            >
            <span
              v-if="$v.motivation.$error && compileErrors.motivation"
              id="tel-error"
              class="ow-input__error-label"
              >{{ compileErrors.motivation }}</span
            >
          </div>

          <p class="ow-sign-up-form__disclaimer">
            Jouw privacy wordt serieus genomen. Door je aan te melden ga je
            akkoord met ons <g-link to="/privacy">privacybeleid</g-link>.
          </p>

          <ow-button type="submit" content="Aanmelden" />
        </form>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.ow-callout {
  border: 4px solid $primary-color;
  padding: 1rem;
  margin-bottom: 2rem;

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  &__error-list-link {
    color: $error-color;
    font-weight: 700;
    &:after {
      background-color: $error-color;
      height: 2px;
    }
  }

  &--error {
    border: 4px solid $error-color;
  }

  @include tablet() {
    width: 80%;
  }
}

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

.ow-form-note {
  display: block;
  color: #5e5e5e;
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

  &--error {
    border: 2px solid $error-color;
  }

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
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  components: {
    OwButton
  },
  metaInfo() {
    return {
      title: this.$static.main.title,
      meta: [
        {
          key: "og:description",
          name: "og:description",
          content: this.$static.main.content
        },

        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$static.main.content
        }
      ]
    };
  },
  data() {
    return {
      name: "",
      email: "",
      tel: "",
      motivation: "",
      showErrorCallout: false,
      errors: {
        name: "",
        email: "",
        tel: "",
        motivation: ""
      }
    };
  },
  validations: {
    name: {
      required
    },
    email: {
      email,
      required
    },
    tel: {
      required,
      minLength: minLength(10)
    },
    motivation: {
      required,
      maxLength: maxLength(1000)
    }
  },
  methods: {
    submitForm: async function(e) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.showErrorCallout = true;
        this.errors.name = this.compileErrors.name;
        this.errors.email = this.compileErrors.email;
        this.errors.tel = this.compileErrors.tel;
        this.errors.motivation = this.compileErrors.motivation;
        document.querySelector("#main").scrollIntoView({
          behavior: "smooth"
        });
      } else {
        this.showErrorCallout = false;
        e.currentTarget.submit();
      }
    },
    checkMotivationMaxChars: function() {
      if (this.motivation.length >= 1000) {
        this.motivation = this.motivation.substring(0, 1000);
      }
    }
  },
  computed: {
    motivationMaxCharacters: function() {
      return 1000 - this.motivation.length;
    },
    compileErrors: function() {
      let nameError, emailError, telError, motivationError;

      if (!this.$v.name.required) {
        nameError = "Je moet je naam invullen";
      }

      if (!this.$v.email.required) {
        emailError = "Je moet je emailadres invullen";
      }

      if (!this.$v.email.email) {
        emailError = "Je moet een geldig emailadres invullen";
      }

      if (!this.$v.tel.required) {
        telError = "Je moet je telefoonnummer invullen";
      }

      if (!this.$v.tel.minLength) {
        telError =
          "Je moet een telefoonnummer invullen met ten minste 10 nummers";
      }

      if (!this.$v.motivation.required) {
        motivationError = "Je moet je motivatie om maatje te worden toelichten";
      }

      if (!this.$v.motivation.maxLength) {
        motivationError = "Je motivatie kan niet meer dan 1000 tekens bevatten";
      }

      return {
        name: nameError,
        email: emailError,
        tel: telError,
        motivation: motivationError
      };
    }
  }
};
</script>

<static-query>
query {
  main(id: "3e00bd113dcbe5ada4a1bc117565f098") {
    title
    content
  }
}
</static-query>
