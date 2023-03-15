import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { default as Modal } from './Modal';
import {Button} from '../../Button';
import {ModalHeader} from '../ModalHeader';
import {ModalBody} from '../ModalBody';
import {ModalFooter} from '../ModalFooter';
import {usePopover} from '../../../hooks';

export default {
    title: 'Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const modal = <Modal {...args}>
        <ModalHeader>Grocery List</ModalHeader>
        <ModalBody>
            <div>
                <ul className="list-disc list-inside ml-4">
                    <li>Soup</li>
                    <li>Bread</li>
                    <li>Eggs</li>
                    <li>Milk</li>
                </ul>
            </div>
        </ModalBody>
        <ModalFooter>
            <div className="flex items-end justify-end">
                <Button onClick={() => {alert('Cancel activated.')}}>
                    Cancel
                </Button>
                <Button onClick={() => {alert('Save activated.')}}>
                    Save
                </Button>
            </div>
        </ModalFooter>
    </Modal>

    const {popover} = usePopover({
        children: modal
    });

    return (
        <>
            <Button onClick={popover.open}>Toggle modal</Button>
            {popover.render()}
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
};
