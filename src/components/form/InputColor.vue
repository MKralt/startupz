<template>
	<verte
		picker="square"
		:showHistory="null"
		:value="value"
		@input="$emit('input', $event)">
		<div>
			<div :style="`background-color=${value}`"></div>
			<div></div>
		</div>
	</verte>
</template>

<script>
import Verte from 'verte'
import 'verte/dist/verte.css'

export default {
	components: {
		Verte
	},
	
	props: {
		value: String
	}
}
</script>