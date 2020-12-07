function formatInput(rawInput: string) {
	return rawInput.split('\r\n')
}

function getCount(rules: string[][], looking: string): number {
	let count = 0
	let stack: string[] = []
	rules.forEach((rule) => {
		for (let i = 1; i < rule.length; i++) {
			if (rule[i].includes(looking)) {
				count++
				stack.push(rule[0])
				rule.splice(1)
			}
		}
	})

	stack.forEach((color) => {
		count += getCount(rules, color.slice(0, -1))
	})

	return count
}

export function solution1(rawInput: string): number {
	const input = formatInput(rawInput)

	const rules: string[][] = []

	input.forEach((rule) => {
		const split = rule.split(' contain ')
		const colors = split[1].split(', ')
		split.pop()
		split.push(...colors)
		rules.push(split)
	})

	return getCount(
		rules.filter((rule) => !rule[1].includes('no other bags.')),
		'shiny gold bag'
	)
}

function getTotal(rules: string[][], bag: string): number {
	let count = 0
	let stack: [string, number][] = []
	rules.forEach((rule) => {
		if (rule[0].includes(bag)) {
			for (let i = 1; i < rule.length; i++) {
				if (rule[i].includes('no other bags')) break
				count += parseInt(rule[i][0])
				stack.push([rule[i].substring(2, rule[i].length - 1), parseInt(rule[i][0])])
			}
		}
	})

	stack.forEach((name) => {
		count += name[1] * getTotal(rules, name[0])
	})

	return count
}

export function solution2(rawInput: string): number {
	const input = formatInput(rawInput)

	const rules: string[][] = []

	input.forEach((rule) => {
		let split = rule.split(' contain ')
		const colors = split[1].split(', ')
		split.pop()
		split.push(...colors)
		rules.push(split)
	})

	return getTotal(rules, 'shiny gold bag')
}
