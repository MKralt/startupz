<template>
	<div>
		<nav-tabs
			:tabs="previewTabs"
			v-model="currentTab"/>
		<component :is="currentComponent"/>
	</div>
</template>

<script>
import NavTabs from '@/components/navigation/NavTabs.vue'
import PreviewDesktop from './PreviewDesktop.vue'
import PreviewMobile from './PreviewMobile.vue'

export default {
	components: {
		NavTabs,
		PreviewDesktop,
		PreviewMobile
	},

	props: {
		layoutSettings: Object
	},

	data() {
		return {
			previewTabs: [
				{ name: 'desktop', label: 'Desktop Preview' },
				{ name: 'mobile', label: 'Mobile Preview' }
			],

			tabComponents: {
				desktop: PreviewDesktop,
				mobile: PreviewMobile
			},

			currentTab: 'desktop'
		}
	},

	computed: {
		currentComponent() {
			return this.tabComponents[this.currentTab]
		}
	}
}
</script>