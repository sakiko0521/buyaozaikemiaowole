<template>
  <nav class="app-navbar">
    <!-- 校徽和学院名称 -->
    <div class="brand">
      <router-link to="/">
        <img 
          src="cqupt.jpg" 
          alt="CQUPT Logo"
          class="logo"
        >
        <div class="brand-text">
          <span class="school-name">School of Computer Science</span>
          <span class="university-name">Chongqing University of Posts and Telecommunications</span>
        </div>
      </router-link>
    </div>

    <!-- 主导航菜单 -->
    <ul class="nav-links">
      <li v-for="(item, index) in navItems" :key="index">
        <router-link 
          :to="item.path" 
          :class="{ 'active': $route.path.startsWith(item.path) }"
        >
          {{ item.text }}
        </router-link>
      </li>
    </ul>

    <!-- 语言切换 -->
    <div class="language-switcher">
      <button 
        @click="switchLanguage('en')"
        :class="{ 'active': currentLanguage === 'en' }"
      >
        EN
      </button>
      <span>|</span>
      <button 
        @click="switchLanguage('zh')"
        :class="{ 'active': currentLanguage === 'zh' }"
      >
        中文
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-Navbar',
  data() {
    return {
      currentLanguage: 'en',
      navItems: [
        { text: 'Home', path: '/home' },
        { text: 'About', path: '/about' },
        { text: 'Faculty', path: '/faculty' },
        { text: 'Research', path: '/research' },
        { text: 'Admissions', path: '/admissions' },
        { text: 'Contact', path: '/contact' }
      ]
    }
  },
  methods: {
    switchLanguage(lang) {
      this.currentLanguage = lang
      // 这里可以添加i18n语言切换逻辑
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
.app-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #003366;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.brand {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 15px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.school-name {
  font-weight: bold;
  font-size: 1.1rem;
}

.university-name {
  font-size: 0.8rem;
  opacity: 0.9;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
  border-bottom-color: #ffcc00;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 5px;
}

.language-switcher button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.language-switcher button.active {
  opacity: 1;
  font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav-links {
    margin: 1rem 0;
  }
}
</style>