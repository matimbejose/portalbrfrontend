<template>
<div class="main">
  <FooterComponent />
  <p>content</p>
<HeaderComponent />
</div>
</template>


<script>
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue"

export default {
  name: "Home",
  components: {
    FooterComponent,
    HeaderComponent
  }
};
</script>
