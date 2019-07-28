<template>
	<div>
		<company-menu :company="company" :currentChannel="channel" :currentUser="user"/>
		<router-view :company="company" :channel="channel"/>
	</div>
</template>

<script>
import { Company } from '@/models/company.js'
import CompanyMenu from './menu/CompanyMenu.vue'

export default {
	components: {
		CompanyMenu
	},

	props: {
		companyPath: String,
		channelPath: String
	},

	data() {
		return {
			company: null,
			channel: null,
			user: {
				name: 'John Doe'
			}
		}
	},

	methods: {
		switchChannel(channel) {
			this.$router.push(`/${this.company.path}/${channel.path}/dashboard`)
		},

		resolveChannel(channelPath) {
			if(this.channel && channelPath == this.channel.path) {
				return
			}
			if(channelPath !== null) {
				const channel = this.company.channels.find(({path}) => path === channelPath)
				if(channel) {
					this.channel = channel
					return
				}
			}
			this.switchChannel(this.company.channels[0])
		}
	},

	created() {
		Company.fetch().then(() => {
			this.company = Company.query().withAllRecursive(4).where('path', this.companyPath).first()
			this.resolveChannel(this.channelPath)
		})
	},

	beforeUpdate() {
		this.resolveChannel(this.channelPath)
	}
}
</script>