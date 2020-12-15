<template>
  <div>
    <main class="default">
      <Nuxt />
    </main>
    <FooterNavigation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNavigation from '@/components/FooterNavigation.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    FooterNavigation,
  },
})
</script>

<style>
main.default {
  margin: var(--space-base) 0;
  padding: 0 var(--space-base);
  max-width: 50rem;
}
</style>
