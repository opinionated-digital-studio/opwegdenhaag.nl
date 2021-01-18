<template>
  <div class="layout">
    <the-header :header-style="computeHeaderStyle"/>
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
export default {
  components: { TheHeader, TheFooter },
  props: {
    headerStyle: {
      type: String,
      required: false,
      default: "white",
    },
  },
  computed: {
    computeHeaderStyle: function () {
      if (window.innerWidth < 1408) {
        this.headerStyle = "primary"
      } 
      return this.headerStyle
    }
  }
};
</script>
