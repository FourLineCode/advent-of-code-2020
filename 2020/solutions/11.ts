function formatInput(rawInput: string): string[][] {
	return rawInput.split('\n').map((row) => row.split(''));
}

function inBound(x: number, y: number, input: string[][]) {
	return x >= 0 && x < input.length && y >= 0 && y <= input[x].length;
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput);

	let changed = true;
	while (changed) {
		changed = false;
		let willChange = [];
		for (const i of Array(input.length).keys()) {
			for (const j of Array(input[i].length).keys()) {
				let occ = 0;
				for (const m of [1, -1]) {
					if (inBound(i + m, j, input) && input[i + m][j] === '#') occ++;
					if (inBound(i, j + m, input) && input[i][j + m] === '#') occ++;
					if (inBound(i + m, j + m, input) && input[i + m][j + m] === '#') occ++;
					if (inBound(i + m, j - m, input) && input[i + m][j - m] === '#') occ++;
				}

				if (occ >= 4 && input[i][j] === '#') willChange.push([i, j]);
				else if (occ === 0 && input[i][j] === 'L') willChange.push([i, j]);
			}
		}
		if (willChange.length) changed = true;
		for (const [x, y] of willChange) {
			const replace: Record<string, string> = { '#': 'L', L: '#' };
			input[x][y] = replace[input[x][y]];
		}
	}
	let count = 0;
	for (const i of Array(input.length).keys())
		for (const j of Array(input[i].length).keys()) if (input[i][j] === '#') count++;

	return count;
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput);

	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	let changed = true;
	while (changed) {
		changed = false;
		let willChange = [];
		for (const i of Array(input.length).keys()) {
			for (const j of Array(input[i].length).keys()) {
				let occ = 0;

				for (const [x, y] of directions) {
					let [xx, yy] = [i + x, j + y];
					while (true) {
						if (inBound(xx, yy, input)) {
							if (input[xx][yy] === 'L') break;
							if (input[xx][yy] === '#') {
								occ++;
								break;
							}
						} else break;
						xx += x;
						yy += y;
					}
				}

				if (occ >= 5 && input[i][j] === '#') willChange.push([i, j]);
				else if (occ === 0 && input[i][j] === 'L') willChange.push([i, j]);
			}
		}
		if (willChange.length) changed = true;
		for (const [x, y] of willChange) {
			const replace: Record<string, string> = { '#': 'L', L: '#' };
			input[x][y] = replace[input[x][y]];
		}
	}
	let count = 0;
	for (const i of Array(input.length).keys())
		for (const j of Array(input[i].length).keys()) if (input[i][j] === '#') count++;

	return count;
}
