<template>
	<li>
		<router-link :to="path">
			<slot/>
		</router-link>
	</li>
</template>

<script>
export default {
	props: {
		path: String
	}
}
</script>