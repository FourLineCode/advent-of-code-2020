function formatInput(rawInput: string): string[] {
	return rawInput.split('\n');
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput);

	const init = parseInt(input.shift()!);
	const ids: number[] = input
		.shift()
		?.split(',')
		.filter((n) => n !== 'x')
		.map(Number)!;

	let best = null;
	let res = null;
	for (const id of ids) {
		const time = init % id !== 0 ? init - (init % id) + id : init;
		const wait = time - init;
		if (best === null || wait < best) {
			best = wait;
			res = id * best;
		}
	}

	return res!;
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput);
	input.shift();

	return 0;
}
