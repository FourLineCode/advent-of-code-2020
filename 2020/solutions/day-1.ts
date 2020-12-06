function formatInput(rawInput: string) {
	return rawInput.split('\r\n').map((num) => parseInt(num))
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	for (let i = 0; i < input.length; i++) {
		const rest = 2020 - input[i]
		const index = input.indexOf(rest)

		if (index !== -1 && index !== i) {
			return input[i] * rest
		}
	}
	return 0
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length && j !== i; j++) {
			for (let k = 0; k < input.length && k !== i && k !== j; k++) {
				if (input[i] + input[j] + input[k] === 2020) {
					return input[i] * input[j] * input[k]
				}
			}
		}
	}

	return 0
}
