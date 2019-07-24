import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL from '@vuex-orm/plugin-graphql'
import { User } from '@/models/user.js'
import { Company } from '@/models/company.js'
import { Channel, Rating, Config } from '@/models/channel.js'
import apolloClient from '@/graphql/mockServer.js'
import mockAdapter from '@/graphql/mockAdapter.js'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(User)
database.register(Company)
database.register(Channel)
database.register(Rating)
database.register(Config)

VuexORM.use(VuexORMGraphQL, { database, apolloClient, adapter: new mockAdapter() })

export default new Vuex.Store({
	plugins: [VuexORM.install(database)],
	state: {

	},
	mutations: {

	},
	actions: {

	}
})
