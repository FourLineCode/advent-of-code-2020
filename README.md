# Advent of Code Solutions

My advent of code solutions + runner. (Credit - [Kesne](http://github.com/kesne))

## Using the runner

**Running for a specific day:**

```bash
yarn start <day>
```

Or

```bash
yarn go <day>
```

## Defining a solution

Solutions are defined in TypeScript files in the `solutions` directory. The module should be named after the day (i.e. `day-<day>.ts`), and should export two functions: `solution1` and `solution2`. Each of these solution functions will be called with the input file for that specific day, and the return value will be displayed to the console. The runner will automatilly watch the files and re-run whenever a code change is made. Your solution files can export async functions as well if needed.

## Solution scaffold

```typescript
function formatInput(rawInput: string) {
	return rawInput
}

export function solution1(rawInput: string) {
	const input = formatInput(rawInput)

	return 'TODO'
}

export function solution2(rawInput: string) {
	const input = formatInput(rawInput)

	return 'TODO'
}
```
