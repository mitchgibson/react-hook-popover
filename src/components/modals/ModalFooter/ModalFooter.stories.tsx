import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { default as ModalFooter } from './ModalFooter';
import {Button} from '../../Button';

export default {
    title: 'ModalFooter',
    component: ModalFooter,
} as ComponentMeta<typeof ModalFooter>;

const Template: ComponentStory<typeof ModalFooter> = (args) => {
    return (
        <ModalFooter {...args}>
            <Button onClick={() => {alert('Cancel activated.')}}>
                Cancel
            </Button>
            <Button onClick={() => {alert('Save activated.')}}>
                Save
            </Button>
        </ModalFooter>
    );
}

export const Default = Template.bind({});
Default.args = {
};
