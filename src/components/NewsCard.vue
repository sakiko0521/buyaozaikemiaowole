<template>
  <div class="news-card">
    <h3>{{ title }}</h3>
    <p class="date">{{ formatDate(date) }}</p>
    <p class="summary">{{ summary }}</p>
    <a href="#" class="read-more">Read More →</a>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    title: String,
    date: String,
    summary: String
  },
  methods: {
    formatDate(rawDate) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(rawDate).toLocaleDateString('en-US', options)
    }
  }
}
</script>