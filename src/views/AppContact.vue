<template>
  <div class="contact-page">
    <div class="contact-banner">
      <h1>Contact Us</h1>
    </div>

    <div class="container">
      <div class="contact-container">
        <!-- 联系信息 -->
        <div class="contact-info">
          <h2>School Office</h2>
          
          <div class="info-item">
            <i class="icon">📍</i>
            <div>
              <h3>Address</h3>
              <p>No.2 Chongwen Road, Nan'an District<br>Chongqing, China 400065</p>
            </div>
          </div>

          <div class="info-item">
            <i class="icon">📞</i>
            <div>
              <h3>Phone</h3>
              <p>+86-23-6246XXXX (Office)<br>+86-23-6246XXXX (Admissions)</p>
            </div>
          </div>

          <div class="info-item">
            <i class="icon">✉️</i>
            <div>
              <h3>Email</h3>
              <p>cs@cqupt.edu.cn (General)<br>admissions@cqupt.edu.cn (Admissions)</p>
            </div>
          </div>
        </div>

        <!-- 联系表单 -->
        <div class="contact-form">
          <h2>Send Us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" v-model="form.subject">
                <option value="general">General Inquiry</option>
                <option value="admission">Admission Question</option>
                <option value="research">Research Collaboration</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" v-model="form.message" required></textarea>
            </div>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <!-- 地图 -->
      <div class="map-container">
        <iframe 
          src="https://maps.google.com/maps?q=Chongqing%20University%20of%20Posts%20and%20Telecommunications&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: 'general',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里添加表单提交逻辑
      alert(`Thank you ${this.form.name}! Your message has been sent.`);
      this.form = {
        name: '',
        email: '',
        subject: 'general',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
}

.info-item {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.map-container {
  height: 400px;
  margin-top: 30px;
}

iframe {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>