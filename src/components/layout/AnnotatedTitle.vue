<template>
	<div>
		<h3>
			{{ title }}
		</h3>
		<h6>
			{{ annotation }}
		</h6>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Title"
		},
		annotation: {
			type: String,
			default: "Annotation"
		}
	}
}
</script>