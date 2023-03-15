---
to: src/hooks/<%= h.changeCase.camel(name) %>/__tests__/<%= h.changeCase.camel(name) %>.test.tsx
---
/**
 * @jest-environment jsdom
 */
import { <%= h.changeCase.camel(name) %> } from '..';

describe('<%= h.changeCase.camel(name) %>', () => {
  it('exists', () => {
    expect(typeof <%= h.changeCase.camel(name) %>).toBe('function');
  });
});
