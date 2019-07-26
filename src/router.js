import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/:company/:channel/dashboard',
			component: () => import('./views/dashboard/Dashboard.vue')
		},
		{
			path: '/:company/:channel/customize',
			component: () => import('./views/customize/Customize.vue')
		}
	]
})
