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
		let count = 0
		const fields = new Set(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'])

		while (this.input.length > 0) {
			let passport = []
			let valid = true
			while (this.input[0] !== '' && this.input.length > 0) {
				passport.push(this.input.shift())
			}
			this.input.shift()

			const passportSet = new Set(
				passport
					.join(' ')
					.split(' ')
					.map((data) => data.split(':')[0])
			)

			if (fields.size > passportSet.size) continue

			for (let id of fields) {
				if (!passportSet.has(id)) {
					valid = false
					break
				}
			}

			if (valid) {
				count++
			}
		}

		return count
	}

	part2() {
		let count = 0
		const fields = new Set(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'])

		while (this.input.length > 0) {
			let passport = []
			let valid = true

			while (this.input[0] !== '' && this.input.length > 0) {
				passport.push(this.input.shift())
			}
			this.input.shift()

			const passportSet = new Set(
				passport
					.join(' ')
					.split(' ')
					.map((data) => data.split(':')[0])
			)
			const passportMap = new Set(
				passport
					.join(' ')
					.split(' ')
					.map((data) => data.split(':'))
			)

			if (fields.size > passportSet.size) continue

			for (let id of fields) {
				if (!passportSet.has(id)) {
					valid = false
					break
				}
			}

			for (let data of passportMap) {
				const val = data[1]
				switch (data[0]) {
					case 'byr': {
						if (+val < 1920 || +val > 2002) valid = false
						break
					}
					case 'iyr': {
						if (+val < 2010 || +val > 2020) valid = false
						break
					}
					case 'eyr': {
						if (+val < 2020 || +val > 2030) valid = false
						break
					}
					case 'hgt': {
						if (val.endsWith('cm')) {
							if (+val.split('cm')[0] < 150 || +val.split('cm')[0] > 193) {
								valid = false
							}
						} else if (val.endsWith('in')) {
							if (+val.split('in')[0] < 59 || +val.split('in')[0] > 76) {
								valid = false
							}
						} else {
							valid = false
						}
						break
					}
					case 'hcl': {
						if (!(val.startsWith('#') && val.length === 7)) valid = false

						for (let m = 1; m < val.length; m++) {
							if (!((+val[m] >= 0 && +val[m] <= 9) || (val[m] >= 'a' && val[m] <= 'f'))) {
								valid = false
								break
							}
						}
						break
					}
					case 'ecl': {
						const set = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'])

						if (!set.has(val)) valid = false
						break
					}
					case 'pid': {
						if (!(val.length === 9)) valid = false
						break
					}
				}
				if (!valid) continue
			}

			if (valid) {
				count++
			}
		}

		return count
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
