---
to: src/hooks/index.ts
inject: true
append: true
---
export * from './<%= h.changeCase.camel(name) %>';