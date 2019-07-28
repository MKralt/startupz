<template>
	<div>
		<div>
			<input-file>
				<span>+ Add a Logo</span>
			</input-file>
		</div>
		<div>
			<label>Accent Color</label>
			<input-color/>
		</div>
		<div>
			<label>Button Color</label>
			<input-color/>
		</div>
		<div>
			<label>Button Style</label>
			<input-radio value="fill"></input-radio>
			<input-radio value="border"></input-radio>
		</div>
		<div>
			<label>button Shape</label>
			<input-radio value="square"></input-radio>
			<input-radio value="rounded"></input-radio>
			<input-radio value="capsule"></input-radio>
		</div>
	</div>
</template>

<script>
import InputFile from '@/components/form/InputFile.vue'
import InputColor from '@/components/form/InputColor.vue'
import InputRadio from '@/components/form/InputRadio.vue'

export default {
	components: {
		InputFile,
		InputColor,
		InputRadio
	}
}
</script>