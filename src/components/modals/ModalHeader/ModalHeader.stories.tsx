import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { default as ModalHeader } from './ModalHeader';

export default {
    title: 'ModalHeader',
    component: ModalHeader,
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = (args) => {
    return (
        <ModalHeader {...args}>Modal Header</ModalHeader>
    );
};

export const Default = Template.bind({});
Default.args = {

};
