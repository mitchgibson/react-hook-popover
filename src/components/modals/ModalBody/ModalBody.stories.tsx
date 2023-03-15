import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { default as ModalBody } from './ModalBody';

export default {
    title: 'ModalBody',
    component: ModalBody,
} as ComponentMeta<typeof ModalBody>;

const Template: ComponentStory<typeof ModalBody> = (args) => <ModalBody {...args}>ModalBody</ModalBody>;

export const Default = Template.bind({});
Default.args = {
};
