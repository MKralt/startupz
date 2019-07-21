import { Channel, Rating } from '@/models/channel.js'

describe('Channel', () => {
	it('has the correct average rating', () => {
		const channel = new Channel({
			name: 'test',
			ratings: [
				{ score: 5 },
				{ score: 4 },
				{ score: 4 }
			]
		})

		expect(channel.average_rating).toBe(4)
	})
})

describe('Rating', () => {
	it('has the correct date', () => {
		const date = new Date()

		const rating = new Rating({
			timestamp: date.valueOf()
		})

		expect(rating.date instanceof Date).toBe(true)
		expect(rating.date.valueOf()).toBe(date.valueOf())
	})
})