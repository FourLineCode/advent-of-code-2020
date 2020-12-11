function formatInput(rawInput: string) {
	return rawInput.split('\r\n')
}

function getBound(pass: string[], lwr: number, upr: number): number {
	if (lwr === upr) return lwr
	const letter = pass.shift()
	letter === 'F' || letter === 'L' ? (upr = Math.floor((lwr + upr) / 2)) : (lwr = Math.ceil((lwr + upr) / 2))
	return getBound(pass, lwr, upr)
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	let max = 0

	input.forEach((data) => {
		const row = getBound(data.substring(0, 8).split(''), 0, 127)
		const col = getBound(data.substring(7).split(''), 0, 7)
		const id = row * 8 + col
		if (id > max) max = id
	})

	return max
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	let seats: number[] = []

	input.forEach((data) => {
		const row = getBound(data.substring(0, 8).split(''), 0, 127)
		const col = getBound(data.substring(7).split(''), 0, 7)
		seats.push(row * 8 + col)
	})

	seats.sort((a, b) => a - b)
	for (let i = 0; i < seats.length; i++) if (seats[i + 1] !== seats[i] + 1) return seats[i] + 1
	return 0
}
