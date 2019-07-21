import { Model } from '@vuex-orm/core'
import { User } from './user.js'

export class Channel extends Model {
	static entity = 'channels'

	static fields() {
		return {
			id: this.increment(),
			company_id: this.number(null).nullable(),
			name: this.string(''),
			question_id: this.number(null).nullable(),
			current_question: this.belongsTo(Question, 'question_id'),
			ratings: this.hasMany(Rating, 'channel_id'),
			settings: this.hasOne(Settings, 'channel_id')
		}
	}

	get average_rating() {
		const ratingCount = this.ratings.length
		const ratingSum = this.ratings.reduce((total, { score }) => total += score, 0)

		return Math.round(ratingSum / ratingCount)
	}
}

export class Question extends Model {
	static entity = 'questions'

	static fields() {
		return {
			id: this.increment(),
			body: this.string('')
		}
	}
}

export class Rating extends Model {
	static entity = 'ratings'

	static fields() {
		return {
			id: this.increment(),
			question_id: this.number(null).nullable(),
			question: this.belongsTo(Question, 'question_id'),
			timestamp: this.number(null).nullable(),
			score: this.number(0),
			comment: this.string(''),
			user_id: this.number(null).nullable(),
			user: this.belongsTo(User, 'user_id')
		}
	}

	get date() {
		return new Date(this.timestamp)
	}
}

export class Settings extends Model {
	static entity = 'setings'

	static fields() {
		return {
			id: this.increment(),
			channel_id: this.attr(null),
			logo: this.attr(null),
			accent_color: this.string('#000000'),
			button_color: this.string('#000000'),
			button_style: this.string('fill'),
			button_shape: this.string('square'),
			email_name: this.string(''),
			email_reply: this.string(''),
			email_subject: this.string(''),
			email_question: this.string('')
		}
	}
}