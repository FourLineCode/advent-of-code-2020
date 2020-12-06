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
		let sum = 0

		while (this.input.length > 0) {
			let group = []
			while (this.input[0] !== '' && this.input.length) group.push(this.input.shift())
			this.input.shift()
			const ans = new Set(group.join('').split(''))
			sum += ans.size
		}

		return sum
	}

	part2() {
		let sum = 0

		while (this.input.length > 0) {
			let groups = []
			while (this.input[0] !== '' && this.input.length) groups.push(this.input.shift())
			this.input.shift()

			const groupSet = groups.map((per) => new Set(per.split('')))

			Array.from(groupSet[0]).forEach((ans) => {
				let valid = true
				for (let i = 1; i < groupSet.length; i++) {
					if (!groupSet[i].has(ans)) valid = false
				}
				if (valid) sum++
			})
		}

		return sum
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
