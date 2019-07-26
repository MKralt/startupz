<template>
	<textarea
		:value="value"
		@input="$emit('input', $event)">
	</textarea>
</template>

<script>
export default {
	props: {
		value: String
	}
}
</script>