<template>
  <footer>
    <nav>
      <ul>
        <li><nuxt-link to="/">Till</nuxt-link></li>
        <li><nuxt-link to="/privacy">Privacy</nuxt-link></li>
        <li><nuxt-link to="/about">Site Notice</nuxt-link></li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FooterNavigation',
})
</script>

<style lang="scss">
footer {
  margin: var(--space-base);
  padding: var(--space-base);
  background-color: var(--color-darker);
  border-radius: 1rem;
  animation-name: hovering;
  animation-iteration-count: infinite;
  animation-duration: 30s;
  animation-timing-function: linear;
  transition: transform 0.2s ease-out;

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
  }

  li {
    display: inline-block;
    margin: 0 0.5rem;
    &::before {
      display: none;
    }
  }

  .nuxt-link-exact-active::before {
    content: '-> ';
  }

  .nuxt-link-exact-active::after {
    content: ' <-';
  }
}

@keyframes hovering {
  10% {
    transform: translate(10px, 20px) scale(0.95);
  }
  20% {
    transform: translate(4px, 8px) scale(0.98);
  }
  35% {
    transform: translate(-4px, 14px) scale(0.96);
  }
  45% {
    transform: translate(-12px, -6px) scale(0.92);
  }
  55% {
    transform: translate(0, -2px) scale(0.95);
  }
  70% {
    transform: translate(6px, 14px) scale(0.99);
  }
  80% {
    transform: translate(-6px, 18px) scale(0.97);
  }
  90% {
    transform: translate(2px, 6px) scale(0.94);
  }
}

@media (min-width: 90rem) {
  footer {
    position: fixed;
    top: var(--space-base);
    right: var(--space-base);
    bottom: var(--space-base);
    margin: 0;
    padding: var(--space-base) var(--space-base) var(--space-base)
      calc(var(--space-base) * 2);
    min-width: 20rem;
    nav {
      height: 100%;
    }
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
    li {
      margin: 1rem 0;
      flex: 0 1 auto;
    }
    .nuxt-link-exact-active::after {
      display: none;
    }
  }
}
</style>
