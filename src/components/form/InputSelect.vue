<template>
	<select
		:value="value"
		@change="$emit('change', $event)">
		<slot/>
	</select>
</template>

<script>
export default {
	props: {
		value: String
	}
}
</script>