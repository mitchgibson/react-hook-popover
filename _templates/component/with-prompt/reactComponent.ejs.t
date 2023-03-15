---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';
import {useTheme} from "../../hooks";
import cssClassBuilder from '../../CssClassBuilder';
import {ThemeDefinition} from '../../theme';

export interface <%= h.changeCase.pascalCase(name) %>Theme extends ThemeDefinition {
    base:string;
}
export interface <%= h.changeCase.pascalCase(name) %>Props {
    children?:any;
}

export const <%= h.changeCase.pascalCase(name) %>: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = (props:<%= h.changeCase.pascalCase(name) %>Props) => {
  const theme = useTheme('<%= h.changeCase.camel(name) %>') as <%= h.changeCase.pascalCase(name) %>Theme;
  const css:string = cssClassBuilder(props, theme, theme.base);
  return (
    <div className={css}>{ props.children }</div>
  );
}

export default <%= h.changeCase.pascalCase(name) %>;
