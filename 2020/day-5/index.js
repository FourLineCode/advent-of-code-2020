const fs = require('fs')
const path = require('path')
const { performance } = require('perf_hooks')

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

	getBound(pass, lwr, upr) {
		if (lwr === upr) return lwr
		const letter = pass.shift()
		letter === 'F' || letter === 'L' ? (upr = Math.floor((lwr + upr) / 2)) : (lwr = Math.ceil((lwr + upr) / 2))
		return this.getBound(pass, lwr, upr)
	}

	part1() {
		let max = 0

		this.input.forEach((data) => {
			const row = this.getBound(data.substring(0, 8).split(''), 0, 127)
			const col = this.getBound(data.substring(7).split(''), 0, 7)
			const id = row * 8 + col
			if (id > max) max = id
		})

		return max
	}

	part2() {
		let seats = []

		this.input.forEach((data) => {
			const row = this.getBound(data.substring(0, 8).split(''), 0, 127)
			const col = this.getBound(data.substring(7).split(''), 0, 7)
			seats.push(row * 8 + col)
		})

		seats.sort((a, b) => a - b)
		for (let i = 0; i < seats.length; i++) if (seats[i + 1] !== seats[i] + 1) return seats[i] + 1
	}
}

const main1 = new Main()
const t0 = performance.now()
console.log(`Part-1 : ${main1.part1() || '[ NOT YET CALCULATED ]'}`)
const t1 = performance.now()
console.log(`Part-1 execution time : ${(t1 - t0).toFixed(3)} milliseconds`)

const main2 = new Main()
const t2 = performance.now()
console.log(`Part-2 : ${main2.part2() || '[ NOT YET CALCULATED ]'}`)
const t3 = performance.now()
console.log(`Part-2 execution time : ${(t3 - t2).toFixed(3)} milliseconds`)
