<template>
  <div class="home">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="container">
        <h1>School of Computer Science and Technology</h1>
        <p class="subtitle">Chongqing University of Posts and Telecommunications</p>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="quick-links">
      <div class="container">
        <h2>Quick Access</h2>
        <div class="link-grid">
          <router-link to="/about" class="link-card">
            <h3>About Us</h3>
            <p>Learn about our school's history and mission</p>
          </router-link>
          <router-link to="/faculty" class="link-card">
            <h3>Faculty</h3>
            <p>Meet our distinguished professors and researchers</p>
          </router-link>
          <a href="#" class="link-card">
            <h3>Admissions</h3>
            <p>Information for prospective students</p>
          </a>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section">
      <div class="container">
        <h2>Latest News</h2>
        <div class="news-grid">
          <NewsCard 
            v-for="(news, index) in newsItems" 
            :key="index"
            :title="news.title"
            :date="news.date"
            :summary="news.summary"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'app-Home',
  components: {
    NewsCard
  },
  data() {
    return {
      newsItems: [
        {
          title: "International Conference on AI Held at CQUPT",
          date: "2025-03-15",
          summary: "Experts from 15 countries gathered to discuss the latest advancements in artificial intelligence..."
        },
        {
          title: "New Research Center for Quantum Computing Established",
          date: "2025-02-28",
          summary: "The school launched a new research facility with $3M funding from the National Science Foundation..."
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 添加响应式样式 */
.hero-banner {
  background: linear-gradient(rgba(0,0,0,0.7)), url('@/assets/cqupt.jpg');
  background-size: cover;
  color: white;
  padding: 120px 0;
  text-align: center;
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.link-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s;
}

.link-card:hover {
  transform: translateY(-5px);
}
</style>