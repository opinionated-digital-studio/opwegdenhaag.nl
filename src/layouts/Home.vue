<template>
  <div class="layout">
    <the-skip-link />
    <the-header :header-style="computeHeaderStyle" />
    <slot />
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
import TheSkipLink from "~/components/TheSkipLink";

export default {
  components: { TheHeader, TheFooter, TheSkipLink },
  props: {
    headerStyle: {
      type: String,
      required: false,
      default: "primary"
    }
  },
  computed: {
    computeHeaderStyle: function() {
      if (process.isClient) {
        if (window.innerWidth < 1408) {
          this.headerStyle = "primary";
        }
        return this.headerStyle;
      } else {
        this.headerStyle = "primary";
        return this.headerStyle;
      }
    }
  }
};
</script>
