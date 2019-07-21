import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL from '@vuex-orm/plugin-graphql'
import { User } from '@/models/user.js'
import { Company } from '@/models/company.js'
import { Channel, Question, Rating, Settings } from '@/models/channel.js'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(User)
database.register(Company)
database.register(Channel)
database.register(Question)
database.register(Rating)
database.register(Settings)

VuexORM.use(VuexORMGraphQL, { database })

export default new Vuex.Store({
	plugins: [VuexORM.install(database)],
	state: {

	},
	mutations: {

	},
	actions: {

	}
})
