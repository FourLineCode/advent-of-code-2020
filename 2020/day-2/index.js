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
console.time('Part-1 Execution Time ')
console.log(`Part-1 : ${main1.part1() || '[ NOT YET CALCULATED ]'}`)
console.timeEnd('Part-1 Execution Time ')

console.log()

const main2 = new Main()
console.time('Part-2 Execution Time ')
console.log(`Part-2 : ${main2.part2() || '[ NOT YET CALCULATED ]'}`)
console.timeEnd('Part-2 Execution Time ')
