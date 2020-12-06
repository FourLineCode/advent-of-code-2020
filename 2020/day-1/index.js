const fs = require('fs')
const path = require('path')

class Main {
	constructor() {
		this.input = this.readInput()
			.split('\r\n')
			.map((num) => parseInt(num))
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
		for (let i = 0; i < this.input.length; i++) {
			const rest = 2020 - this.input[i]
			const index = this.input.indexOf(rest)

			if (index !== -1 && index !== i) {
				return this.input[i] * rest
			}
		}
	}

	part2() {
		for (let i = 0; i < this.input.length; i++) {
			for (let j = 0; j < this.input.length && j !== i; j++) {
				for (let k = 0; k < this.input.length && k !== i && k !== j; k++) {
					if (this.input[i] + this.input[j] + this.input[k] === 2020) {
						return this.input[i] * this.input[j] * this.input[k]
					}
				}
			}
		}
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
