import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import UpdateItems from '../views/UpdateItems.vue'
import NewItems from '../views/NewItems.vue'
import Category from '../views/Category.vue'
import navGuard from './navGuard.js'

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
navGuard(router)

export default router
