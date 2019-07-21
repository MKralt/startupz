import { Model } from '@vuex-orm/core'
import { Channel } from './channel.js'

export class Company extends Model {
	static entity = 'companies'

	static fields() {
		return {
			id: this.increment(),
			logo: this.attr(null),
			name: this.string(''),
			channels: this.hasMany(Channel, 'company_id')
		}
	}
}