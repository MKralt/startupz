<template>
	<div>
		<div>
			<label>From Name</label>
			<input-select>
				<option value="">Select a name</option>
			</input-select>
		</div>
		<div>
			<label>Reply to Email</label>
			<input-select>
				<option value="">Select an email address</option>
			</input-select>
		</div>
		<div>
			<label>Email Subject Line</label>
			<input-select>
				<option value="">Select an email address</option>
			</input-select>
		</div>
		<div>
			<label>Send Test Email</label>
			<input-text placeholder="Insert..."/>
			<a-button @click="sendTestEmail()">Send</a-button>
		</div>
		<div>
			<label>Question</label>
			<input-text-area placeholder="Insert..."/>
		</div>
	</div>
</template>

<script>
import InputSelect from '@/components/form/InputSelect.vue'
import InputText from '@/components/form/InputText.vue'
import InputTextArea from '@/components/form/InputTextArea.vue'
import AButton from '@/components/action/AButton.vue'

export default {
	components: {
		InputSelect,
		InputText,
		InputTextArea,
		AButton
	}
}
</script>