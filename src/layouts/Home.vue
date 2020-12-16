<template>
  <div class="layout">
    <the-header :header-style="headerStyle"/>
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
};
</script>
