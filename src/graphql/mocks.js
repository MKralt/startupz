import { MockList } from 'graphql-tools'
import faker from 'faker'

export default {
	User: () => ({
		name: faker.name.findName(),
		email: faker.internet.email()
	}),

	Company: () => ({
		logo: 'logo.png',
		name: 'startupz',
		channels: () => new MockList([1,7])
	}),

	Channel: () => ({
		name: faker.commerce.product(),
		question: faker.lorem.sentence(),
		ratings: () => new MockList([5,300]),
	}),

	Rating: () => ({
		timestamp: faker.date.recent().valueOf(),
		score: faker.random.number(5),
		comment: faker.lorem.paragraph()
	}),

	Config: () => ({
		channel_id: 0,
		logo: faker.image.business(),
		accent_color: faker.internet.color(),
		button_color: faker.internet.color(),
		button_style: ['fill', 'outline'][faker.random.number(0,1)],
		button_shape: ['square', 'rounded', 'capsule'][faker.random.number(0,2)],
		email_name: faker.name.findName(),
		email_reply: faker.internet.email(),
		email_subject: faker.random.words(),
		email_question: faker.lorem.sentence()
	}),

	Query: () => ({
		users: () => new MockList([8,120]),
		user: (user, { id }) => ({ ...user, id }),
		companies: () => new MockList(1)
	})
}