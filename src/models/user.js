import { Model } from '@vuex-orm/core'

export class User extends Model {
	static entity = 'users'

	static fields() {
		return {
			id: this.increment(),
			name: this.attr(''),
			email: this.attr('')
		}
	}
}