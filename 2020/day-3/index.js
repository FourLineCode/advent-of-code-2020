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

	slope(right, down) {
		let count = 0
		for (let i = down, index = right; i < this.input.length; i += down, index += right) {
			if (this.input[i][index % this.input[i].length] === '#') {
				count++
			}
		}

		return count
	}

	part1() {
		return this.slope(3, 1)
	}

	part2() {
		const res = this.slope(1, 1) * this.slope(3, 1) * this.slope(5, 1) * this.slope(7, 1) * this.slope(1, 2)
		return res
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
