<template>
	<div>
		<page-header :title="channel"/>
		<form-stepper
			:steps="formSteps"
			@switch="currentStep = $event"/>
		<div v-if="currentStep === 'customization'">
			<annotated-title
				title="Customize Feedback Invitation"
				annotation="Customize the NPS feedback invite."/>
			<div>
				<div>
					<section-title>Layout</section-title>
					<layout-form/>
				</div>
				<div>
					<preview/>
				</div>
				<div>
					<section-title>Email details</section-title>
					<email-form/>
					<a-button @click="goToNextStep()" size="large">Next</a-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageHeader from '@/components/layout/PageHeader.vue'
import AnnotatedTitle from '@/components/layout/AnnotatedTitle.vue'
import SectionTitle from '@/components/layout/SectionTitle.vue'
import FormStepper from '@/components/form/FormStepper.vue'
import LayoutForm from './LayoutForm.vue'
import Preview from './Preview.vue'
import EmailForm from './EmailForm.vue'
import AButton from '@/components/action/AButton.vue'

export default {
	components: {
		PageHeader,
		AnnotatedTitle,
		SectionTitle,
		FormStepper,
		LayoutForm,
		Preview,
		EmailForm,
		AButton
	},

	data() {
		return {
			company: this.$route.params.company,
			channel: this.$route.params.channel,
			formSteps: [
				{ name: 'feedback', label: 'Feedback Type' },
				{ name: 'platform', label: 'Platform' },
				{ name: 'customization', label: 'Customization' },
				{ name: 'people', label: 'People' },
				{ name: 'finish', label: 'Finish' }
			],
			currentStep: 'customization'
		}
	},

	methods: {
		goToNextStep() {
			const steps = this.formSteps

			const currentIndex = steps.indexOf(steps.find(({name}) => name === this.currentStep))
			if(currentIndex < steps.length - 1) {
				this.currentStep = steps[currentIndex + 1].name
			}
		}
	}
}
</script>