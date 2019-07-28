<template>
	<div>
		<h1>
		Dashboard
		</h1>
		<span>
			{{ `Company: ${company.name}, Channel: ${channel.name}` }}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		company: Object,
		channel: Object
	}
}
</script>