// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function clone(obj: any): any {
	return JSON.parse(JSON.stringify(obj));
}
