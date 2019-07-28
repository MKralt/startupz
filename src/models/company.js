import { Model } from '@vuex-orm/core'
import { Channel } from './channel.js'

export class Company extends Model {
	static entity = 'companies'
	static eagerLoad = ['channels']

	static fields() {
		return {
			id: this.increment(),
			logo: this.attr(null),
			name: this.string(''),
			channels: this.hasMany(Channel, 'company_id')
		}
	}

	get path() {
		return this.name.split(' ').join().toLowerCase()
	}

	get peopleCount() {
		return 1337
	}

	get channelCount() {
		return this.channels.length
	}

	get responseCount() {
		return this.channels.reduce((total, channel) => total += channel.responseCount, 0)
	}
}