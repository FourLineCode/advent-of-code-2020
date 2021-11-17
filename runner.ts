import fs from 'fs';

// Give ourselves a little bit of breathing room:
console.log('\n');

async function main() {
	let [, , day, year] = process.argv;

	if (!day) {
		throw new Error('Please provide the day of the solution!');
	}

	if (!year) {
		year = String(new Date().getFullYear());
	}

	const { solution1, solution2 } = await import(`./${year}/solutions/${day}.ts`);
	const dayInput = fs.readFileSync(`./${year}/inputs/${day}.txt`, 'utf8');

	if (!solution1) {
		console.warn('No solution 1 found. Make sure your module exports a "solution1" function.');
	} else {
		console.log('Running solution 1 ...');
		console.time('Time:');
		console.log('Solution - 1:', await solution1(dayInput));
		console.timeEnd('Time:');
		console.log();
	}

	if (!solution2) {
		console.warn('No solution 2 found. Make sure your module exports a "solution2" function.');
	} else {
		console.log('Running solution 2 ...');
		console.time('Time:');
		console.log('Solution - 2:', await solution2(dayInput));
		console.timeEnd('Time:');
		console.log();
	}
}

main().catch((error: Error) => {
	console.error('Unexpected error occurred when running solutions.');
	console.error(error.stack);
});
