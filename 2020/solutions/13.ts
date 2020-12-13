function formatInput(rawInput: string): string[] {
	return rawInput.split('\r\n')
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	const init = parseInt(input.shift()!)
	const ids: number[] = input
		.shift()
		?.split(',')
		.filter((n) => n !== 'x')
		.map(Number)!

	let best = null
	let res = null
	for (const id of ids) {
		const time = init % id !== 0 ? init - (init % id) + id : init
		const wait = time - init
		if (best === null || wait < best) {
			best = wait
			res = id * best
		}
	}

	return res!
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	let init = 100000000000000
	input.shift()
	const ids: number[] = input
		.shift()
		?.split(',')
		.filter((n) => n !== 'x')
		.map(Number)!

	while (true) {
		const seen = new Set()
		const arr = JSON.parse(JSON.stringify(ids))
		for (let i = init; ; i++) {
			let br = false
			for (let j = 0; j <= seen.size; j++) {
				if (seen.size === 0 && i % arr[j] !== 0) {
					br = true
					break
				}
				if (i % arr[j] === 0 && seen.has(arr[j])) {
					br = true
				}
				if (i % arr[j] === 0) {
					seen.add(arr[j])
					if (seen.size === ids.length) return init
				}
			}
			if (br) break
		}
		init++
	}
}
