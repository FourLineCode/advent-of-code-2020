function formatInput(rawInput: string): string[] {
	return rawInput.split('\n');
}

function getAcc(instructions: string[][]): number {
	let acc = 0;
	const map: Record<number, boolean> = {};
	for (let i = 0; i < instructions.length; ) {
		if (map[i]) break;
		map[i] = true;
		switch (instructions[i][0]) {
			case 'nop': {
				i++;
				break;
			}
			case 'acc': {
				acc += parseInt(instructions[i][1]);
				i++;
				break;
			}
			case 'jmp': {
				i += parseInt(instructions[i][1]);
				break;
			}
		}
	}
	return acc;
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput);
	const instructions = input.map((ins) => ins.split(' '));

	return getAcc(instructions);
}

function checkValid(instructions: string[][]): boolean {
	const map: Record<number, boolean> = {};
	for (let i = 0; i < instructions.length; ) {
		if (map[i]) return false;
		map[i] = true;
		switch (instructions[i][0]) {
			case 'nop': {
				i++;
				break;
			}
			case 'acc': {
				i++;
				break;
			}
			case 'jmp': {
				i += parseInt(instructions[i][1]);
				break;
			}
		}
	}
	return true;
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput);
	const commands = input.map((ins) => ins.split(' '));

	for (let i = 0; i < commands.length; i++) {
		commands[i][0] === 'nop'
			? (commands[i][0] = 'jmp')
			: commands[i][0] === 'jmp'
			? (commands[i][0] = 'nop')
			: null;

		if (checkValid(commands)) return getAcc(commands);

		commands[i][0] === 'nop'
			? (commands[i][0] = 'jmp')
			: commands[i][0] === 'jmp'
			? (commands[i][0] = 'nop')
			: null;
	}

	return 0;
}
