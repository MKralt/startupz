import { Model } from '@vuex-orm/core'
import { User } from './user.js'

export class Channel extends Model {
	static entity = 'channels'
	static eagerLoad= ['ratings']

	static fields() {
		return {
			id: this.increment(),
			company_id: this.number(null).nullable(),
			name: this.string(''),
			question: this.string(''),
			ratings: this.hasMany(Rating, 'channel_id'),
			config: this.hasOne(Config, 'channel_id')
		}
	}

	get path() {
		return this.name.split(' ').join().toLowerCase()
	}

	get responseCount() {
		return this.ratings.length
	}

	get average_rating() {
		const ratingCount = this.ratings.length
		const ratingSum = this.ratings.reduce((total, { score }) => total += score, 0)

		return Math.round(ratingSum / ratingCount)
	}

	get tag() {
		if(this.responseCount > 10) {
			return `${this.average_rating}-star`
		}
		return 'NPS'
	}
}

export class Rating extends Model {
	static entity = 'ratings'

	static fields() {
		return {
			id: this.increment(),
			channel_id: this.number(null).nullable(),
			timestamp: this.string(null).nullable(),
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

export class Config extends Model {
	static entity = 'configs'

	static fields() {
		return {
			id: this.increment(),
			channel_id: this.number(null).nullable(),
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