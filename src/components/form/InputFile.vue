<template>
	<div>
		<label>
			<input
				type="file"
				:accept="acceptString">
			<span>
				<slot/>
			</span>
		</label>
		<span>
			{{ fileTypeNames }}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		fileTypes: { 
			type: Array,
			default: () => []
		}
	},

	computed: {
		acceptString() {
			return this.fileTypes.map((ft) => ft.pattern).join(',')
		},
		fileTypeNames() {
			return this.fileTypes.map((ft) => ft.name).join(', ')
		}
	}
}
</script>