<template>
	<label>
		<input
			type="radio"
			:value="value"
			:checked="checked"
			@change="$emit('change', $event)">
		<slot/>
	</label>
</template>

<script>
export default {
	props: {
		checked: Boolean,
		value: String
	}
}
</script>