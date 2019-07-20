<template>
	<div>
		<h1>
		Customize
		</h1>
		<span>
			{{ `Company: ${company}, Channel: ${channel}` }}
		</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			company: this.$route.params.company,
			channel: this.$route.params.channel
		}
	}
}
</script>