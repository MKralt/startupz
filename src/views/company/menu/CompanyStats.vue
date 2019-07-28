<template>
	<div>
		<div>
			<span>{{ channels }}</span>
			<span>CHANNELS</span>
		</div>
		<div>
			<span>{{ people }}</span>
			<span>PEOPLE</span>
		</div>
		<div>
			<span>{{ responses }}</span>
			<span>RESPONSES</span>
		</div>
	</div>
</template>

<script>
import { formatNumber } from '@/utils/formatting.js'

export default {
	props: {
		channelCount: {
			type: Number,
			default: 0
		},
		peopleCount: {
			type: Number,
			default: 0
		},
		responseCount: {
			type: Number,
			default: 0
		}
	},

	computed: {
		channels() {
			return formatNumber(this.channelCount)
		},
		people() {
			return formatNumber(this.peopleCount)
		},
		responses() {
			return formatNumber(this.responseCount)
		}
	},
}
</script>