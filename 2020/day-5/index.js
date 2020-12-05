const fs = require('fs')
const path = require('path')

class Main {
	constructor() {
		this.input = this.readInput().split('\r\n')
	}

	readInput() {
		try {
			const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
			return data
		} catch (error) {
			console.log(error.stack)
		}
	}

	getRow(pass, lwr, upr) {
		if (lwr === upr) return lwr
		const letter = pass.shift()
		letter === 'F' ? (upr = Math.floor((lwr + upr) / 2)) : (lwr = Math.ceil((lwr + upr) / 2))
		return this.getRow(pass, lwr, upr)
	}

	getCol(pass, lwr, upr) {
		if (lwr === upr) return lwr
		const letter = pass.shift()
		letter === 'L' ? (upr = Math.floor((lwr + upr) / 2)) : (lwr = Math.ceil((lwr + upr) / 2))
		return this.getCol(pass, lwr, upr)
	}

	part1() {
		let seatId = []

		this.input.forEach((data) => {
			const row = this.getRow(data.substring(0, 8).split(''), 0, 127)
			const col = this.getCol(data.substring(7).split(''), 0, 7)
			seatId.push(row * 8 + col)
		})

		return Math.max(...seatId)
	}

	part2() {
		let seats = []

		this.input.forEach((data) => {
			const row = this.getRow(data.substring(0, 8).split(''), 0, 127)
			const col = this.getCol(data.substring(7).split(''), 0, 7)
			seats.push(row * 8 + col)
		})

		seats.sort((a, b) => a - b)
		for (let i = 0; i < seats.length; i++) {
			if (seats[i + 1] !== seats[i] + 1) return seats[i] + 1
		}
	}
}

const main1 = new Main()
console.log(`Part-1 : ${main1.part1() || '[ NOT YET CALCULATED ]'}`)

const main2 = new Main()
console.log(`Part-2 : ${main2.part2() || '[ NOT YET CALCULATED ]'}`)
