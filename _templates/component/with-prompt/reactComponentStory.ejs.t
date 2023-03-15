---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { default as <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

export default {
    title: '<%= h.changeCase.pascalCase(name) %>',
    component: <%= h.changeCase.pascalCase(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args) => <<%= h.changeCase.pascalCase(name) %> {...args}><%= h.changeCase.pascalCase(name) %></<%= h.changeCase.pascalCase(name) %>>;

export const Default = Template.bind({});
Default.args = {
};
