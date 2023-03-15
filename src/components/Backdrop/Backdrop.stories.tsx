import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { default as Backdrop } from './Backdrop';
import {usePopover} from '../../hooks';
import {Button} from '../Button';

export default {
    title: 'Backdrop',
    component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => {
    const {popover} = usePopover({
        children: <div className="relative w-96 h-96 rounded-lg p-4 bg-white shadow dark:bg-gray-700">
            <p>Click backdrop to close.</p>
        </div>,
        position: 'center'
    });

    return (
        <>
            <Button onClick={popover.open}>Show Backdrop</Button>
            {popover.render()}
        </>
    )
}

export const Default = Template.bind({});
Default.args = {

};

