<template>
  <div class="faculty-page">
    <div class="header-banner">
      <h1>Faculty Members</h1>
      <p>Meet our distinguished professors and research teams</p>
    </div>

    <div class="container">
      <!-- 教授团队 -->
      <section class="faculty-section">
        <h2>Professors</h2>
        <div class="faculty-grid">
          <div v-for="(prof, index) in professors" :key="index" class="faculty-card">
            <img :src="prof.photo || 'cqupt.jpg'" alt="Professor photo">
            <h3>{{ prof.name }}</h3>
            <p class="title">{{ prof.title }}</p>
            <p class="research">{{ prof.research }}</p>
            <a :href="`mailto:${prof.email}`" class="contact-btn">Contact</a>
          </div>
        </div>
      </section>

      <!-- 研究方向 -->
      <section class="research-areas">
        <h2>Research Areas</h2>
        <ul class="area-list">
          <li v-for="(area, index) in researchAreas" :key="index">
            <h3>{{ area.name }}</h3>
            <p>{{ area.description }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-Faculty',
  data() {
    return {
      professors: [
        {
          name: "Zhang Wei",
          title: "Professor, PhD Supervisor",
          research: "Artificial Intelligence, Machine Learning",
          email: "zhangwei@cqupt.edu.cn"
        },
        {
          name: "Li Xiaoming",
          title: "Associate Professor",
          research: "Cybersecurity, Blockchain",
          email: "lixm@cqupt.edu.cn"
        }
      ],
      researchAreas: [
        {
          name: "Artificial Intelligence",
          description: "Focusing on deep learning, computer vision and natural language processing applications."
        },
        {
          name: "Network Security",
          description: "Research on cryptographic algorithms, intrusion detection and blockchain security."
        }
      ]
    }
  }
}
</script>

<style scoped>
.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.faculty-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.research-areas {
  margin-top: 50px;
}
</style>