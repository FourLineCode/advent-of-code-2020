import fs from 'fs'

// Give ourselves a little bit of breathing room:
console.log('\n')

async function main() {
	let [, , day] = process.argv

	if (!day) {
		throw new Error('Please provide the day of the solution!')
	}

	const { solution1, solution2 } = await import(`./2020/solutions/day-${day}.ts`)
	const dayInput = fs.readFileSync(`./2020/inputs/${day}.txt`, 'utf8')

	if (!solution1) {
		console.warn('No solution 1 found. Make sure your module exports a "solution1" function.')
	} else {
		console.log('Running solution 1 ...')
		console.log('Solution - 1:', await solution1(dayInput))
		console.log()
	}

	if (!solution2) {
		console.warn('No solution 2 found. Make sure your module exports a "solution2" function.')
	} else {
		console.log('Running solution 2 ...')
		console.log('Solution - 2:', await solution2(dayInput))
		console.log()
	}
}

main().catch((e: Error) => {
	console.error('Unexpected error occurred when running solutions.')
	console.error(e.stack)
})
