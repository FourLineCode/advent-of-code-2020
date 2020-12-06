function formatInput(rawInput: string) {
	return rawInput.split('\r\n')
}

function slope(input: string[], right: number, down: number): number {
	let count = 0
	for (let i = down, index = right; i < input.length; i += down, index += right) {
		if (input[i][index % input[i].length] === '#') {
			count++
		}
	}

	return count
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	return slope(input, 3, 1)
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	const res = slope(input, 1, 1) * slope(input, 3, 1) * slope(input, 5, 1) * slope(input, 7, 1) * slope(input, 1, 2)
	return res
}
