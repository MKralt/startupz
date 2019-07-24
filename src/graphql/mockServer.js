import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import mocks from './mocks.js'

import schemaString from './schema.graphql'

const schema = makeExecutableSchema({ typeDefs: schemaString})
addMockFunctionsToSchema({ schema, mocks })

const apolloCache = new InMemoryCache()
const graphqlClient = new ApolloClient({
	cache: apolloCache,
	link: new SchemaLink({ schema })
})

export default graphqlClient