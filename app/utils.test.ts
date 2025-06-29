import { describe, it, expect } from 'vitest'

// Simple utility function to test
export function sum(a: number, b: number): number {
  return a + b
}

describe('Basic test suite', () => {
  it('should pass a simple test', () => {
    expect(true).toBe(true)
  })

  it('should correctly sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
    expect(sum(5, 5)).toBe(10)
  })
})
