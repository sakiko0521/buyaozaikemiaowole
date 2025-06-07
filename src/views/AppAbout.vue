<template>
  <div class="about-page">
    <div class="history-banner">
      <h1>About Our School</h1>
    </div>

    <div class="container">
      <!-- 学院简介 -->
      <section class="intro-section">
        <h2>Overview</h2>
        <div class="content-box">
          <p>The School of Computer Science and Technology at Chongqing University of Posts and Telecommunications (CQUPT) was established in 1985. As one of the earliest institutions in China to offer computer science programs, we have grown into a comprehensive research and education center.</p>
          
          <h3>Key Facts:</h3>
          <ul class="facts-list">
            <li>🎓 60+ Full-time Faculty Members</li>
            <li>🔬 8 Provincial/Municipal Research Labs</li>
            <li>🌍 200+ International Students</li>
            <li>💻 5 Undergraduate Programs</li>
          </ul>
        </div>
      </section>

      <!-- 组织机构 -->
      <section class="org-section">
        <h2>Organization Structure</h2>
        <div class="org-chart">
          <div class="dept" v-for="(dept, index) in departments" :key="index">
            <h3>{{ dept.name }}</h3>
            <ul>
              <li v-for="(unit, uIndex) in dept.units" :key="uIndex">{{ unit }}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-About',
  data() {
    return {
      departments: [
        {
          name: "Academic Departments",
          units: [
            "Department of Computer Science",
            "Department of Software Engineering",
            "Department of Information Security"
          ]
        },
        {
          name: "Administrative Offices",
          units: [
            "Dean's Office",
            "Student Affairs Office",
            "International Cooperation Office"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.org-chart {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  background: #f5f7fa;
  padding: 30px;
  border-radius: 10px;
}

.facts-list {
  columns: 2;
  list-style-type: none;
  padding-left: 0;
}

.facts-list li {
  margin-bottom: 10px;
  padding-left: 1.5em;
  text-indent: -1.5em;
}
</style>