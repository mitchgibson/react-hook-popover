/**
 * @jest-environment jsdom
 */
import { useTheme } from '..';

describe('useTheme', () => {
  it('exists', () => {
    expect(typeof useTheme).toBe('function');
  });
});
