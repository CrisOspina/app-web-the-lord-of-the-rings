type Props = {
  onlyFirstWord?: boolean
}

export function toCapitalize(
  value: string,
  { onlyFirstWord }: Props = { onlyFirstWord: false }
): string {
  if (onlyFirstWord && value) {
    const firstLetter = value.charAt(0).toUpperCase()
    const body = value.slice(1).toLowerCase()
    return `${firstLetter}${body}`
  }

  if (value) {
    return value
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
  }

  return value
}
