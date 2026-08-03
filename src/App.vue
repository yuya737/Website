<script setup>
import { profile, updates, publications } from './data.js'

// Lets data.js use plain paths like '/images/foo.jpg' regardless of the
// deployed base path (e.g. GitHub Pages project sites under '/Website/').
function asset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

function boldSelf(authors) {
  return authors.replace(profile.name, `<b>${profile.name}</b>`)
}

// '2026-07' -> 'Jul 2026'
function formatDate(yearMonth) {
  const [year, month] = yearMonth.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <div id="app">
    <header class="profile">
      <img class="avatar" :src="asset(profile.photo)" :alt="profile.name" />
      <div class="profile-text">
        <h1>{{ profile.name }}</h1>
        <p class="title">{{ profile.title }}</p>
        <p class="bio" v-html="profile.bio"></p>
        <nav class="links">
          <template v-for="(link, i) in profile.links" :key="link.label">
            <a :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
            <span v-if="i < profile.links.length - 1" class="sep">·</span>
          </template>
        </nav>
      </div>
    </header>

    <section class="section">
      <h2>Recent Updates</h2>
      <ul class="updates">
        <li v-for="update in updates" :key="update.date + update.text">
          <span class="date">{{ formatDate(update.date) }}</span>
          <span>{{ update.text }}</span>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>Publications</h2>
      <article class="publication" v-for="pub in publications" :key="pub.title">
        <img class="teaser" :src="asset(pub.teaser || '/images/teaser-placeholder.svg')" alt="" />
        <div class="publication-text">
          <h3>{{ pub.title }}</h3>
          <p class="authors" v-html="boldSelf(pub.authors)"></p>
          <div class="venue-row">
            <p class="venue">{{ pub.venue }}, {{ pub.year }}</p>
            <div class="pub-links">
              <a v-for="link in pub.links" :key="link.label" :href="link.url" target="_blank" rel="noopener">
                [{{ link.label }}]
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>

    <footer>© {{ new Date().getFullYear() }} {{ profile.name }}</footer>
  </div>
</template>
