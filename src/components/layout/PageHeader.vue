<template>
	<div>
		<h3>
			{{ title }}
		</h3>
		<span v-if="tag">
			{{ tag }}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Page title"
		},
		tag: String
	}
}
</script>