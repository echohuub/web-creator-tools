import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: HomePage
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
