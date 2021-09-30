/* eslint-disable import/prefer-default-export */

const uppercaseFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase + text.slice(1)
}

export { uppercaseFirstLetter }
