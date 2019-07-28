import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/:company',
			component: () => import('./views/company/Company.vue'),
			props: (route) => ({
				companyPath: route.params.company,
				channelPath: route.params.channel || null
			}),
			children: [
				{
					path: ':channel/dashboard',
					component: () => import('./views/company/dashboard/Dashboard.vue')
				},
				{
					path: ':channel/customize',
					component: () => import('./views/company/customize/Customize.vue')
				},
				{
					path: ':channel/people'
				},
				{
					path: ':channel/alerts'
				}
			]
		},
	]
})
