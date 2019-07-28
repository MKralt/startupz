<template>
	<div v-if="company && currentChannel">
		<div>
			<div>
				<img :src="`${baseUrl}${company.logo}`">
				<div>
					<span>{{ company.name }}</span>
					<span>{{ currentUser.name }}</span>
				</div>
			</div>
			<company-stats
				:channelCount="channelCount"
				:peopleCount="peopleCount"
				:responseCount="responseCount"/>
		</div>
		<div>
			<span>MAIN MENU</span>
			<nav-menu>
				<nav-menu-item :path="`/${company.path}/${currentChannel.path}/dashboard`">
					<span><!-- ICON --></span>
					<span>Dashboard</span>
				</nav-menu-item>
				<nav-menu-item :path="`/${company.path}/${currentChannel.path}/people`">
					<span><!-- ICON --></span>
					<span>People</span>
				</nav-menu-item>
				<nav-menu-item :path="`/${company.path}/${currentChannel.path}/alerts`">
					<span><!-- ICON --></span>
					<span>Alerts</span>
				</nav-menu-item>
			</nav-menu>
		</div>
		<div>
			<div>
				<span>FEEDBACK CHANNELS</span>
				<button @click="addChannel">+ New Channel</button>
			</div>
			<nav-menu>
				<nav-menu-item
					v-for="channel in channels"
					:key="channel.id"
					:path="`/${company.path}/${channel.path}/dashboard`">
					<span>{{ channel.tag }}</span>
					<span>{{ channel.label }}</span>
				</nav-menu-item>
			</nav-menu>
			<button>+ New Group</button>
		</div>
		<div>
			<div>
				<label>Performance</label>
				<select>
					<option value="7">Last 7 Days</option>
					<option value="14">Last 14 Days</option>
					<option value="30">Last 30 Days</option>
				</select>
			</div>
			<div>
				<div>
					<span>Responses</span>
					<span>Total feedback responses</span>
				</div>
				<span>
					{{ chartResponseCount }}
				</span>
			</div>
			<div>
				<bar-chart :data="responsesPerDay"/>
			</div>
		</div>
		<div>
			<nav-menu>
				<nav-menu-item :path="`/${company.path}/${currentChannel.path}/settings`">
					<span><!-- ICON --></span>
					<span>Settings</span>
				</nav-menu-item>
			</nav-menu>
		</div>
	</div>
</template>

<script>
import NavMenu from '@/components/navigation/NavMenu.vue'
import NavMenuItem from '@/components/navigation/NavMenuItem.vue'
import CompanyStats from './CompanyStats.vue'
import BarChart from '@/components/visualization/BarChart.vue'

export default {
	components: {
		NavMenu,
		NavMenuItem,
		CompanyStats,
		BarChart
	},

	props: {
		company: {
			type: Object,
			default: null
		},
		currentChannel: {
			type: Object,
			default: null
		},
		currentUser: {
			type: Object,
			default: null
		}
	},
	
	data() {
		return {
			baseUrl: process.env.BASE_URL,
			chartResponseCount: 0,
			responsesPerDay: "7"
		}
	},

	computed: {
		channels() {
			return this.company.channels
		},

		channelCount() {
			return this.company.channelCount
		},

		peopleCount() {
			return this.company.peopleCount
		},

		responseCount() {
			return this.company.responseCount
		},

		addChannel() {
			return false
		}
	},
}
</script>