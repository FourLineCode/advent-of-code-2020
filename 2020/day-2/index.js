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

	part1() {
		let correct = 0
		this.input.forEach((data) => {
			data = data.split(' ')

			const ll = parseInt(data[0].split('-')[0])
			const hl = parseInt(data[0].split('-')[1])

			let count = 0
			for (const c of data[2]) {
				if (c === data[1][0]) {
					count++
				}
			}
			if (count >= ll && count <= hl) {
				correct++
			}
		})

		return correct
	}

	part2() {
		let correct = 0
		this.input.forEach((data) => {
			data = data.split(' ')

			const ll = parseInt(data[0].split('-')[0]) - 1
			const hl = parseInt(data[0].split('-')[1]) - 1

			let count = 0
			if (data[2][ll] == data[1][0]) count++
			if (data[2][hl] == data[1][0]) count++

			if (count === 1) {
				correct++
			}
		})

		return correct
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
