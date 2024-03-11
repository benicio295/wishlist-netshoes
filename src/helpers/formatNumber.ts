export function formatNumber(number: number): string {
	return number.toFixed(2).toString().replace('.', ',');
}
