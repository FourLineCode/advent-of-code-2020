function formatInput(rawInput: string): number[] {
	return rawInput.split('\r\n').map((num) => +num)
}

function findInvalid(input: number[], preamble: number = 5): number {
	for (let i = preamble; i < input.length; i++) {
		let found = false
		for (let j = i - preamble; j < i; j++) {
			const foundIndex = input.slice(i - preamble, i).indexOf(input[i] - input[j])
			if (foundIndex !== -1 && foundIndex !== j) {
				found = true
				break
			}
		}
		if (!found) return input[i]
	}
	return -1
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	return findInvalid(input, 25)
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)
	const invalid = findInvalid(input, 25)
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			const subSet = input.slice(i, j)
			const sum = subSet.reduce((sum, val) => (sum += val), 0)
			if (sum === invalid) return Math.max(...subSet) + Math.min(...subSet)
		}
	}
	return -1
}
