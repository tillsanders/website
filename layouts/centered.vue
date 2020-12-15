<template>
  <div>
    <main class="centered">
      <Nuxt />
    </main>
    <FooterNavigation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNavigation from '@/components/FooterNavigation.vue'

export default Vue.extend({
  name: 'CenteredLayout',
  components: {
    FooterNavigation,
  },
})
</script>

<style>
main.centered {
  margin: var(--space-base) auto;
  padding: 0 var(--space-base);
  max-width: 50rem;
}
</style>
