function formatInput(rawInput: string): number[] {
	return rawInput.split('\r\n').map((num) => +num)
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)
	const sorted = input.sort((a, b) => a - b)
	const diffs = sorted.map((num, i) => sorted[i + 1] - num)

	const diff1 = diffs.filter((num) => num === 1).length + 1
	const diff3 = diffs.filter((num) => num === 3).length + 1

	return diff1 * diff3
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)
	input.push(0)
	input.sort((a, b) => a - b)

	const queue = [0]
	const seen = new Set()
	const paths: any[] = Array.from({ length: input.length }).fill(0)
	paths[0] = 1

	while (queue.length) {
		const top = queue.pop()!
		input.forEach((num, i) => {
			if (num - top > 0 && num - top < 4) {
				paths[i] += paths[input.indexOf(top)]
				if (!seen.has(num)) {
					queue.unshift(num)
					seen.add(num)
				}
			}
		})
	}

	return paths[paths.length - 1]
}
