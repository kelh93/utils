import * as Utils from '../src/index.js'

describe('string', () => {
  it('camelCase: hello-world', () => {
    expect(Utils.string.camelCase('hello-world')).toBe('helloWorld')
    expect(Utils.string.camelCase('_world')).toBe('World')
  })

  it('camelCase: hello world', () => {
    expect(Utils.string.camelCase('hello world')).toBe('hello world')
  })

  it('camelCase: _world', () => {
    expect(Utils.string.camelCase('_world')).toBe('World')
  })
})