function formatInput(rawInput: string): [string, number][] {
	return rawInput.split('\r\n').map((line) => [line[0], +line.substring(1)])
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)
	const degreesMap: Map<string, string> = new Map([
		['0', 'N'],
		['90', 'E'],
		['180', 'S'],
		['270', 'W'],
	])

	let [x, y] = [0, 0]
	let facing = 'E'
	let degrees = 90

	for (const movement of input) {
		let [dir, val] = movement

		dir = dir === 'F' ? facing : dir
		x += dir === 'E' ? val : dir === 'W' ? -val : 0
		y += dir === 'N' ? val : dir === 'S' ? -val : 0

		if (['R', 'L'].includes(dir)) {
			const rotations = val / 90
			for (let i = 0; i < rotations; i++) {
				degrees += dir === 'R' ? 90 : -90
				degrees = degrees < 0 ? 270 : degrees > 270 ? 0 : degrees
			}
			facing = degreesMap.get(String(degrees))!
		}
	}

	return Math.abs(x) + Math.abs(y)
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	let [x, y] = [0, 0]
	let [wX, wY] = [10, 1]

	for (const movement of input) {
		const [direction, value] = movement

		wX += direction === 'E' ? value : direction === 'W' ? -value : 0
		wY += direction === 'N' ? value : direction === 'S' ? -value : 0
		if (direction === 'F') [x, y] = [x + wX * value, y + wY * value]

		if (['R', 'L'].includes(direction)) {
			const rotations = value / 90
			for (let i = 0; i < rotations; i++) [wX, wY] = direction === 'R' ? [wY, -wX] : [-wY, wX]
		}
	}

	return Math.abs(x) + Math.abs(y)
}
