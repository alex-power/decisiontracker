export function css(...args: (string | undefined)[]): string {
	return args.filter(x => x).join(" ");
}
