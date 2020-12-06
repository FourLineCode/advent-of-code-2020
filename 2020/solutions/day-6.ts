function formatInput(rawInput: string) {
	return rawInput.split('\r\n')
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	let sum = 0

	while (input.length > 0) {
		let group = []
		while (input[0] !== '' && input.length) group.push(input.shift())
		input.shift()
		const ans = new Set(group.join('').split(''))
		sum += ans.size
	}

	return sum
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	let sum = 0

	while (input.length > 0) {
		let groups = []
		while (input[0] !== '' && input.length) groups.push(input.shift())
		input.shift()

		const groupSet = groups.map((per) => new Set(per?.split('')))

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
