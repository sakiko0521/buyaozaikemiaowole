<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- 快速链接 -->
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About SCST</router-link></li>
          <li><router-link to="/faculty">Faculty Directory</router-link></li>
          <li><router-link to="/research">Research Areas</router-link></li>
          <li><a href="http://www.cqupt.edu.cn" target="_blank" rel="noopener noreferrer">CQUPT Main Site</a></li>
        </ul>
      </div>

      <!-- 联系信息 -->
      <div class="footer-section">
        <h3>Contact Us</h3>
        <address>
          <p><i class="fas fa-map-marker-alt"></i> No.2 Chongwen Road, Nan'an District</p>
          <p>Chongqing, China 400065</p>
          <p><i class="fas fa-phone"></i> +86-23-6246XXXX</p>
          <p><i class="fas fa-envelope"></i> cs@cqupt.edu.cn</p>
        </address>
      </div>

      <!-- 社交媒体 -->
      <div class="footer-section">
        <h3>Connect With Us</h3>
        <div class="social-links">
          <a href="#" aria-label="WeChat" title="WeChat">
            <i class="fab fa-weixin"></i>
          </a>
          <a href="#" aria-label="Weibo" title="Weibo">
            <i class="fab fa-weibo"></i>
          </a>
          <a href="#" aria-label="LinkedIn" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="YouTube" title="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        
        <!-- 订阅表单 -->
        <div class="newsletter">
          <h4>Subscribe to Newsletter</h4>
          <form @submit.prevent="handleSubscribe">
            <input 
              type="email" 
              v-model="email"
              placeholder="Your email address"
              required
              aria-label="Email address for newsletter subscription"
            >
            <button type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
          <p v-if="subscriptionMessage" class="subscription-message">
            {{ subscriptionMessage }}
          </p>
        </div>
      </div>
    </div>

    <!-- 版权信息 -->
    <div class="copyright">
      <p>© {{ currentYear }} School of Computer Science and Technology, CQUPT. All Rights Reserved.</p>
      <p>
        <router-link to="/privacy">Privacy Policy</router-link> | 
        <router-link to="/sitemap">Sitemap</router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App-Footer',
  data() {
    return {
      email: '',
      currentYear: new Date().getFullYear(),
      isSubmitting: false,
      subscriptionMessage: ''
    }
  },
  methods: {
    async handleSubscribe() {
      if (!this.email) return
      
      this.isSubmitting = true
      
      try {
        // 这里可以替换为实际的API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.subscriptionMessage = `Thank you for subscribing with ${this.email}!`
        this.email = ''
      } catch (error) {
        this.subscriptionMessage = 'Subscription failed. Please try again.'
      } finally {
        this.isSubmitting = false
        setTimeout(() => {
          this.subscriptionMessage = ''
        }, 5000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.app-footer {
  background: linear-gradient(135deg, #2c3e50, #1a252f);
  color: #ecf0f1;
  padding: 3rem 0 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-section {
    h3 {
      color: #ffcc00;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      position: relative;
      padding-bottom: 0.5rem;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 2px;
        background: #ffcc00;
      }
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 0.8rem;
    }

    a {
      color: #ecf0f1;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: #ffcc00;
        padding-left: 5px;
      }
    }

    address p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
    }
  }

  .social-links {
    display: flex;
    gap: 15px;
    margin: 1rem 0;

    a {
      font-size: 1.5rem;
      color: #ecf0f1;
      transition: transform 0.3s, color 0.3s;

      &:hover {
        color: #ffcc00;
        transform: translateY(-3px);
      }
    }
  }

  .newsletter {
    input {
      width: 100%;
      padding: 0.75rem;
      margin-bottom: 0.75rem;
      border: none;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.9);
      transition: box-shadow 0.3s;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #ffcc00;
      }
    }

    button {
      width: 100%;
      background: #ffcc00;
      color: #2c3e50;
      border: none;
      padding: 0.75rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s;

      &:hover:not(:disabled) {
        background: #ffd633;
        transform: translateY(-2px);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .subscription-message {
      margin-top: 0.5rem;
      color: #ffcc00;
      font-size: 0.9rem;
    }
  }

  .copyright {
    text-align: center;
    padding: 1.5rem;
    margin-top: 2rem;
    background: rgba(0, 0, 0, 0.3);
    font-size: 0.9rem;

    a {
      color: #ffcc00;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>