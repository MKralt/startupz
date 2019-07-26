<template>
	<div>
		<ul>
			<li v-for="step in steps" :key="step.name">
				<button
					type="button"
					@click="$emit('switch', step.name)">
					{{ step.label }}
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'currentStep',
		event: 'switch'
	},

	props: {
		/**
		 * Array of steps
		 * tab: {
		 * 	name: <The unique name/identifier of the step>
		 * 	label: <The text that will appear on the step button>
		 * }
		 */
		steps: {
			type: Array,
			default: () => []
		},
		currentStep: String
	}
}
</script>