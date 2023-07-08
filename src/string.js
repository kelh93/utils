/**
 * @name camelCase
 * @param {*} str
 * @returns 
 * @example
 * camelCase('foo-bar') // fooBar
 * camelCase('foo_bar') // fooBar
 */
export const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
}