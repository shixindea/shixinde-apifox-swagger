/**
 * 复制
 */
export const copy = (value: string) => {
	navigator.clipboard.writeText(value)
	return true
}

