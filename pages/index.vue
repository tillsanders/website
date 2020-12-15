<template>
  <div>
    <header>
      <picture>
        <source srcset="/till.webp" type="image/webp" />
        <img src="/till.png" alt="Till Sanders" width="100" />
      </picture>
      <h1>
        Hallo, I'm Till
        <small>
          from the <span class="cloudy">cloudy</span>
          <span class="mountains">mountains</span> of Lüden&shy;scheid,
          Germany</small
        >
      </h1>
      <p>
        Being both a Designer and a Web Developer, I spent the last decade
        learning about and shaping the difficult interaction between human and
        metal minds.
      </p>
    </header>
    <section>
      <h2 class="finanzritter">
        FinanzRitter
        <small>~&nbsp;Co-founder, Chief&nbsp;Product&nbsp;Officer</small>
      </h2>
      <p>
        -> I take pride in making the most challenging concepts easily
        accessible and put this to good use as co-founder of FinanzRitter, a
        digital insurance broker.
      </p>
      <h2 class="oec">
        OpenElectionCompass
        <small>~&nbsp;Creator</small>
      </h2>
      <p>
        -> I'm passionate about free and open source software and created the
        Open&shy;Election&shy;Compass to support political education,
        participation and democracy.
      </p>
    </section>

    <section>
      <h2>What makes my work possible&nbsp;<span class="heart">&lt;3</span></h2>
      <ul>
        <li>
          Design:<br />
          Figma &amp; Affinity Suite
        </li>
        <li>
          Development:<br />
          Vue.js, Nuxt.js, Laravel, NativeScript, Nest.js, TypeScript
        </li>
        <li>
          (Life):<br />
          Family &amp; Friends, Scouting &amp; Hiking, Pasta &amp; Beer
        </li>
      </ul>
    </section>

    <section>
      <h2>Say hello!</h2>
      <ul>
        <li>
          Twitter<br />
          <a href="https://twitter.com/tillsanders">twitter.com/tillsanders</a>
        </li>
        <li>
          GitHub<br />
          <a href="https://github.com/tillsanders">github.com/tillsanders</a>
        </li>
        <li>
          LinkedIn<br />
          <a href="https://linkedin.com/in/tillsanders"
            >linkedin.com/in/tillsanders</a
          >
        </li>
        <li>
          E-Mail<br />
          <a href="mailto:mail@till-sanders.de">mail@till-sanders.de</a><br />
          <br />
          <small>
            OpenPGP:
            <br />
            <a
              href="https://keys.openpgp.org/search?q=mail%40till-sanders.de"
              rel="noindex,nofollow"
            >
              B1A2 4305 3952 117D DA03<br />6A71 7200 3A49 8CF2 D46A
            </a>
          </small>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
})
</script>

<style scoped>
header p {
  color: var(--color-text);
}

header img {
  border-radius: 10px;
  margin: var(--space-base) 0;
  display: block;
}

h2.finanzritter {
  color: var(--color-finanzritter);
}

h2.oec {
  color: var(--color-oec);
}

.cloudy {
  filter: blur(1px) opacity(1) saturate(1);
  animation-name: cloud;
  animation-duration: 30s;
  animation-iteration-count: infinite;
}

.mountains {
  filter: blur(1px) opacity(1) saturate(1);
  animation-name: cloud;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
}

@keyframes cloud {
  0%,
  100% {
    filter: blur(1px) opacity(1) saturate(1);
  }
  10% {
    filter: blur(3px) opacity(0.3) saturate(0.3);
  }
  12% {
    filter: blur(2px) opacity(0.4) saturate(0.4);
  }
  14% {
    filter: blur(4px) opacity(0.2) saturate(0.2);
  }
  16% {
    filter: blur(3px) opacity(0.2) saturate(0.2);
  }
  25% {
    filter: blur(2px) opacity(0.7) saturate(0.7);
  }
  35% {
    filter: blur(1px) opacity(1) saturate(1);
  }
  50% {
    filter: blur(2px) opacity(0.7) saturate(0.7);
  }
  55% {
    filter: blur(4px) opacity(0.4) saturate(0.4);
  }
  75% {
    filter: blur(3px) opacity(0.6) saturate(0.6);
  }
  90% {
    filter: blur(2px) opacity(0.8) saturate(0.8);
  }
}

.heart {
  animation-name: beating;
  animation-iteration-count: infinite;
  animation-duration: 2s;
}

@keyframes beating {
  0%,
  35%,
  65%,
  100% {
    color: darkred;
  }
  50% {
    color: red;
    text-shadow: 0 0 5px purple;
  }
}

li {
  color: var(--color-text);
}
</style>
