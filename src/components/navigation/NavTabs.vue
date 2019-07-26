<template>
	<div>
		<ul>
			<li v-for="tab in tabs" :key="tab.name">
				<button
					type="button"
					@click="$emit('switch', tab.name)">
					{{ tab.label.toUpperCase() }}
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'currentTab',
		event: 'switch'
	},

	props: {
		/**
		 * Array of tabs
		 * tab: {
		 * 	name: <The unique name/identifier of the tab>
		 * 	label: <The text that will appear on the tab button>
		 * }
		 */
		tabs: {
			type: Array,
			default: () => []
		},
		currentTab: String
	}
}
</script>