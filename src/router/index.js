import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/AppHome.vue'
import About from '@/views/AppAbout.vue'
import Faculty from '@/views/AppFaculty.vue'
import Contact from '@/views/AppContact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Our School'
    }
  },
  {
    path: '/faculty',
    name: 'Faculty',
    component: Faculty,
    meta: {
      title: 'Faculty Members'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
