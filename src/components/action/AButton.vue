<template>
	<button
		type="button"
		@click="$emit('click')">
		<slot/>
	</button>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: 'small'
		}
	}
}
</script>