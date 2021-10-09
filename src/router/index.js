import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import BASE_URL from '../api/BASE_URL.js'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import UpdateItems from '../views/UpdateItems.vue'
import NewItems from '../views/NewItems.vue'
import Category from '../views/Category.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
	   path: '/login',
	   name: 'login',
	   component: Login
	},
	{
	   path: '/profile',
	   name: 'profile',
	   component: Profile
	},
	{
	   path: '/update',
	   name: 'update',
	   component: UpdateItems
	},
	{
	   path: '/new',
	   name: 'new',
	   component: NewItems
	},
	{
	   path: '/category',
	   name: 'category',
	   component: Category
	}
]
//createRouter
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

//Navigation Guard
router.beforeEach((to, from, next) => {
   //Get token from localStorage
   const body = { TOKEN: localStorage.getItem('TOKEN') }
   
   //Authentication actions
   axios.post(`${BASE_URL}/token`, body)
      .then(res => {
         const code = res.data.status
         console.log(code, body)
         if ( to.name !== 'login' && code !== 200 ) next({ name: 'login' })
         else next()
      })
      .catch(err => {
         console.log(err)
      })
})

export default router
