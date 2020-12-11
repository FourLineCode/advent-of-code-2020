function formatInput(rawInput: string) {
	return rawInput.split('\r\n')
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	let correct = 0
	input.forEach((data) => {
		const str = data.split(' ')

		const ll = parseInt(str[0].split('-')[0])
		const hl = parseInt(str[0].split('-')[1])

		let count = 0
		for (const c of str[2]) {
			if (c === str[1][0]) {
				count++
			}
		}
		if (count >= ll && count <= hl) {
			correct++
		}
	})

	return correct
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	let correct = 0
	input.forEach((data) => {
		const str = data.split(' ')

		const ll = parseInt(str[0].split('-')[0]) - 1
		const hl = parseInt(str[0].split('-')[1]) - 1

		let count = 0
		if (str[2][ll] == str[1][0]) count++
		if (str[2][hl] == str[1][0]) count++

		if (count === 1) {
			correct++
		}
	})

	return correct
}
