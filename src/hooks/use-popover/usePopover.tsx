import React, {useState} from 'react';
import {Position} from '../../types/Position';
import {Backdrop} from '../../components/Backdrop/Backdrop';

/**
 * The properties for the popover component that can be passed to the `usePopover` hook.
 */
export interface IPopoverProps {
    /**
     * The position of the popover.
     */
    position?: Position;
    /**
     * The height of the popover.
     */
    height?: 'full' | number;
    /**
     * The view to render inside the popover.
     */
    children?: React.ReactNode;
    /**
     * The root element of the popover.
     */
    root?: HTMLElement;
}

/**
 * The shape of an object returned by the `usePopover` hook.
 * Contains functions to open, close, and render the popover.
 */
export type Popover = {
    /**
     * Opens the popover.
     */
    open:() => void;
    /**
     * Closes the popover.
     */
    close:() => void;
    /**
     * Renders the popover.
     * @param children - The content to render inside the popover.
     */
    render:(children?: React.ReactNode) => React.ReactNode;

    /**
     * set the children of the popover
     * @param children - The content to render inside the popover.
     */
    setChildren:(children:React.ReactNode) => void;
}

/**
 * A custom Hook that provides logic for a popover component.
 * @param props - The properties for the popover, including the view to render.
 * @returns - An object with functions to open, close, and render the popover.
 */
export function usePopover(props: IPopoverProps = {}): {popover:Popover} {
    const [show, setShow] = useState(false);

    const handleOpen = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const controller:Popover = {
        open: () => {
            handleOpen();
        },
        close: () => {
            handleClose();
        },
        render: (children:React.ReactNode) => {
            children = children || props.children;
            return <Backdrop show={show} onClick={handleClose}>{children}</Backdrop>;
        },
        setChildren: (children:React.ReactNode) => {
            props.children = children;
        }
    }

    return {popover:controller};
}

export default usePopover;
