function formatInput(rawInput: string) {
	return rawInput.split('\n');
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput);

	const patterns = [/^byr/, /^iyr/, /^eyr/, /^hgt/, /^hcl/, /^ecl/, /^pid/];
	let count = 0;

	while (input.length) {
		let passport: string[] = [];
		while (input[0] && input.length) passport.push(input.shift()!);
		input.shift();

		const found: Record<number, boolean> = {};
		patterns.forEach((pattern, i) => {
			for (const id of passport.join(' ').split(' ')) {
				if (pattern.test(id) && !found[i]) return (found[i] = true);
			}
		});
		if (Object.keys(found).length === 7) count++;
	}

	return count;
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput);

	const patterns = [
		/^byr:(19[2-9][0-9]|200[0-2])$/,
		/^iyr:(201[0-9]|2020)$/,
		/^eyr:(202[0-9]|2030)$/,
		/^hgt:((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)$/,
		/^hcl:#[0-9a-f]{6}$/,
		/^ecl:(amb|blu|brn|gry|grn|hzl|oth)$/,
		/^pid:\d{9}$/,
	];
	let count = 0;

	while (input.length) {
		let passport: string[] = [];

		while (input[0] !== '' && input.length > 0) passport.push(input.shift()!);
		input.shift();

		const found: Record<number, boolean> = {};
		patterns.forEach((pattern, i) => {
			for (const id of passport.join(' ').split(' ')) {
				if (pattern.test(id) && !found[i]) return (found[i] = true);
			}
		});
		if (Object.keys(found).length === 7) count++;
	}

	return count;
}
